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
  taiko: ["#14140F", "#D1452A", "#0B1220"],
  stars: ["#0B1220", "#06090F", "#E8B93A"],
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
const IMMERSIVE = [1920, 1280];
const SPLIT = [1200, 900];
const BOTTLE = [800, 1000];

const MANIFEST = [
  ["hero/hero-main.svg", "かごに盛られた夏野菜と草花", HERO],
  ["hero/manifesto-forest.svg", "由布院の緑に囲まれた小道", IMMERSIVE],
  ["hero/closing-valley.svg", "由布院の山々を望む景色", IMMERSIVE],
  ["harvest/timeline-farm-tour.svg", "畑でトマトを収穫する親子", SPLIT],
  ["shaved-ice/timeline-kakigori.svg", "野菜シロップのかき氷", SPLIT],
  ["syrup/syrup-green.svg", "グリーンの野菜シロップ", BOTTLE],
  ["syrup/syrup-red.svg", "レッドの野菜シロップ", BOTTLE],
  ["syrup/syrup-yellow.svg", "イエローの野菜シロップ", BOTTLE],
  ["pool/timeline-pool-splash.svg", "プライベートプールで水しぶきをあげる子どもたち", IMMERSIVE],
  ["taiko/timeline-taiko.svg", "夕暮れに演奏される太鼓の連なり", IMMERSIVE],
  ["stars/timeline-night-sky.svg", "由布院の澄んだ星空と流れ星", IMMERSIVE],
];

for (const [relPath, alt, [width, height]] of MANIFEST) {
  const folder = relPath.split("/")[0];
  const outPath = join(OUT_ROOT, relPath);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, svgPlaceholder({ path: relPath, alt, width, height, folder }));
}

console.log(`Generated ${MANIFEST.length} placeholder SVGs under ${OUT_ROOT}`);
