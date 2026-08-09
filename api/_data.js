// 共通定義と初期データ（Blobにドキュメントが無いときのシード）
// カレンダーは START_YM から12か月（2026年8月〜2027年7月）。
// 各企画の m は起点からのオフセット（0 = 2026年8月）。
export const START_YM = { y: 2026, mo: 8 };

export function monthAt(pos) {
  const t = (START_YM.mo - 1 + pos);
  return { y: START_YM.y + Math.floor(t / 12), mo: (t % 12) + 1 };
}

export function monthLabel(pos, withYear) {
  const { y, mo } = monthAt(pos);
  return withYear ? `${y}年${mo}月` : `${mo}月`;
}

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

export function seasonOfPos(pos) {
  const mo = monthAt(pos).mo;
  return mo >= 3 && mo <= 5 ? "spring" : mo >= 6 && mo <= 8 ? "summer" : mo >= 9 && mo <= 11 ? "autumn" : "winter";
}

export function rowName(key) {
  const r = ROWS.find((r) => r.key === key);
  return r ? r.name : key;
}

export function periodLabel(it) {
  if (it.span >= 12) return "通年";
  const a = monthAt(it.m);
  if (it.span === 1) return `${a.y}年${a.mo}月`;
  const b = monthAt(it.m + it.span - 1);
  return a.y === b.y ? `${a.y}年${a.mo}月〜${b.mo}月` : `${a.y}年${a.mo}月〜${b.y}年${b.mo}月`;
}

export const DEFAULT_DOC = {
  rev: 1,
  start: "2026-08",
  updatedAt: "2026-08-09T03:00:00.000Z",
  items: [
    // Season Theme（仮）
    { id: "t2a", row: "theme", text: "収穫の最盛期", sub: "夏キャンペーン構造を年間へ展開", m: 0, span: 1, season: "summer", kari: true },
    { id: "t3",  row: "theme", text: "実りと発酵", sub: "収穫と仕込みの季節", m: 1, span: 3, season: "autumn", kari: true },
    { id: "t4",  row: "theme", text: "仕込みと静養", sub: "発酵・保存・湯治", m: 4, span: 3, season: "winter", kari: true },
    { id: "t1",  row: "theme", text: "芽吹きと種まき", sub: "畑が動き出す季節", m: 7, span: 3, season: "spring", kari: true },
    { id: "t2b", row: "theme", text: "収穫の最盛期", sub: "夏キャンペーン構造を年間へ展開", m: 10, span: 2, season: "summer", kari: true },

    // 宿泊者向け特別体験（仮）
    { id: "g2a", row: "guest", text: "Summer Harvest Retreat（夏キャンペーン）", m: 0, span: 1, season: "summer", kari: false },
    { id: "g3",  row: "guest", text: "収穫祭・発酵ディナー", m: 1, span: 3, season: "autumn", kari: true },
    { id: "g4",  row: "guest", text: "湯治×発酵の冬リトリート", m: 4, span: 3, season: "winter", kari: true },
    { id: "g1",  row: "guest", text: "朝のFARM散歩と種まき体験", m: 7, span: 3, season: "spring", kari: true },
    { id: "g2b", row: "guest", text: "Summer Harvest Retreat（夏キャンペーン）", m: 10, span: 2, season: "summer", kari: false },

    // Optional Tour：定常型（通年）
    { id: "f1", row: "tourFixed", text: "ENOWA FARMツアー", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f2", row: "tourFixed", text: "ホンダ太陽見学ツアー", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f3", row: "tourFixed", text: "Honda Sun × ENOWA FARM LAB見学", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f4", row: "tourFixed", text: "生産者訪問", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f5", row: "tourFixed", text: "ENOWAの循環型社会を学ぶツアー", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f6", row: "tourFixed", text: "D&I体験プログラム", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f7", row: "tourFixed", text: "APUフィールドワーク", m: 0, span: 12, season: "fixed", kari: false },
    { id: "f8", row: "tourFixed", text: "ファーム・キッチン・サービスのバックヤード体験", m: 0, span: 12, season: "fixed", kari: false },

    // Optional Tour：季節限定
    { id: "s2b", row: "tourSeason", text: "夏野菜収穫ツアー", m: 0, span: 1, season: "summer", kari: false },
    { id: "s4b", row: "tourSeason", text: "源流太鼓体験", m: 0, span: 1, season: "summer", kari: false },
    { id: "s5",  row: "tourSeason", text: "ペルセウス座流星群観察", m: 0, span: 1, season: "summer", kari: false },
    { id: "s6",  row: "tourSeason", text: "外部農家での収穫体験（稲刈り等）", m: 1, span: 2, season: "autumn", kari: false },
    { id: "s7",  row: "tourSeason", text: "ワイナリー訪問（収穫期）", m: 1, span: 2, season: "autumn", kari: false },
    { id: "s8",  row: "tourSeason", text: "柚子胡椒づくり", m: 2, span: 2, season: "autumn", kari: false },
    { id: "s9",  row: "tourSeason", text: "紅葉体験", m: 3, span: 1, season: "autumn", kari: false },
    { id: "s10", row: "tourSeason", text: "冬の自然体験", m: 4, span: 3, season: "winter", kari: false },
    { id: "s11", row: "tourSeason", text: "味噌づくり", m: 4, span: 3, season: "winter", kari: false },
    { id: "s12", row: "tourSeason", text: "発酵・加工体験（仕込みもの）", m: 4, span: 3, season: "winter", kari: false },
    { id: "s13", row: "tourSeason", text: "酒蔵訪問（寒仕込み）", m: 5, span: 2, season: "winter", kari: false },
    { id: "s1",  row: "tourSeason", text: "外部農家での収穫体験（山菜・春野菜）", m: 7, span: 3, season: "spring", kari: false },
    { id: "s2a", row: "tourSeason", text: "夏野菜収穫ツアー", m: 10, span: 2, season: "summer", kari: false },
    { id: "s3",  row: "tourSeason", text: "七島藺の収穫・制作体験", m: 10, span: 2, season: "summer", kari: false },
    { id: "s4a", row: "tourSeason", text: "源流太鼓体験", m: 11, span: 1, season: "summer", kari: false },

    // Chef Event / Friends Dish（仮）
    { id: "c2", row: "chef", text: "Friends Dish 夏", m: 0, span: 1, season: "summer", kari: true },
    { id: "c3", row: "chef", text: "Friends Dish 秋", m: 2, span: 1, season: "autumn", kari: true },
    { id: "c4", row: "chef", text: "Friends Dish 冬", m: 6, span: 1, season: "winter", kari: true },
    { id: "c1", row: "chef", text: "Friends Dish 春", m: 9, span: 1, season: "spring", kari: true },

    // Farm Feature（仮）
    { id: "ff2a", row: "farm", text: "夏野菜（トマト・ズッキーニ等）", m: 0, span: 1, season: "summer", kari: true },
    { id: "ff3",  row: "farm", text: "根菜・新米・きのこ", m: 1, span: 3, season: "autumn", kari: true },
    { id: "ff4",  row: "farm", text: "柑橘・葉物・保存食の仕込み", m: 4, span: 3, season: "winter", kari: true },
    { id: "ff1",  row: "farm", text: "春野菜・ハーブ・種まき", m: 7, span: 3, season: "spring", kari: true },
    { id: "ff2b", row: "farm", text: "夏野菜（トマト・ズッキーニ等）", m: 10, span: 2, season: "summer", kari: true },

    // MD / Seasonal Product（仮）
    { id: "m2a", row: "md", text: "夏野菜ピクルス・トマトソース", m: 0, span: 1, season: "summer", kari: true },
    { id: "m3",  row: "md", text: "柚子胡椒・新米セット", m: 1, span: 3, season: "autumn", kari: true },
    { id: "m4",  row: "md", text: "味噌・発酵ギフト", m: 4, span: 3, season: "winter", kari: true },
    { id: "m1",  row: "md", text: "ハーブソルト・ドレッシング", m: 7, span: 3, season: "spring", kari: true },
    { id: "m2b", row: "md", text: "夏野菜ピクルス・トマトソース", m: 10, span: 2, season: "summer", kari: true },
  ],
  history: [
    {
      ts: "2026-08-09T03:00:00.000Z",
      editor: "Claude（初期セットアップ）",
      action: "公開",
      detail: "修正指示に基づく7項目構成で初期データを投入（2026年8月〜2027年7月、Optional Tourを定常型／季節限定の2段に）",
    },
  ],
};

