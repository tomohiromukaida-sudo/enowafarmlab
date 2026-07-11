/**
 * ENOWA SUMMER EXPERIENCE — single source of truth for copy, timeline,
 * experience cards, and campaign info. Swap text/images here; components
 * only render this data. Real photography replaces the paths under
 * /public/images/summer/** once shooting is complete — folder structure
 * must stay identical.
 */

export type CopyVariant = {
  id: "candidate-1" | "candidate-2" | "candidate-3";
  ja: string[];
  jaLead?: string;
  en: string;
};

/** Active copy used across Hero / OGP / meta. Switch `activeCopyId` to try another candidate. */
export const activeCopyId: CopyVariant["id"] = "candidate-1";

export const copyVariants: CopyVariant[] = [
  {
    id: "candidate-1",
    ja: ["夏こそ、ENOWA。", "収穫する。味わう。遊ぶ。星に願う。", "一生忘れられない夏休みが、ここから始まる。"],
    en: "SUMMER BELONGS AT ENOWA.",
  },
  {
    id: "candidate-2",
    ja: ["そういえば、夏ってこんなに楽しかった。", "風を感じて、土に触れて、旬を味わい、夜空を見上げる。", "忘れていた夏が、ここにあります。"],
    en: "SUMMER, THE WAY YOU REMEMBERED IT.",
  },
  {
    id: "candidate-3",
    ja: ["夏を、好きだった頃の自分へ。"],
    en: "SUMMER BELONGS AT ENOWA.",
  },
];

export const activeCopy = copyVariants.find((c) => c.id === activeCopyId)!;

export const brand = {
  nameJa: "ENOWA YUFUIN",
  nameEn: "ENOWA YUFUIN",
  campaignNameJa: "ENOWA サマーエクスペリエンス",
  campaignNameEn: "ENOWA SUMMER EXPERIENCE",
  tagline: "SUMMER BELONGS AT ENOWA.",
  taglineSub: "Harvest. Savor. Explore. Wish Upon the Stars.",
  taglineClosing: "The summer you'll remember for a lifetime begins here.",
};

/**
 * TODO(reservation-url): real booking URL not yet confirmed in this session.
 * Replace RESERVATION_URL with the live reservation link before launch.
 */
export const RESERVATION_URL = "#reservation";

export const heroImage = {
  src: "/images/summer/hero/hero-main.svg",
  alt: "金たらいに張った氷水に浮かぶ赤いトマトや黄色いズッキーニ、紫ナスなどの夏野菜",
};

export const harvestFeatureImages = [
  {
    src: "/images/summer/harvest/feature-tarai.svg",
    alt: "金たらいの氷水に浮かぶ夏野菜と水滴",
  },
  {
    src: "/images/summer/harvest/feature-tomato-drop.svg",
    alt: "水滴のついた赤いトマトのクローズアップ",
  },
  {
    src: "/images/summer/harvest/feature-child-hands.svg",
    alt: "夏野菜を手に取る子どもの手元",
  },
  {
    src: "/images/summer/harvest/feature-picking.svg",
    alt: "畑で夏野菜を収穫する瞬間",
  },
];

export const shavedIceImages = [
  {
    src: "/images/summer/shaved-ice/feature-machine.svg",
    alt: "赤い業務用かき氷機で氷が削られる瞬間",
  },
  {
    src: "/images/summer/shaved-ice/feature-ice-spray.svg",
    alt: "削られた氷片が飛び散る様子",
  },
  {
    src: "/images/summer/shaved-ice/feature-child-watching.svg",
    alt: "かき氷ができる様子を覗き込む子どもの表情",
  },
  {
    src: "/images/summer/shaved-ice/feature-syrup-pour.svg",
    alt: "野菜シロップが氷に流れる瞬間",
  },
];

export type DinnerFlowStage = {
  stage: "FARM" | "KITCHEN" | "TABLE";
  src: string;
  alt: string;
};

export const dinnerFlow: DinnerFlowStage[] = [
  { stage: "FARM", src: "/images/summer/dinner/flow-farm.svg", alt: "畑での収穫の様子" },
  { stage: "FARM", src: "/images/summer/dinner/flow-wash.svg", alt: "収穫した野菜を洗う様子" },
  { stage: "KITCHEN", src: "/images/summer/dinner/flow-cut.svg", alt: "野菜を切る様子" },
  { stage: "KITCHEN", src: "/images/summer/dinner/flow-fire.svg", alt: "炎で調理する様子" },
  { stage: "KITCHEN", src: "/images/summer/dinner/flow-plate.svg", alt: "盛り付けの様子" },
  { stage: "TABLE", src: "/images/summer/dinner/flow-table.svg", alt: "テーブルに並んだ料理" },
  { stage: "TABLE", src: "/images/summer/dinner/flow-toast.svg", alt: "乾杯をする家族" },
];

