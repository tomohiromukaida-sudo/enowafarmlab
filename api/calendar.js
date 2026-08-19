import { put, list, del, head } from "@vercel/blob";
import { DEFAULT_DOC, ROWS, SEASONS, rowName, periodLabel, seasonOfPos, migrateDoc } from "./_data.js";

// ===== ストレージ設計（Advanced Operations 削減版） =====
// - リビジョンは決定的パス calendar/rNNNNNNNN.json（サフィックスなし・上書き禁止）
// - 最新リビジョンの所在は calendar/latest.json（ポインタ、上書き可・cache 60s）
// - GET: ポインタ→リビジョンを公開URLで直接fetch（advanced ops = 0）
// - POST: head()プローブで真の最新を特定（simple ops）→ put×2（リビジョン＋ポインタ）
// - list() はポインタ未整備時の一回限りのブートストラップのみ
const PREFIX = "calendar/r";
const PTR_PATH = "calendar/latest.json";
const HISTORY_LIMIT = 300;
const KEEP_REVISIONS = 20;

function revPath(rev) {
  return PREFIX + String(rev).padStart(8, "0") + ".json";
}

function baseUrl() {
  if (process.env.BLOB_BASE_URL) return process.env.BLOB_BASE_URL.replace(/\/$/, "");
  const m = (process.env.BLOB_READ_WRITE_TOKEN || "").match(/^vercel_blob_rw_([A-Za-z0-9]+)_/);
  if (!m) throw new Error("BLOB_BASE_URL unresolved");
  return `https://${m[1].toLowerCase()}.public.blob.vercel-storage.com`;
}

async function fetchJsonSafe(url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) { return null; }
}

async function exists(url) {
  try { await head(url); return true; } catch (e) { return false; }
}

// ポインタが無い／壊れている場合のみの一回限りのフォールバック（list = advanced op）
async function bootstrapPointer() {
  const { blobs } = await list({ prefix: PREFIX, limit: 1000 });
  if (!blobs.length) return null;
  let best = null, bestRev = -1;
  for (const b of blobs) {
    const m = b.pathname.match(/\/r(\d{8})/);
    if (!m) continue;
    const rev = Number(m[1]);
    if (rev > bestRev || (rev === bestRev && new Date(b.uploadedAt) > new Date(best.uploadedAt))) {
      best = b; bestRev = rev;
    }
  }
  if (!best) return null;
  const ptr = { rev: bestRev, url: best.url };
  try { await writePointer(ptr); } catch (e) { /* 次回に再試行 */ }
  return ptr;
}

async function writePointer(ptr) {
  await put(PTR_PATH, JSON.stringify(ptr), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
  });
}

// authoritative=true（POST時）は headプローブでポインタの60秒キャッシュ遅れを補正する
async function readLatestDoc(authoritative) {
  const base = baseUrl();
  let ptr = await fetchJsonSafe(`${base}/${PTR_PATH}`);
  if (!ptr || !Number.isInteger(ptr.rev)) ptr = await bootstrapPointer();
  if (!ptr) return null;
  if (authoritative) {
    while (await exists(`${base}/${revPath(ptr.rev + 1)}`)) {
      ptr = { rev: ptr.rev + 1, url: `${base}/${revPath(ptr.rev + 1)}` };
    }
  }
  let doc = await fetchJsonSafe(ptr.url);
  if (!doc) {
    const fresh = await bootstrapPointer();
    if (fresh) doc = await fetchJsonSafe(fresh.url);
  }
  return doc;
}

// リビジョンを書き込む。同時編集で同じrevを書こうとした側は失敗する（呼び出し側でリトライ）
async function writeDoc(doc) {
  const path = revPath(doc.rev);
  await put(path, JSON.stringify(doc), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: false,
    contentType: "application/json",
    cacheControlMaxAge: 31536000, // 不変ファイルなので長期キャッシュでよい
  });
  const url = `${baseUrl()}/${path}`;
  await writePointer({ rev: doc.rev, url });
  // 古いリビジョンの掃除（決定的パスなのでlist不要。存在しなければ無害）
  const old = doc.rev - KEEP_REVISIONS;
  if (old > 0) { try { await del(`${baseUrl()}/${revPath(old)}`); } catch (e) { /* noop */ } }
  return url;
}

function isConflict(e) {
  const msg = String((e && e.message) || e).toLowerCase();
  return msg.includes("exist") || msg.includes("overwrite");
}

function bad(res, code, msg) {
  res.status(code).json({ error: msg });
}

