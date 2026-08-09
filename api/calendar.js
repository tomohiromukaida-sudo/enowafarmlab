import { put, list, del } from "@vercel/blob";
import { DEFAULT_DOC, ROWS, SEASONS, rowName, periodLabel, seasonOfPos, migrateDoc } from "./_data.js";

// 同一パス上書きはCDNキャッシュで古い内容が返るため、リビジョンごとに
// 不変のBlobを作成し、最新リビジョンを選んで読む（read-after-write整合のため）
const PREFIX = "calendar/r";
const HISTORY_LIMIT = 300;
const KEEP_REVISIONS = 20;

function revPath(rev) {
  return PREFIX + String(rev).padStart(8, "0") + ".json";
}

async function listRevisions() {
  const { blobs } = await list({ prefix: PREFIX, limit: 1000 });
  return blobs.sort((a, b) =>
    a.pathname === b.pathname
      ? new Date(a.uploadedAt) - new Date(b.uploadedAt)
      : a.pathname < b.pathname ? -1 : 1
  );
}

async function readDoc() {
  const blobs = await listRevisions();
  if (!blobs.length) return null;
  const latest = blobs[blobs.length - 1];
  const res = await fetch(latest.url, { cache: "no-store" });
  if (!res.ok) throw new Error("blob fetch failed: " + res.status);
  return await res.json();
}

async function writeDoc(doc) {
  await put(revPath(doc.rev), JSON.stringify(doc), {
    access: "public",
    addRandomSuffix: true, // 同時書き込みでも衝突しない
    contentType: "application/json",
  });
  // 古いリビジョンの掃除（失敗しても本処理には影響させない）
  try {
    const blobs = await listRevisions();
    const stale = blobs.slice(0, Math.max(0, blobs.length - KEEP_REVISIONS));
    if (stale.length) await del(stale.map((b) => b.url));
  } catch (e) { /* noop */ }
}

function bad(res, code, msg) {
  res.status(code).json({ error: msg });
}

function sanitizeItem(body, existing) {
  const rowKey = existing ? existing.row : String(body.row || "");
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

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "GET") {
    let doc = await readDoc();
    if (!doc) {
      doc = DEFAULT_DOC;
      try { await writeDoc(doc); } catch (e) { /* 初回シードの失敗は無視（次回リトライ） */ }
    } else if (!doc.start) {
      // 旧形式（3月起点）→ 2026年8月起点へ一回限りの自動移行
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

  let doc = (await readDoc()) || JSON.parse(JSON.stringify(DEFAULT_DOC));
  if (!doc.start) doc = migrateDoc(doc);
  const now = new Date().toISOString();
  let detail = "";

  if (action === "add") {
    const { it, err } = sanitizeItem(body, null);
    if (err) { bad(res, 400, err); return; }
    it.id = "u" + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
    doc.items.push(it);
    detail = `${rowName(it.row)}：「${it.text}」（${periodLabel(it)}）`;
  } else {
    const idx = doc.items.findIndex((i) => i.id === String(body.id || ""));
    if (idx < 0) { bad(res, 409, "対象の企画が見つかりません（他の人が削除した可能性）。再読み込みしてください"); return; }
    const before = doc.items[idx];
    if (action === "delete") {
      doc.items.splice(idx, 1);
      detail = `${rowName(before.row)}：「${before.text}」（${periodLabel(before)}）`;
    } else {
      const { it, err } = sanitizeItem(body, before);
      if (err) { bad(res, 400, err); return; }
      it.id = before.id;
      if (before.sub && it.sub === undefined) it.sub = before.sub;
      doc.items[idx] = it;
      detail = `${rowName(it.row)}：「${it.text}」（${periodLabel(it)}）（変更前：「${before.text}」（${periodLabel(before)}））`;
    }
  }

  const actionJa = action === "add" ? "追加" : action === "delete" ? "削除" : "修正";
  doc.history.push({ ts: now, editor, action: actionJa, detail });
  if (doc.history.length > HISTORY_LIMIT) doc.history = doc.history.slice(-HISTORY_LIMIT);
  doc.rev = (doc.rev || 0) + 1;
  doc.updatedAt = now;

  await writeDoc(doc);
  res.status(200).json(doc);
}