export type StayImage = {
  category: "POOL" | "SAUNA" | "ROOM";
  src: string;
  alt: string;
};

export const stayImages: StayImage[] = [
  { category: "POOL", src: "/images/summer/pool/stay-splash-kids.svg", alt: "水をばちゃばちゃして遊ぶ子ども" },
  { category: "POOL", src: "/images/summer/pool/stay-family.svg", alt: "プールサイドで過ごす親子" },
  { category: "SAUNA", src: "/images/summer/pool/stay-sauna-outdoor.svg", alt: "緑に囲まれた外気浴スペース" },
  { category: "SAUNA", src: "/images/summer/pool/stay-sauna-light.svg", alt: "木漏れ日の差すサウナ" },
  { category: "ROOM", src: "/images/summer/room/stay-room-interior.svg", alt: "客室の内観" },
  { category: "ROOM", src: "/images/summer/room/stay-room-bath.svg", alt: "露天風呂のある客室テラス" },
  { category: "ROOM", src: "/images/summer/room/stay-room-morning.svg", alt: "朝の光が差し込む客室" },
];

export const nightFeatureImages = {
  taiko: [
    { src: "/images/summer/taiko/feature-skin.svg", alt: "太鼓の皮のクローズアップ" },
    { src: "/images/summer/taiko/feature-bachi.svg", alt: "バチを構える手元" },
    { src: "/images/summer/taiko/feature-strike.svg", alt: "太鼓を打ち込む瞬間" },
  ],
  stars: [
    { src: "/images/summer/stars/feature-lying.svg", alt: "寝転んで星を見る親子のシルエット" },
    { src: "/images/summer/stars/feature-pointing.svg", alt: "空を指差す子どものシルエット" },
    { src: "/images/summer/stars/feature-sky.svg", alt: "由布院の澄んだ星空" },
  ],
};

export const nav = [
  { label: "コンセプト", href: "#day" },
  { label: "体験", href: "#experiences" },
  { label: "食", href: "#dinner" },
  { label: "泊まる", href: "#stay" },
  { label: "夜", href: "#night" },
  { label: "キャンペーン詳細", href: "#campaign-info" },
];

export type TimelineItem = {
  time: string;
  titleEn: string;
  titleJa: string;
  description: string;
  image: string;
  alt: string;
};

export const timeline: TimelineItem[] = [
  {
    time: "15:00",
    titleEn: "CHECK IN",
    titleJa: "チェックイン",
    description: "由布院の緑に包まれて、夏の滞在が始まる。",
    image: "/images/summer/hero/checkin.svg",
    alt: "由布院の緑に囲まれたENOWAのエントランスで迎えられるゲスト",
  },
  {
    time: "16:00",
    titleEn: "HARVEST",
    titleJa: "ハーベスト",
    description: "畑に入り、旬の夏野菜に触れる。",
    image: "/images/summer/harvest/harvest-hands.svg",
    alt: "夏野菜を手で収穫する瞬間",
  },
  {
    time: "17:00",
    titleEn: "POOL & SAUNA",
    titleJa: "プール＆サウナ",
    description: "水と風を感じながら、思い思いに過ごす。",
    image: "/images/summer/pool/pool-splash.svg",
    alt: "プールで水しぶきをあげて遊ぶ様子",
  },
  {
    time: "18:30",
    titleEn: "FARM DRIVEN DINNER",
    titleJa: "ファームドリブンディナー",
    description: "その日、その畑で育った命を一皿に。",
    image: "/images/summer/dinner/dinner-table.svg",
    alt: "収穫した野菜を使ったディナーの一皿",
  },
  {
    time: "20:30",
    titleEn: "SUMMER EXPERIENCE",
    titleJa: "サマーエクスペリエンス",
    description: "太鼓や季節限定の体験を楽しむ。",
    image: "/images/summer/taiko/taiko-hands.svg",
    alt: "太鼓を打つ瞬間のクローズアップ",
  },
  {
    time: "21:30",
    titleEn: "STARS",
    titleJa: "スターズ",
    description: "夜空を見上げ、流れ星を待つ。",
    image: "/images/summer/stars/stargazing.svg",
    alt: "夜空を見上げる親子のシルエット",
  },
  {
    time: "7:00",
    titleEn: "MORNING FARM",
    titleJa: "モーニングファーム",
    description: "朝露の残る畑を歩く。",
    image: "/images/summer/harvest/morning-dew.svg",
    alt: "朝露の残る畑を歩く様子",
  },
  {
    time: "8:00",
    titleEn: "BREAKFAST",
    titleJa: "ブレックファースト",
    description: "畑の恵みから、一日を始める。",
    image: "/images/summer/dinner/breakfast.svg",
    alt: "畑の恵みを使った朝食",
  },
];

