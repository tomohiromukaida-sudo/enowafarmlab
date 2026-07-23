# ENOWA SUMMER EXPERIENCE LP — 翻訳文書 / Translation Reference

**2026-07-23 改訂**: 実際に承認されたAdobe XDデザイン（フロー2）の内容に合わせてサイトを全面改修したため、本ドキュメントも全面的に作り直しました。旧版（8項目タイムライン・カード型Experiences等）の対訳は破棄しています。

- サイト実装（多言語ページ化）は行っていません。翻訳確認・入稿・将来の実装用の参照資料です。
- 原文（日本語）は `src/data/summerCampaign.ts` および各コンポーネントの表示テキストと一致しています。
- `AT ENOWA, YUFUIN — SUMMER 2026` / `The Summer You Remember.` / `at ENOWA — Farm Tour` のようなセクションの目印（eyebrow）や英語見出しは、ブランド上の演出として**全言語で英語のまま**使用する想定のため、対訳を「英語のまま使用」と記載しています。
- 「エノファーム」「ENOWA FARM」「ENOWAガーデン」「ゆふいん源流太鼓」は固有名詞のため、原則ローマ字表記のまま各言語に残しています。

---

## 1. SEO / メタ情報

| 項目 | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|
| title | ENOWA SUMMER EXPERIENCE｜夏を、好きだった頃の自分へ。｜ENOWA YUFUIN | ENOWA SUMMER EXPERIENCE \| To the Summer You Once Loved. \| ENOWA YUFUIN | ENOWA SUMMER EXPERIENCE｜獻給，曾經熱愛夏天的自己。｜ENOWA YUFUIN | ENOWA SUMMER EXPERIENCE｜献给，曾经热爱夏天的自己。｜ENOWA YUFUIN | ENOWA SUMMER EXPERIENCE｜여름을 좋아했던, 그 시절의 나에게.｜ENOWA YUFUIN |
| description | 畑のトマトをその場でかじり、野菜シロップのかき氷に笑い、プールに飛び込み、源流太鼓が響く夜を経て、流れ星を待つ。ENOWA YUFUINで、子どもの頃の夏を取り戻す一日を。 | Bite into a sun-warmed tomato straight from the field, smile over vegetable-syrup shaved ice, dive into the pool, feel the Genryu Taiko drums echo through the night, and wait for a shooting star. Reclaim the summers of your childhood, for one day, at ENOWA YUFUIN. | 在田間當場咬下番茄，因野菜糖漿剉冰而微笑，躍入泳池，度過源流太鼓迴盪的夜晚，等待流星劃過。在ENOWA YUFUIN，找回兒時夏天的一天。 | 在田间当场咬下番茄，因野菜糖浆刨冰而微笑，跃入泳池，度过源流太鼓回荡的夜晚，等待流星划过。在ENOWA YUFUIN，找回儿时夏天的一天。 | 밭의 토마토를 그 자리에서 베어물고, 채소 시럽 빙수에 웃음짓고, 풀에 뛰어들고, 겐류다이코가 울려퍼지는 밤을 지나, 별똥별을 기다리다. ENOWA YUFUIN에서, 어린 시절의 여름을 되찾는 하루를. |

---

## 2. Header ナビゲーション

| JA | EN | zh-TW | zh-CN | KO |
|---|---|---|---|---|
| コンセプト | Concept | 概念 | 概念 | 컨셉 |
| 24時間 | 24 Hours | 24小時 | 24小时 | 24시간 |
| 体験 | Experiences | 體驗 | 体验 | 체험 |
| メニューを開く（aria） | Open menu | 開啟選單 | 打开菜单 | 메뉴 열기 |
| メニューを閉じる（aria） | Close menu | 關閉選單 | 关闭菜单 | 메뉴 닫기 |

---

## 3. Hero