// 旧形式（3月起点・年なし）→ 新形式（2026年8月起点）への一回限りの移行。
// 旧 m: 0=3月…11=2月。年をまたぐ窓に再配置し、7月→8月の境界をまたぐ企画は分割する。
export function migrateDoc(old) {
  const newItems = [];
  for (const it of old.items) {
    if (it.span >= 12) {
      newItems.push({ ...it, m: 0, span: 12 });
      continue;
    }
    // 旧インデックス→暦月→新ポジション
    const positions = [];
    for (let i = 0; i < it.span; i++) {
      const calMo = ((it.m + i + 2) % 12) + 1;            // 旧0=3月
      positions.push((calMo - START_YM.mo + 12) % 12);     // 新0=8月
    }
    positions.sort((a, b) => a - b);
    // 連続区間ごとに1企画へ
    const runs = [];
    for (const p of positions) {
      const last = runs[runs.length - 1];
      if (last && p === last.m + last.span) last.span++;
      else runs.push({ m: p, span: 1 });
    }
    runs.forEach((r, idx) => {
      newItems.push({ ...it, id: idx === 0 ? it.id : it.id + "-b" + idx, m: r.m, span: r.span });
    });
  }
  return {
    ...old,
    start: "2026-08",
    items: newItems,
    history: [
      ...old.history,
      {
        ts: new Date().toISOString(),
        editor: "Claude（システム）",
        action: "公開",
        detail: "カレンダーの起点を2026年8月に変更（2026年8月〜2027年7月の12か月表示・年表記を追加）。夏季企画は期間を保ったまま窓の両端に分割配置",
      },
    ],
  };
}