export type ExperienceCard = {
  id: string;
  title: string;
  titleJa: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  label?: string;
};

export const experiences: ExperienceCard[] = [
  {
    id: "farm-harvest",
    title: "FARM HARVEST",
    titleJa: "ファームハーベスト",
    description: "畑に入り、その手で旬の夏野菜を収穫する。",
    image: "/images/summer/harvest/experience-harvest.svg",
    alt: "夏野菜を収穫するゲスト",
    link: "#harvest",
    label: "要予約",
  },
  {
    id: "vegetable-shaved-ice",
    title: "VEGETABLE SHAVED ICE",
    titleJa: "ベジタブルかき氷",
    description: "畑から生まれた野菜シロップの、夏だけのひと皿。",
    image: "/images/summer/shaved-ice/experience-shavedice.svg",
    alt: "野菜シロップのかき氷を作る様子",
    link: "#shaved-ice",
  },
  {
    id: "pool",
    title: "POOL",
    titleJa: "プール",
    description: "水しぶきと笑い声に満ちた、夏だけの時間。",
    image: "/images/summer/pool/experience-pool.svg",
    alt: "プールで遊ぶ家族",
    link: "#stay",
  },
  {
    id: "drone",
    title: "DRONE EXPERIENCE",
    titleJa: "ドローン体験",
    description: "由布院の空と緑を、上空から見渡す。",
    image: "/images/summer/drone/experience-drone.svg",
    alt: "ドローンを操縦するゲスト",
    link: "#experiences",
    label: "季節限定",
  },
  {
    id: "taiko",
    title: "TAIKO PERFORMANCE",
    titleJa: "太鼓演奏",
    description: "体に響く音と振動を、間近で。",
    image: "/images/summer/taiko/experience-taiko.svg",
    alt: "太鼓を演奏する打ち手の腕のアップ",
    link: "#night",
  },
  {
    id: "stargazing",
    title: "STARGAZING",
    titleJa: "スターゲイジング",
    description: "由布院の澄んだ夜空に、流れ星を待つ。",
    image: "/images/summer/stars/experience-stars.svg",
    alt: "夜空を見上げる様子",
    link: "#night",
  },
  {
    id: "sauna",
    title: "SAUNA",
    titleJa: "サウナ",
    description: "汗と外気浴で、心と体をほどく。",
    image: "/images/summer/pool/experience-sauna.svg",
    alt: "外気浴を楽しむ様子",
    link: "#stay",
  },
  {
    id: "farm-driven-dinner",
    title: "FARM DRIVEN DINNER",
    titleJa: "ファームドリブンディナー",
    description: "今日の畑が、今夜の一皿になる。",
    image: "/images/summer/dinner/experience-dinner.svg",
    alt: "ファームドリブンディナーの一皿",
    link: "#dinner",
  },
];

export type SyrupFlavor = {
  color: "GREEN" | "RED" | "YELLOW";
  name: string;
  ingredients: string;
  image: string;
};

export const syrups: SyrupFlavor[] = [
  {
    color: "GREEN",
    name: "TBD",
    ingredients: "TBD",
    image: "/images/summer/syrup/syrup-green.svg",
  },
  {
    color: "RED",
    name: "TBD",
    ingredients: "TBD",
    image: "/images/summer/syrup/syrup-red.svg",
  },
  {
    color: "YELLOW",
    name: "TBD",
    ingredients: "TBD",
    image: "/images/summer/syrup/syrup-yellow.svg",
  },
];

export type CampaignInfoItem = {
  label: string;
  value: string;
};

/**
 * All values are TBD until confirmed by the marketing team.
 * Edit this array only — CampaignInformation renders it directly.
 */
export const campaignInfo: CampaignInfoItem[] = [
  { label: "実施期間", value: "TBD" },
  { label: "対象宿泊日", value: "TBD" },
  { label: "対象者", value: "TBD" },
  { label: "体験内容", value: "TBD" },
  { label: "事前予約の要否", value: "TBD" },
  { label: "定員", value: "TBD" },
  { label: "雨天・天候時の対応", value: "TBD" },
  { label: "宿泊料金への包含有無", value: "TBD" },
  { label: "注意事項", value: "TBD" },
];

export const seo = {
  title: "ENOWA SUMMER EXPERIENCE｜夏こそ、ENOWA。｜ENOWA YUFUIN",
  description:
    "収穫し、味わい、遊び、星を見上げる。ファーム、夏野菜、プール、かき氷、太鼓、星空まで。ENOWA YUFUINで、一生忘れられない夏を。",
  ogImageAlt: "金たらいに浮かぶ夏野菜と氷水",
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