`AT ENOWA, YUFUIN — SUMMER 2026` は英語のまま全言語で使用。

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 見出し（ハイライト語: 好きだった） | 夏を、好きだった頃の自分へ。 | To the summer you once loved. | 獻給，曾經熱愛夏天的自己。 | 献给，曾经热爱夏天的自己。 | 여름을 좋아했던, 그 시절의 나에게. |
| サブコピー1（日本語） | 収穫する。味わう。遊ぶ。星に願う。 | *(英語版はサイト上の公式訳を使用)* Harvest. Taste. Play. Wish upon the stars. | 收穫。品味。玩樂。向星星許願。 | 采摘。品味。玩耍。向星星许愿。 | 수확하다. 맛보다. 즐기다. 별에게 소원을 빌다. |
| サブコピー2（日本語） | 一生忘れられない夏休みが、ここから始まる。 | An unforgettable summer vacation begins at ENOWA. | 一生難忘的夏日假期，從ENOWA開始。 | 一生难忘的夏日假期，从ENOWA开始。 | 평생 잊지 못할 여름휴가가, ENOWA에서 시작됩니다. |
| CTA①（サイト共通） | 宿泊予約をする | Book Your Stay | 立即訂房 | 立即订房 | 숙박 예약하기 |
| CTA②（#dayへスクロール） | 夏の過ごし方を見る | See How to Spend Summer | 查看夏日玩法 | 查看夏日玩法 | 여름을 보내는 방법 보기 |
| スクロール誘導（aria） | 次のセクションへスクロール | Scroll to next section | 捲動至下一區塊 | 滚动至下一区块 | 다음 섹션으로 스크롤 |

---

## 4. Manifesto（新規セクション）

`AT ENOWA, YUFUIN` と見出し `The Summer You Remember.` は英語のまま全言語で使用。

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 子どもの頃の夏を、覚えていますか。 | Do you remember the summers of your childhood? | 您還記得兒時的夏天嗎？ | 您还记得儿时的夏天吗？ | 어린 시절의 여름을 기억하시나요? |
| 土の匂い、水しぶき、太鼓の音、空いっぱいの星。 | The scent of earth, the splash of water, the sound of taiko drums, a sky full of stars. | 泥土的氣息、水花四濺、太鼓的聲響、滿天的星斗。 | 泥土的气息、水花四溅、太鼓的声响、满天的星斗。 | 흙 내음, 물보라, 태고 소리, 가득한 밤하늘의 별. |
| ENOWAは、あの頃の夏を取り戻す場所です。 | ENOWA is a place to reclaim that summer. | ENOWA，是找回那個夏天的地方。 | ENOWA，是找回那个夏天的地方。 | ENOWA는, 그 시절의 여름을 되찾는 곳입니다. |

---

## 5. 24-Hour Timeline イントロ

`24 Hours of ENOWA Summer` は英語のまま全言語で使用。

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 見出し | ENOWAの夏は、24時間が特別になる。 | At ENOWA, every hour of summer becomes special. | 在ENOWA，夏天的24小時都變得特別。 | 在ENOWA，夏天的24小时都变得特别。 | ENOWA의 여름은, 24시간이 특별해집니다. |
| リード1 | 朝、畑で収穫する。 | Morning, harvest in the fields. | 清晨，在農田裡採收。 | 清晨，在农田里采摘。 | 아침, 밭에서 수확하다. |
| リード2 | 昼、風の中で遊ぶ。 | Midday, play in the breeze. | 白天，在風中玩樂。 | 白天，在风中玩耍。 | 낮, 바람 속에서 놀다. |
| リード3 | 夕暮れ、自然の甘さを味わう。 | Dusk, savor nature's sweetness. | 黃昏，品味自然的甘甜。 | 黄昏，品味自然的甘甜。 | 저녁, 자연의 달콤함을 맛보다. |
| リード4 | 夜、鼓動を感じる。 | Night, feel the heartbeat. | 夜晚，感受鼓動。 | 夜晚，感受鼓动。 | 밤, 고동을 느끼다. |
| リード5 | そして最後は、星に願う。 | And finally, wish upon a star. | 最後，向星星許願。 | 最后，向星星许愿。 | 그리고 마지막은, 별에게 소원을 빌다. |
| 結び | この夏だけの、一日をお過ごしください。 | Spend a day found only in this summer. | 請享受這個夏天限定的一天。 | 请享受这个夏天限定的一天。 | 이 여름에만 있는 하루를 보내세요. |