function sanitizeItem(body, existing) {
  // 編集時もbody.rowを尊重する（分類＝カテゴリー間の移動を許可）
  let rowKey = String(body.row || "");
  if (!ROWS.some((r) => r.key === rowKey)) rowKey = existing ? existing.row : "";
  if (!ROWS.some((r) => r.key === rowKey)) return { err: "行の指定が不正です" };
  const text = String(body.text || "").trim().slice(0, 80);
  if (!text) return { err: "企画名を入力してください" };
  const m = Number(body.m);
  if (!Number.isInteger(m) || m < 0 || m > 11) return { err: "開始月が不正です" };
  let span = Number(body.span);
  if (!Number.isInteger(span) || span < 1) return { err: "期間が不正です" };
  span = Math.min(span, 12 - m);
  let season = String(body.season || "");
  if (!SEASONS.includes(season)) season = seasonOfPos(m);
  const kari = !!body.kari;
  const sub = body.sub != null ? String(body.sub).trim().slice(0, 80) : undefined;
  const it = { row: rowKey, text, m, span, season, kari };
  if (sub) it.sub = sub;
  return { it };
}

// docに1操作を適用する（リトライ時に新しいdocへ再適用できるよう純関数的に）
function applyAction(doc, body, action) {
  if (action === "add") {
    const { it, err } = sanitizeItem(body, null);
    if (err) return { err, code: 400 };
    it.id = "u" + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
    doc.items.push(it);
    return { detail: `${rowName(it.row)}：「${it.text}」（${periodLabel(it)}）` };
  }
  const idx = doc.items.findIndex((i) => i.id === String(body.id || ""));
  if (idx < 0) return { err: "対象の企画が見つかりません（他の人が削除した可能性）。再読み込みしてください", code: 409 };
  const before = doc.items[idx];
  if (action === "delete") {
    doc.items.splice(idx, 1);
    return { detail: `${rowName(before.row)}：「${before.text}」（${periodLabel(before)}）` };
  }
  const { it, err } = sanitizeItem(body, before);
  if (err) return { err, code: 400 };
  it.id = before.id;
  if (before.sub && it.sub === undefined) it.sub = before.sub;
  doc.items[idx] = it;
  const moved = before.row !== it.row ? `【分類変更 ${rowName(before.row)}→${rowName(it.row)}】` : "";
  return { detail: `${rowName(it.row)}：${moved}「${it.text}」（${periodLabel(it)}）（変更前：「${before.text}」（${periodLabel(before)}））` };
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "GET") {
    let doc = await readLatestDoc(false);
    if (!doc) {
      doc = DEFAULT_DOC;
      try { await writeDoc(doc); } catch (e) { /* 初回シードの失敗は無視（次回リトライ） */ }
    } else if (!doc.start) {
      doc = migrateDoc(doc);
      doc.rev = (doc.rev || 0) + 1;
      doc.updatedAt = new Date().toISOString();
      try { await writeDoc(doc); } catch (e) { /* 失敗時は次回GETで再試行 */ }
    }
    res.status(200).json(doc);
    return;
  }

  if (req.method !== "POST") { bad(res, 405, "method not allowed"); return; }

  const body = req.body || {};
  const expected = process.env.EDIT_CODE || "";
  if (!expected || String(body.editCode || "") !== expected) {
    bad(res, 401, "編集コードが違います");
    return;
  }
  const editor = String(body.editor || "").trim().slice(0, 30);
  if (!editor) { bad(res, 400, "編集者名を入力してください"); return; }
  const action = String(body.action || "");
  if (!["add", "edit", "delete"].includes(action)) { bad(res, 400, "actionが不正です"); return; }

  // 楽観的並行制御：同じrevへの同時書き込みは片方が失敗→最新を読み直して再適用
  let lastErr = null;
  for (let attempt = 0; attempt < 4; attempt++) {
    let doc = (await readLatestDoc(true)) || JSON.parse(JSON.stringify(DEFAULT_DOC));
    if (!doc.start) doc = migrateDoc(doc);

    const r = applyAction(doc, body, action);
    if (r.err) { bad(res, r.code || 400, r.err); return; }

    const now = new Date().toISOString();
    const actionJa = action === "add" ? "追加" : action === "delete" ? "削除" : "修正";
    doc.history.push({ ts: now, editor, action: actionJa, detail: r.detail });
    if (doc.history.length > HISTORY_LIMIT) doc.history = doc.history.slice(-HISTORY_LIMIT);
    doc.rev = (doc.rev || 0) + 1;
    doc.updatedAt = now;

    try {
      await writeDoc(doc);
      res.status(200).json(doc);
      return;
    } catch (e) {
      lastErr = e;
      if (!isConflict(e)) break;
      // 競合：少し待って最新から再適用
      await new Promise((ok) => setTimeout(ok, 150 * (attempt + 1)));
    }
  }
  bad(res, 503, "保存が混み合っています。もう一度お試しください");
  if (lastErr) console.error("writeDoc failed:", lastErr);
}
