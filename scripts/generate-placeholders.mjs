#!/usr/bin/env node
/**
 * Generates placeholder SVGs for every image path referenced in
 * src/data/summerCampaign.ts. Run with `node scripts/generate-placeholders.mjs`.
 *
 * These are stand-ins only — each one is clearly watermarked "PHOTO PENDING".
 * Once real photography arrives, drop files with the SAME paths into
 * /public/images/summer/** and delete this script's output; no component
 * code needs to change because paths are keyed through summerCampaign.ts.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = join(__dirname, "..", "public", "images", "summer");

const PALETTES = {
  hero: ["#D1452A", "#E8B93A", "#7C9A4C"],
  harvest: ["#7C9A4C", "#D1452A", "#E8B93A"],
  "shaved-ice": ["#CFEAE6", "#3E8FB0", "#FAF6EE"],
  syrup: ["#7C9A4C", "#D1452A", "#E8B93A"],
  pool: ["#3E8FB0", "#CFEAE6", "#1F3D2B"],
  room: ["#1F3D2B", "#FAF6EE", "#4A6B45"],
  drone: ["#3E8FB0", "#7C9A4C", "#FAF6EE"],
  taiko: ["#14140F", "#D1452A", "#0B1220"],
  stars: ["#0B1220", "#06090F", "#E8B93A"],
  dinner: ["#D1452A", "#7C9A4C", "#1F3D2B"],
};

function pickPalette(folder) {
  return PALETTES[folder] ?? ["#1F3D2B", "#7C9A4C", "#FAF6EE"];
}

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

function svgPlaceholder({ path, alt, width, height, folder }) {
  const palette = pickPalette(folder);
  const seed = hashString(path);
  const c1 = palette[seed % palette.length];
  const c2 = palette[(seed + 1) % palette.length];
  const angle = seed % 360;
  const fileLabel = path.split("/").pop().replace(".svg", "");

  const circles = Array.from({ length: 5 }, (_, i) => {
    const cx = ((seed >> (i * 3)) % 100) / 100 * width;
    const cy = ((seed >> (i * 4 + 1)) % 100) / 100 * height;
    const r = 40 + ((seed >> (i * 2)) % 5) * (Math.min(width, height) / 22);
    return `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${r.toFixed(0)}" fill="#ffffff" opacity="0.06" />`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(alt)}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${angle} 0.5 0.5)">
      <stop offset="0%" stop-color="${c1}" />
      <stop offset="100%" stop-color="${c2}" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)" />
  ${circles}
  <rect x="0" y="0" width="${width}" height="${height}" fill="#000000" opacity="0.12" />
  <text x="50%" y="46%" text-anchor="middle" font-family="sans-serif" font-size="${Math.max(18, width / 26)}" fill="#ffffff" opacity="0.9" font-weight="600">${escapeXml(fileLabel)}</text>
  <text x="50%" y="54%" text-anchor="middle" font-family="sans-serif" font-size="${Math.max(11, width / 60)}" fill="#ffffff" opacity="0.7">PHOTO PENDING — ${width}×${height}</text>
</svg>`;
}

function escapeXml(str) {
  return str.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]));
}

// path (relative to /public/images/summer), alt text, preset size
const HERO = [1920, 1080];
const FEATURE = [1600, 1067];
const FLOW = [1000, 1250];
const CARD = [900, 1125];
const TIMELINE = [800, 600];
const BOTTLE = [800, 1000];

const MANIFEST = [
  ["hero/hero-main.svg", "金たらいの氷水に浮かぶ夏野菜", HERO],
  ["hero/checkin.svg", "由布院の緑に包まれたチェックイン", TIMELINE],
  ["harvest/harvest-hands.svg", "夏野菜を収穫する手元", TIMELINE],
  ["harvest/morning-dew.svg", "朝露の残る畑", TIMELINE],
  ["harvest/experience-harvest.svg", "ファームハーベスト体験", CARD],
  ["harvest/feature-tarai.svg", "金たらいの氷水と夏野菜", FEATURE],
  ["harvest/feature-tomato-drop.svg", "水滴のついたトマト", FEATURE],
  ["harvest/feature-child-hands.svg", "夏野菜を手に取る子ども", FEATURE],
  ["harvest/feature-picking.svg", "収穫の瞬間", FEATURE],
  ["shaved-ice/experience-shavedice.svg", "ベジタブルかき氷体験", CARD],
  ["shaved-ice/feature-machine.svg", "かき氷機で氷を削る瞬間", FEATURE],
  ["shaved-ice/feature-ice-spray.svg", "飛び散る氷片", FEATURE],
  ["shaved-ice/feature-child-watching.svg", "覗き込む子どもの表情", FEATURE],
  ["shaved-ice/feature-syrup-pour.svg", "シロップが流れる瞬間", FEATURE],
  ["syrup/syrup-green.svg", "グリーンの野菜シロップ", BOTTLE],
  ["syrup/syrup-red.svg", "レッドの野菜シロップ", BOTTLE],
  ["syrup/syrup-yellow.svg", "イエローの野菜シロップ", BOTTLE],
  ["pool/pool-splash.svg", "プールの水しぶき", TIMELINE],
  ["pool/experience-pool.svg", "プール体験", CARD],
  ["pool/experience-sauna.svg", "サウナ体験", CARD],
  ["pool/stay-splash-kids.svg", "水をばちゃばちゃする子ども", FEATURE],
  ["pool/stay-family.svg", "プールサイドの親子", FEATURE],
  ["pool/stay-sauna-outdoor.svg", "緑に囲まれた外気浴", FEATURE],
  ["pool/stay-sauna-light.svg", "木漏れ日のサウナ", FEATURE],
  ["room/stay-room-interior.svg", "客室の内観", FEATURE],
  ["room/stay-room-bath.svg", "露天風呂のあるテラス", FEATURE],
  ["room/stay-room-morning.svg", "朝の光が差す客室", FEATURE],
  ["drone/experience-drone.svg", "ドローン体験", CARD],
  ["taiko/taiko-hands.svg", "太鼓を打つ手元", TIMELINE],
  ["taiko/experience-taiko.svg", "太鼓演奏体験", CARD],
  ["taiko/feature-skin.svg", "太鼓の皮", FEATURE],
  ["taiko/feature-bachi.svg", "バチを構える手元", FEATURE],
  ["taiko/feature-strike.svg", "打ち込む瞬間", FEATURE],
  ["stars/stargazing.svg", "夜空を見上げる親子", TIMELINE],
  ["stars/experience-stars.svg", "スターゲイジング体験", CARD],
  ["stars/feature-lying.svg", "寝転んで星を見る", FEATURE],
  ["stars/feature-pointing.svg", "空を指差す子ども", FEATURE],
  ["stars/feature-sky.svg", "由布院の星空", FEATURE],
  ["dinner/dinner-table.svg", "ファームドリブンディナー", TIMELINE],
  ["dinner/breakfast.svg", "畑の恵みの朝食", TIMELINE],
  ["dinner/experience-dinner.svg", "ディナー体験", CARD],
  ["dinner/flow-farm.svg", "畑での収穫", FLOW],
  ["dinner/flow-wash.svg", "野菜を洗う", FLOW],
  ["dinner/flow-cut.svg", "野菜を切る", FLOW],
  ["dinner/flow-fire.svg", "炎で調理", FLOW],
  ["dinner/flow-plate.svg", "盛り付け", FLOW],
  ["dinner/flow-table.svg", "テーブルに並ぶ料理", FLOW],
  ["dinner/flow-toast.svg", "乾杯する家族", FLOW],
];

for (const [relPath, alt, [width, height]] of MANIFEST) {
  const folder = relPath.split("/")[0];
  const outPath = join(OUT_ROOT, relPath);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, svgPlaceholder({ path: relPath, alt, width, height, folder }));
}

console.log(`Generated ${MANIFEST.length} placeholder SVGs under ${OUT_ROOT}`);