### タイムライン 5項目

各項目の `at ENOWA — Farm Tour` 等の英語eyebrowは全言語で英語のまま使用。時刻もそのまま表示。

**13:00 — Farm Tour**（ハイライト語: 熱い）

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 畑のトマトは、熱い。その場でかじってみる。 | The tomatoes in the field are warm. Take a bite, right there. | 田裡的番茄，是溫熱的。當場咬一口試試。 | 田里的番茄，是温热的。当场咬一口试试。 | 밭의 토마토는, 따뜻하다. 그 자리에서 한 입 베어물어보세요. |
| 太陽の熱を抱えたまま実った一粒を、その場でかじる。冷蔵庫では決して出会えない、生命のみずみずしさがそこにあります。 | Bite into a tomato that ripened while still holding the sun's warmth — a freshness you'll never find in a refrigerator. | 咬下一顆仍帶著陽光熱度成熟的果實。那是冰箱裡絕對嚐不到的、生命的鮮甜。 | 咬下一颗仍带着阳光热度成熟的果实。那是冰箱里绝对尝不到的、生命的鲜甜。 | 태양의 열기를 그대로 머금은 채 익은 한 알을, 그 자리에서 베어뭅니다. 냉장고에서는 결코 만날 수 없는, 생명의 싱그러움이 그곳에 있습니다. |
| ファームツアー／夏野菜収穫体験 | Farm Tour / Summer Vegetable Harvest Experience | 農場導覽／夏季蔬菜採收體驗 | 农场导览／夏季蔬菜采摘体验 | 팜 투어 / 여름 채소 수확 체험 |
| 空から見るファームツアー／ドローン体験 | Aerial Farm Tour / Drone Experience | 空中農場導覽／無人機體驗 | 空中农场导览／无人机体验 | 하늘에서 보는 팜 투어 / 드론 체험 |

**14:30 — Vegetable Syrup Kakigori**（ハイライト語: 甘さ）

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| はじめての甘さに、笑った。 | A sweetness like no other made me smile. | 從未有過的甘甜，讓人不禁微笑。 | 从未有过的甘甜，让人不禁微笑。 | 처음 느끼는 단맛에, 웃음이 났다. |
| エノファームのとれたて野菜で作るシロップは、フルーツより優しい甘さ。 | Syrup made from vegetables freshly picked at ENO FARM — a sweetness gentler than fruit. | 使用ENO FARM現採蔬菜製成的糖漿，甜味比水果更溫和。 | 使用ENO FARM现采蔬菜制成的糖浆，甜味比水果更温和。 | ENO FARM에서 갓 수확한 채소로 만든 시럽은, 과일보다 부드러운 단맛. |

**15:30 — Private Pool**

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 由布院の風に飛び込んだ | Dove into the breeze of Yufuin. | 躍入由布院的微風之中。 | 跃入由布院的微风之中。 | 유후인의 바람 속으로 뛰어들었다. |
| 見晴らしのいいプライベートプールで、笑い声が夏空へ溶けていく。 | In a private pool with sweeping views, laughter dissolves into the summer sky. | 在視野遼闊的私人泳池裡，笑聲融入夏日的天空。 | 在视野辽阔的私人泳池里，笑声融入夏日的天空。 | 전망이 탁 트인 프라이빗 풀에서, 웃음소리가 여름 하늘로 녹아듭니다. |
| ※ プールのないお部屋もあります | * Some rooms do not have a pool. | ※ 部分房型無附設泳池。 | ※ 部分房型无附设泳池。 | ※ 풀이 없는 객실도 있습니다. |

