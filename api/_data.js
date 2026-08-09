// 初期データ（Blobにドキュメントが無いときのシード）と共通定義
export const MONTH_NAMES = ["3月","4月","5月","6月","7月","8月","9月","10月","11月","12月","1月","2月"];

export const ROWS = [
  { key: "theme",      name: "Season Theme" },
  { key: "guest",      name: "宿泊者向け特別体験" },
  { key: "tourFixed",  name: "Optional Tour：定常型" },
  { key: "tourSeason", name: "Optional Tour：季節限定" },
  { key: "chef",       name: "Chef Event / Friends Dish" },
  { key: "farm",       name: "Farm Feature" },
  { key: "md",         name: "MD / Seasonal Product" },
];

export const SEASONS = ["spring", "summer", "autumn", "winter", "fixed"];

export function rowName(key) {
  const r = ROWS.find((r) => r.key === key);
  return r ? r.name : key;
}

export function periodLabel(it) {
  if (it.span >= 12) return "通年";
  if (it.span === 1) return MONTH_NAMES[it.m];
  return MONTH_NAMES[it.m] + "〜" + MONTH_NAMES[it.m + it.span - 1];
}

export const DEFAULT_DOC = {
  rev: 1,
  updatedAt: "2026-08-09T03:00:00.000Z",
  items: [
    { id: "t1", row: "theme", text: "芽吹きと種まき", sub: "畑が動き出す季節", m: 0, span: 3, season: "spring", kari: true },
    { id: "t2", row: "theme", text: "収穫の最盛期", sub: "夏キャンペーン構造を年間へ展開", m: 3, span: 3, season: "summer", kari: true },
    { id: "t3", row: "theme", text: "実りと発酵", sub: "収穫と仕込みの季節", m: 6, span: 3, season: "autumn", kari: true },
    { id: "t4", row: "theme", text: "仕込みと静養", sub: "発酵・保存・湯治", m: 9, span: 3, season: "winter", kari: true },

    { id: "g1", row: "guest", text: "朝のFARM散歩と種まき体験", m: 0, span: 3, season: "spring", kari: true },
    { id: "g2", row: "guest", text: "Summer Harvest Retreat（夏キャンペーン）", m: 3, span: 3, season: "summer", kari: false },
    { id: "g3", row: "guest", text: "収穫祭・発酵ディナー", m: 6, span: 3, season: "autumn", kari: true },
    { id: "g4", row: "guest", text: "湯治×発酵の冬リトリート", m: 9, span: 3, season: "winter", kari: true },

    { id: "f1", row: "tourFixed", text: "ENOWA FARMツアー", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f2", row: "tourFixed", text: "ホンダ太陽見学ツアー", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f3", row: "tourFixed", text: "Honda Sun × ENOWA FARM LAB見学", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f4", row: "tourFixed", text: "生産者訪問", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f5", row: "tourFixed", text: "ENOWAの循環型社会を学ぶツアー", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f6", row: "tourFixed", text: "D&I体験プログラム", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f7", row: "tourFixed", text: "APUフィールドワーク", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f8", row: "tourFixed", text: "ファーム・キッチン・サービスのバックヤード体験", m: 0, span: 12, season: "fixed", kari: false },

    { id: "s1", row: "tourSeason", text: "外部農家での収穫体験（山菜・春野菜）", m: 0, span: 3, season: "spring", kari: false },
    { id: "s2", row: "tourSeason", text: "夏野菜収穫ツアー", m: 3, span: 3, season: "summer", kari: false },
    { id: "s3", row: "tourSeason", text: "七島藺の収穫・制作体験", m: 3, span: 2, season: "summer", kari: false },
    { id: "s4", row: "tourSeason", text: "源流太鼓体験", m: 4, span: 2, season: "summer", kari: false },
    { id: "s5", row: "tourSeason", text: "ペルセウス座流星群観察", m: 5, span: 1, season: "summer", kari: false },
    { id: "s6", row: "tourSeason", text: "外部農家での収穫体験（稲刈り等）", m: 6, span: 2, season: "autumn", kari: false },
    { id: "s7", row: "tourSeason", text: "ワイナリー訪問（収穫期）", m: 6, span: 2, season: "autumn", kari: false },
    { id: "s8", row: "tourSeason", text: "柚子胡椒づくり", m: 7, span: 2, season: "autumn", kari: false },
    { id: "s9", row: "tourSeason", text: "紅葉体験", m: 8, span: 1, season: "autumn", kari: false },
    { id: "s10", row: "tourSeason", text: "冬の自然体験", m: 9, span: 3, season: "winter", kari: false },
    { id: "s11", row: "tourSeason", text: "味噌づくり", m: 9, span: 3, season: "winter", kari: false },
    { id: "s12", row: "tourSeason", text: "発酵・加工体験（仕込みもの）", m: 9, span: 3, season: "winter", kari: false },
    { id: "s13", row: "tourSeason", text: "酒蔵訪問（寒仕込み）", m: 10, span: 2, season: "winter", kari: false },

    { id: "c1", row: "chef", text: "Friends Dish 春", m: 2, span: 1, season: "spring", kari: true },
    { id: "c2", row: "chef", text: "Friends Dish 夏", m: 5, span: 1, season: "summer", kari: true },
    { id: "c3", row: "chef", text: "Friends Dish 秋", m: 7, span: 1, season: "autumn", kari: true },
    { id: "c4", row: "chef", text: "Friends Dish 冬", m: 11, span: 1, season: "winter", kari: true },

    { id: "ff1", row: "farm", text: "春野菜・ハーブ・種まき", m: 0, span: 3, season: "spring", kari: true },
    { id: "ff2", row: "farm", text: "夏野菜（トマト・ズッキーニ等）", m: 3, span: 3, season: "summer", kari: true },
    { id: "ff3", row: "farm", text: "根菜・新米・きのこ", m: 6, span: 3, season: "autumn", kari: true },
    { id: "ff4", row: "farm", text: "柑橘・葉物・保存食の仕込み", m: 9, span: 3, season: "winter", kari: true },

    { id: "m1", row: "md", text: "ハーブソルト・ドレッシング", m: 0, span: 3, season: "spring", kari: true },
    { id: "m2", row: "md", text: "夏野菜ピクルス・トマトソース", m: 3, span: 3, season: "summer", kari: true },
    { id: "m3", row: "md", text: "柚子胡椒・新米セット", m: 6, span: 3, season: "autumn", kari: true },
    { id: "m4", row: "md", text: "味噌・発酵ギフト", m: 9, span: 3, season: "winter", kari: true },
  ],
  history: [
    {
      ts: "2026-08-09T03:00:00.000Z",
      editor: "Claude（初期セットアップ）",
      action: "公開",
      detail: "修正指示に基づく7項目構成で初期データを投入（Layer欄廃止、Optional Tourを定常型／季節限定の2段に）",
    },
  ],
};
