/**
 * ENOWA SUMMER EXPERIENCE — single source of truth for copy, timeline,
 * and seasonal experience data. Swap text/images here; components only
 * render this data. Real photography replaces the paths under
 * /public/images/summer/** once shooting is complete — folder structure
 * must stay identical.
 *
 * Content below matches the approved Adobe XD flow ("フロー2", screen
 * 2639577a) — transcribed directly from the design on 2026-07-23. Earlier
 * drafts in this file (10-section layout, 8-item timeline, image-card
 * grid) were replaced because they were written from the brief document
 * before the final design was reviewed; they did not match the copy the
 * client actually approved.
 */

export const brand = {
  nameJa: "ENOWA YUFUIN",
  nameEn: "ENOWA YUFUIN",
  campaignNameJa: "ENOWA サマーエクスペリエンス",
  campaignNameEn: "ENOWA SUMMER EXPERIENCE",
};

/**
 * TODO(reservation-url): real booking URL not yet confirmed in this session.
 * Replace with the live reservation link before launch.
 */
export const RESERVATION_URL = "#reservation";

/**
 * TODO(contact-url): real inquiry/contact page URL not yet confirmed.
 * Replace with the live contact link before launch.
 */
export const CONTACT_URL = "#contact";

export const nav = [
  { label: "コンセプト", href: "#manifesto" },
  { label: "24時間", href: "#day" },
  { label: "体験", href: "#experiences" },
];

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const hero = {
  eyebrow: "AT ENOWA, YUFUIN — SUMMER 2026",
  /** Rendered as 3 lines; `highlight` marks the word styled in the accent color. */
  headlineLines: ["夏を、", "好きだった頃の", "自分へ。"],
  highlightWord: "好きだった",
  subJa: ["収穫する。味わう。遊ぶ。星に願う。", "一生忘れられない夏休みが、ここから始まる。"],
  subEn: ["Harvest. Taste. Play. Wish upon the stars.", "An unforgettable summer vacation begins at ENOWA."],
  ctaPrimary: "宿泊予約をする",
  ctaSecondary: "夏の過ごし方を見る",
  ctaSecondaryHref: "#day",
  image: {
    src: "/images/summer/hero/hero-main.svg",
    alt: "かごに盛られた夏野菜（トマト、ズッキーニ、ナス、ピーマン）と草花",
  },
};

// ---------------------------------------------------------------------------
// Manifesto (full-bleed statement section between Hero and the 24-hour flow)
// ---------------------------------------------------------------------------

export const manifesto = {
  eyebrow: "AT ENOWA, YUFUIN",
  headline: "The Summer You Remember.",
  body: ["子どもの頃の夏を、覚えていますか。", "土の匂い、水しぶき、太鼓の音、空いっぱいの星。", "ENOWAは、あの頃の夏を取り戻す場所です。"],
  image: {
    src: "/images/summer/hero/manifesto-forest.svg",
    alt: "由布院の緑に囲まれた小道と木漏れ日",
  },
};

// ---------------------------------------------------------------------------
// 24-hour timeline
// ---------------------------------------------------------------------------

export const timelineIntro = {
  eyebrow: "24 Hours of ENOWA Summer",
  heading: "ENOWAの夏は、24時間が特別になる。",
  lead: ["朝、畑で収穫する。", "昼、風の中で遊ぶ。", "夕暮れ、自然の甘さを味わう。", "夜、鼓動を感じる。", "そして最後は、星に願う。"],
  closing: "この夏だけの、一日をお過ごしください。",
};

export type TimelineMoment = {
  time: string;
  eyebrow: string;
  /** Optional Japanese proper-name label shown above the headline (e.g. an event's official JA name). */
  titleJa?: string;
  /** Lines as displayed in the design (2 lines each). */
  headline: string[];
  /** Substring within `headline` styled in the accent color, if any. */
  highlightWord?: string;
  body: string;
  /** "split" = photo box beside text (light section). "immersive" = full-bleed photo behind text (dark overlay). */
  variant: "split" | "immersive";
  /** Text alignment within an "immersive" section; ignored for "split". */
  align?: "left" | "right" | "center";
  tags?: string[];
  schedule?: string;
  note?: string;
  image: { src: string; alt: string };
  gallery?: { src: string; alt: string }[];
};