**20:00 — Genryu Taiko**（ハイライト語: 源流の鼓動）

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 夏の夜に、源流の鼓動がひびく。 | On a summer night, the pulse of Genryu echoes. | 夏夜裡，源流的鼓動迴盪。 | 夏夜里，源流的鼓动回荡。 | 여름밤, 겐류의 고동이 울려퍼진다. |
| ENOWAガーデンのウッドデッキに響く太鼓の響き。由布院の夜とひとつになる。 | The sound of taiko drums resonates across ENOWA GARDEN's wooden deck, becoming one with the Yufuin night. | 太鼓的鼓聲迴盪在ENOWA GARDEN的木平台上，與由布院的夜晚融為一體。 | 太鼓的鼓声回荡在ENOWA GARDEN的木平台上，与由布院的夜晚融为一体。 | ENOWA 가든의 우드덱에 울려퍼지는 태고 소리. 유후인의 밤과 하나가 됩니다. |
| 実施期間　7月29日（水）／8月28日（木）　19:30〜 | Dates: July 29 (Wed) / August 28 (Thu), from 19:30 | 實施期間　7月29日（三）／8月28日（四）　19:30〜 | 实施期间　7月29日（周三）／8月28日（周四）　19:30〜 | 실시 기간　7월 29일（수）／8월 28일（목）　19:30〜 |

**21:30 — Night at ENOWA**

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 夜空にも、旬がある。 | Even the night sky has its season. | 夜空，也有屬於它的當令時節。 | 夜空，也有属于它的当令时节。 | 밤하늘에도, 제철이 있다. |
| 畑に収穫の季節があるように、夜空にも一年に一度だけの見頃があります。夏は、ペルセウス座流星群。客室やENOWAガーデンから、由布院の静かな夜空をゆっくりとお楽しみください。 | Just as the fields have a harvest season, the night sky has its own once-a-year peak. In summer, it's the Perseid meteor shower. Enjoy Yufuin's quiet night sky at your leisure, from your room or ENOWA GARDEN. | 如同農田有收穫的季節，夜空也有一年僅一次的最佳觀賞期。夏天，是英仙座流星雨的季節。請從客房或ENOWA GARDEN，悠閒地欣賞由布院寧靜的夜空。 | 如同农田有收获的季节，夜空也有一年仅一次的最佳观赏期。夏天，是英仙座流星雨的季节。请从客房或ENOWA GARDEN，悠闲地欣赏由布院宁静的夜空。 | 밭에 수확의 계절이 있듯, 밤하늘에도 일 년에 단 한 번뿐인 절정이 있습니다. 여름은, 페르세우스자리 유성우. 객실이나 ENOWA 가든에서, 유후인의 고요한 밤하늘을 천천히 즐겨보세요. |

---

## 6. Seasonal Experiences

`An ENOWA Summer` と見出し `Seasonal Experiences` は英語のまま全言語で使用。

| タイトル(JA) | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 農園かき氷 | Farm Kakigori (Shaved Ice) | 農園剉冰 | 农园刨冰 | 농원 빙수 |
| ペルセウス座流星群観測 | Perseid Meteor Shower Observation | 英仙座流星雨觀測 | 英仙座流星雨观测 | 페르세우스자리 유성우 관측 |
| ドローン農場ツアー | Drone Farm Tour | 空拍農場之旅 | 空拍农场之旅 | 드론 농장 투어 |
| 豊の国ゆふいん源流太鼓 野外演奏 | Toyo-no-Kuni Yufuin Genryu Taiko — Outdoor Performance | 豐之國由布院源流太鼓 野外演奏 | 丰之国由布院源流太鼓 野外演奏 | 토요노쿠니 유후인 겐류다이코 야외 공연 |
| アウトドアプール | Outdoor Pool | 戶外泳池 | 户外泳池 | 아웃도어 풀 |
| ファーム収穫体験 | Farm Harvest Experience | 農場採收體驗 | 农场采摘体验 | 팜 수확 체험 |

| 説明文(JA) | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| その日のファームの収穫状況によって素材が変わる、ENOWAらしい夏の一皿。 | A dish uniquely ENOWA — its ingredients change with what the farm harvests that day. | 依當日農場的採收狀況而變化食材，充滿ENOWA風格的夏日一品。 | 依当日农场的采收状况而变化食材，充满ENOWA风格的夏日一品。 | 그날 팜의 수확 상황에 따라 재료가 바뀌는, ENOWA다운 여름의 한 그릇. |
| 光害のない由布院の夜空を見上げる。荒天時は中止。 | Look up at Yufuin's night sky, free of light pollution. Cancelled in case of bad weather. | 仰望不受光害影響的由布院夜空。天候不佳時將取消。 | 仰望不受光污染影响的由布院夜空。天气不佳时将取消。 | 빛 공해가 없는 유후인의 밤하늘을 올려다봅니다. 악천후 시 중지됩니다. |
| 歩いた畑を、鳥の目線で見下ろす体験。 | See the fields you walked through from a bird's-eye view. | 以鳥瞰視角，俯瞰您走過的田野。 | 以鸟瞰视角，俯瞰您走过的田野。 | 걸었던 밭을, 새의 시선으로 내려다보는 체험. |
| ゆふいん源流太鼓による演奏と、土地の鼓動を感じる時間。 | A performance by Yufuin Genryu Taiko — a time to feel the heartbeat of the land. | 由「由布院源流太鼓」帶來的演奏，感受這片土地的鼓動。 | 由“由布院源流太鼓”带来的演奏，感受这片土地的鼓动。 | 유후인 겐류다이코의 연주와 함께, 이 땅의 고동을 느끼는 시간. |
| 由布岳を望む開放的なプール。水しぶきと笑い声が夏を作る。 | An open-air pool with views of Mt. Yufu. Splashes and laughter make the summer. | 可遠眺由布岳的開放式泳池。水花與笑聲交織成夏天。 | 可远眺由布岳的开放式泳池。水花与笑声交织成夏天。 | 유후다케를 바라보는 개방적인 풀. 물보라와 웃음소리가 여름을 만듭니다. |
| 夏野菜が育つENOWA FARMを巡り、自然の循環に触れる体験。 | Tour ENOWA FARM, where summer vegetables grow, and experience nature's cycle firsthand. | 走訪孕育夏季蔬菜的ENOWA FARM，體驗自然的循環。 | 走访孕育夏季蔬菜的ENOWA FARM，体验自然的循环。 | 여름 채소가 자라는 ENOWA FARM을 둘러보며, 자연의 순환을 느끼는 체험. |

| ラベル(JA) | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| SUMMER ONLY | *(英語のまま)* | *(英語のまま)* | *(英語のまま)* | *(영어 그대로)* |
| 8月土曜限定 | August Saturdays Only | 8月週六限定 | 8月周六限定 | 8월 토요일 한정 |
| 日程限定 | Limited Dates | 限定日期 | 限定日期 | 일정 한정 |

| 日程(JA) | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 観測期　7月下旬〜8月下旬　22:00〜夜明け前頃 | Viewing period: late July – late August, 22:00 until just before dawn | 觀測期　7月下旬〜8月下旬　22:00〜黎明前 | 观测期　7月下旬〜8月下旬　22:00〜黎明前 | 관측 기간　7월 하순〜8월 하순　22:00〜새벽 무렵까지 |
| 8月毎週土曜日　12:00〜14:00 | Every Saturday in August, 12:00–14:00 | 8月每週六　12:00〜14:00 | 8月每周六　12:00〜14:00 | 8월 매주 토요일　12:00〜14:00 |
| 実施期間　7月29日（水）／8月28日（木）　19:30〜 | Dates: July 29 (Wed) / August 28 (Thu), from 19:30 | 實施期間　7月29日（三）／8月28日（四）　19:30〜 | 实施期间　7月29日（周三）／8月28日（周四）　19:30〜 | 실시 기간　7월 29일（수）／8월 28일（목）　19:30〜 |