export const timeline: TimelineMoment[] = [
  {
    time: "13:00",
    eyebrow: "at ENOWA — Farm Tour",
    headline: ["畑のトマトは、熱い。", "その場でかじってみる。"],
    highlightWord: "熱い",
    body: "太陽の熱を抱えたまま実った一粒を、その場でかじる。冷蔵庫では決して出会えない、生命のみずみずしさがそこにあります。",
    variant: "split",
    tags: ["ファームツアー／夏野菜収穫体験", "空から見るファームツアー／ドローン体験"],
    image: {
      src: "/images/summer/harvest/timeline-farm-tour.svg",
      alt: "畑でトマトを収穫する親子",
    },
  },
  {
    time: "14:30",
    eyebrow: "at ENOWA — Vegetable Syrup Kakigori",
    headline: ["はじめての甘さに、", "笑った。"],
    highlightWord: "甘さ",
    body: "エノファームのとれたて野菜で作るシロップは、フルーツより優しい甘さ。",
    variant: "split",
    image: {
      src: "/images/summer/shaved-ice/timeline-kakigori.svg",
      alt: "野菜シロップのかき氷",
    },
    gallery: [
      { src: "/images/summer/syrup/syrup-green.svg", alt: "グリーンの野菜シロップの瓶" },
      { src: "/images/summer/syrup/syrup-red.svg", alt: "レッドの野菜シロップの瓶" },
      { src: "/images/summer/syrup/syrup-yellow.svg", alt: "イエローの野菜シロップの瓶" },
    ],
  },
  {
    time: "15:30",
    eyebrow: "at ENOWA — Private Pool",
    headline: ["由布院の風に", "飛び込んだ"],
    body: "見晴らしのいいプライベートプールで、笑い声が夏空へ溶けていく。",
    variant: "immersive",
    align: "left",
    note: "※ プールのないお部屋もあります",
    image: {
      src: "/images/summer/pool/timeline-pool-splash.svg",
      alt: "プライベートプールで水しぶきをあげて遊ぶ子どもたち",
    },
  },
  {
    time: "19:30",
    eyebrow: "at ENOWA — Genryu Taiko",
    titleJa: "豊の国ゆふいん源流太鼓 野外演奏",
    headline: ["夏の夜に、", "源流の鼓動がひびく。"],
    highlightWord: "源流の鼓動",
    body: "ENOWAガーデンのウッドデッキに響く太鼓の響き。由布院の夜とひとつになる。",
    variant: "immersive",
    align: "right",
    schedule: "実施日時　7月29日（水）19:30〜／8月28日（木）19:30〜",
    image: {
      src: "/images/summer/taiko/timeline-taiko.svg",
      alt: "夕暮れに演奏される太鼓の連なり",
    },
  },
  {
    time: "21:30",
    eyebrow: "Night at ENOWA",
    headline: ["夜空にも、", "旬がある。"],
    body: "畑に収穫の季節があるように、夜空にも一年に一度だけの見頃があります。夏は、ペルセウス座流星群。客室やENOWAガーデンから、由布院の静かな夜空をゆっくりとお楽しみください。",
    variant: "immersive",
    align: "center",
    image: {
      src: "/images/summer/stars/timeline-night-sky.svg",
      alt: "由布院の澄んだ星空と流れ星",
    },
  },
];

// ---------------------------------------------------------------------------
// Seasonal Experiences (list panel — not an image-card grid in the approved design)
// ---------------------------------------------------------------------------

export type SeasonalExperience = {
  title: string;
  description: string;
  badge?: string;
  schedule?: string;
  note?: string;
};

export const seasonalExperiencesIntro = {
  eyebrow: "An ENOWA Summer",
  heading: "Seasonal Experiences",
};

/**
 * Order matches the 24-hour timeline (ファームツアー → ドローン → かき氷 → プール →
 * 太鼓 → 星空), confirmed 2026-07-27.
 */
export const seasonalExperiences: SeasonalExperience[] = [
  {
    title: "ファームツアー",
    description: "夏野菜が育つENOWA FARMを巡り、自然の循環に触れる体験。",
  },
  {
    title: "空から見るファームツアー（ドローン体験）",
    description: "歩いた畑を、鳥の目線で見下ろす体験。",
    badge: "8月土曜限定",
    schedule: "12:00〜14:00の間で実施",
  },
  {
    title: "ENOWAオリジナルかき氷",
    description: "その日のファームの収穫状況によって素材が変わる、ENOWAらしい夏の一皿。",
    badge: "SUMMER ONLY",
  },
  {
    title: "プライベートプール",
    description: "由布岳を望む開放的なプール。水しぶきと笑い声が夏を作る。",
    note: "※ プールのないお部屋もあります。",
  },
  {
    title: "豊の国ゆふいん源流太鼓 野外演奏",
    description: "ゆふいん源流太鼓による演奏と、太鼓の演奏体験。",
    badge: "日程限定",
    schedule: "実施日時　7月29日（水）19:30〜／8月28日（木）19:30〜",
  },
  {
    title: "ペルセウス座流星群観測",
    description: "光害のない由布院の夜空を見上げる。",
    badge: "SUMMER ONLY",
    schedule: "観測期　7月下旬〜8月下旬　22:00〜夜明け前頃",
  },
];

// ---------------------------------------------------------------------------
// Closing CTA
// ---------------------------------------------------------------------------

export const closingCta = {
  eyebrow: "Optional Experiences",
  heading: "この夏、ENOWAで過ごす一日を。",
  body: "畑から始まり、食卓、温泉、星空へとつながるENOWAの夏。由布院の夏を、ENOWAならではの滞在体験としてお楽しみください。",
  ctaPrimary: "宿泊予約をする",
  ctaSecondary: "お問い合わせ",
  image: {
    src: "/images/summer/hero/closing-valley.svg",
    alt: "由布院の山々を望む景色",
  },
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footer = {
  disclaimer: "掲載写真にはイメージを含みます。一部の写真はENOWAで過ごす夏の世界観を表現したイメージです。",
  copyright: "© ENOWA ALL RIGHTS RESERVED.",
};

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export const seo = {
  title: "ENOWA SUMMER EXPERIENCE｜夏を、好きだった頃の自分へ。｜ENOWA YUFUIN",
  description:
    "畑のトマトをその場でかじり、野菜シロップのかき氷に笑い、プールに飛び込み、源流太鼓が響く夜を経て、流れ星を待つ。ENOWA YUFUINで、子どもの頃の夏を取り戻す一日を。",
  ogImageAlt: "かごに盛られた夏野菜",
};

export const gaEvents = {
  pageView: "summer_lp_view",
  heroReserveClick: "hero_reserve_click",
  timelineReserveClick: "timeline_reserve_click",
  experienceCardClick: "experience_card_click",
  roomDetailClick: "room_detail_click",
  campaignDetailClick: "campaign_detail_click",
  bottomReserveClick: "bottom_reserve_click",
  stickyReserveClick: "sticky_reserve_click",
} as const;