---

## 7. Closing CTA

`Optional Experiences` は英語のまま全言語で使用。

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 見出し | この夏、ENOWAで過ごす一日を。 | This summer, spend a day at ENOWA. | 這個夏天，在ENOWA度過這一天。 | 这个夏天，在ENOWA度过这一天。 | 이번 여름, ENOWA에서 보내는 하루를. |
| 本文 | 畑から始まり、食卓、温泉、星空へとつながるENOWAの夏。由布院の夏を、ENOWAならではの滞在体験としてお楽しみください。 | ENOWA's summer begins in the fields and flows into the table, the hot spring, and the starry sky. Enjoy Yufuin's summer as only ENOWA can offer it. | 從農田開始，延伸至餐桌、溫泉、星空的ENOWA夏天。請將由布院的夏天，作為ENOWA獨有的住宿體驗盡情享受。 | 从农田开始，延伸至餐桌、温泉、星空的ENOWA夏天。请将由布院的夏天，作为ENOWA独有的住宿体验尽情享受。 | 밭에서 시작되어, 식탁, 온천, 밤하늘로 이어지는 ENOWA의 여름. 유후인의 여름을, ENOWA만의 특별한 체류 경험으로 즐겨보세요. |
| CTA①（サイト共通） | 宿泊予約をする | Book Your Stay | 立即訂房 | 立即订房 | 숙박 예약하기 |
| CTA② | お問い合わせ | Contact Us | 聯絡我們 | 联系我们 | 문의하기 |

---

## 8. Footer

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 免責注記 | 掲載写真にはイメージを含みます。一部の写真はENOWAで過ごす夏の世界観を表現したイメージです。 | Photos shown may include representative imagery. Some photos are illustrative, created to express the feeling of summer at ENOWA. | 刊登照片可能包含示意圖。部分照片為表現ENOWA夏日世界觀之示意影像。 | 刊登照片可能包含示意图。部分照片为表现ENOWA夏日世界观之示意影像。 | 게재된 사진에는 이미지 컷이 포함될 수 있습니다. 일부 사진은 ENOWA에서 보내는 여름의 세계관을 표현한 이미지입니다. |
| コピーライト | © ENOWA ALL RIGHTS RESERVED. | *(英語のまま・全言語共通)* | *(英語のまま・全言語共通)* | *(英語のまま・全言語共通)* | *(영어 그대로・모든 언어 공통)* |

---

## 9. モバイル固定CTA（StickyReserveCTA）

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 領域ラベル（aria） | 宿泊予約 | Reservation | 訂房 | 订房 | 숙박 예약 |
| 閉じるボタン（aria） | この表示を閉じる | Close this banner | 關閉此提示 | 关闭此提示 | 이 배너 닫기 |

本文・ボタンはHeroのCTA文言（§3）を再利用しています。

---

## 未翻訳・要確認事項

- 予約URL（`#reservation`）・お問い合わせURL（`#contact`）は共に仮リンクです。多言語ページを実装する場合、言語ごとに別の導線URLが必要かどうかご確認ください。
- 「エノファーム」「ENOWA FARM」「ENOWAガーデン」の英語表記揺れ（Eno Farm / ENO FARM等）は、正式なブランドガイドラインが確定次第、統一してください。
- 「ゆふいん源流太鼓」「豊の国ゆふいん源流太鼓」の正式英語表記（Genryu Taiko / Yufuin Genryu Taiko等）も、団体様の正式名称確認をおすすめします。
