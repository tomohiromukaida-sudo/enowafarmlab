# ENOWA SUMMER EXPERIENCE LP — 翻訳文書 / Translation Reference

FIX済み日本語版LPの全テキストを、英語（EN）・繁体字中国語（zh-TW）・簡体字中国語（zh-CN）・韓国語（KO）に翻訳したドキュメントです。

- サイト実装（多言語ページ化）は行っていません。翻訳確認・入稿・将来の実装用の参照資料です。
- 原文（日本語）は `src/data/summerCampaign.ts` および各コンポーネントの表示テキストと一致しています（2026-07-23 FIX版、STARS を 22:00 に修正済み）。
- `SUMMER HARVEST` / `TAIKO` / `POOL` などブランド上の英語ラベル（セクションの目のラベル: eyebrow）は全言語で **英語のまま**使用する想定のため対訳から除外しています。
- 「TBD」の値（キャンペーン詳細の具体的な期間・料金等、シロップ名称）は未確定のため翻訳対象外です。確定後、日本語が確定次第この文書も更新してください。

---

## 1. SEO / メタ情報

| 項目 | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|
| title | ENOWA SUMMER EXPERIENCE｜夏こそ、ENOWA。｜ENOWA YUFUIN | ENOWA SUMMER EXPERIENCE \| Summer Belongs at ENOWA. \| ENOWA YUFUIN | ENOWA SUMMER EXPERIENCE｜夏天，就是ENOWA。｜ENOWA YUFUIN | ENOWA SUMMER EXPERIENCE｜夏天，就是ENOWA。｜ENOWA YUFUIN | ENOWA SUMMER EXPERIENCE｜여름은, ENOWA에서.｜ENOWA YUFUIN |
| description | 収穫し、味わい、遊び、星を見上げる。ファーム、夏野菜、プール、かき氷、太鼓、星空まで。ENOWA YUFUINで、一生忘れられない夏を。 | Harvest, savor, play, and gaze at the stars. From the farm and summer vegetables to the pool, shaved ice, taiko drumming, and starry skies — spend an unforgettable summer at ENOWA YUFUIN. | 採收、品味、玩樂，抬頭仰望星空。從農場、夏季蔬菜到泳池、剉冰、太鼓與星空，在ENOWA YUFUIN度過一生難忘的夏天。 | 采摘、品味、玩耍，抬头仰望星空。从农场、夏季蔬菜到泳池、刨冰、太鼓与星空，在ENOWA YUFUIN度过一生难忘的夏天。 | 수확하고, 맛보고, 즐기고, 밤하늘의 별을 바라보다. 팜, 여름 채소, 수영장, 빙수, 태고(북) 공연, 별이 빛나는 밤하늘까지. ENOWA YUFUIN에서 평생 잊지 못할 여름을 보내세요. |
| キャンペーン名 (brand.campaignName) | ENOWA サマーエクスペリエンス | ENOWA Summer Experience | ENOWA 夏日體驗 | ENOWA 夏日体验 | ENOWA 서머 익스피리언스 |

---

## 2. Header ナビゲーション

| JA | EN | zh-TW | zh-CN | KO |
|---|---|---|---|---|
| コンセプト | Concept | 概念 | 概念 | 컨셉 |
| 体験 | Experiences | 體驗 | 体验 | 체험 |
| 食 | Dining | 美食 | 美食 | 다이닝 |
| 泊まる | Stay | 住宿 | 住宿 | 스테이 |
| 夜 | Night | 夜晚 | 夜晚 | 나이트 |
| キャンペーン詳細 | Campaign Details | 活動詳情 | 活动详情 | 캠페인 상세 |
| メニューを開く（aria） | Open menu | 開啟選單 | 打开菜单 | 메뉴 열기 |
| メニューを閉じる（aria） | Close menu | 關閉選單 | 关闭菜单 | 메뉴 닫기 |

---

## 3. Hero（メインコピー・FIX版＝候補①）

| 行 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| メインコピー1 | 夏こそ、ENOWA。 | Summer belongs at ENOWA. | 夏天，就是ENOWA。 | 夏天，就是ENOWA。 | 여름은, ENOWA에서. |
| メインコピー2 | 収穫する。味わう。遊ぶ。星に願う。 | Harvest. Savor. Explore. Wish upon the stars. | 親手採收。細細品味。盡情玩樂。向星許願。 | 亲手采摘。细细品味。尽情玩耍。向星许愿。 | 수확하다. 맛보다. 즐기다. 별에게 소원을 빌다. |
| メインコピー3 | 一生忘れられない夏休みが、ここから始まる。 | The summer you'll remember for a lifetime begins here. | 一生難忘的夏日，從這裡開始。 | 一生难忘的夏天，从这里开始。 | 평생 잊지 못할 여름이, 여기서 시작됩니다. |
| CTAボタン | この夏の宿泊を予約する | Reserve Your Summer Stay | 預約這個夏天的住宿 | 预订这个夏天的住宿 | 이번 여름 숙박을 예약하다 |
| スクロール誘導（aria） | 次のセクションへスクロール | Scroll to next section | 捲動至下一區塊 | 滚动至下一区块 | 다음 섹션으로 스크롤 |

> ※ CTAボタン文言「この夏の宿泊を予約する」はサイト全体で繰り返し使用されるため、以後の表では初出のみ記載し「(CTA共通)」と注記します。

---

## 4. Section 02：ENOWAで過ごす、夏の24時間（A Summer Day at ENOWA）

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 見出し | ENOWAで過ごす、夏の24時間。 | A Summer Day at ENOWA — 24 Hours | 在ENOWA度過的，夏日24小時。 | 在ENOWA度过的，夏日24小时。 | ENOWA에서 보내는, 여름의 24시간. |
| リード文 | 畑で収穫し、プールで遊び、旬を味わい、星を見上げる。ENOWAの夏は、泊まるだけでは終わりません。 | Harvest in the fields, play in the pool, savor what's in season, and look up at the stars. Summer at ENOWA is more than just a stay. | 在農場採收，在泳池玩耍，品味當季美味，仰望星空。ENOWA的夏天，不只是住宿而已。 | 在农场采摘，在泳池玩耍，品味当季美味，仰望星空。ENOWA的夏天，不只是住宿而已。 | 밭에서 수확하고, 수영장에서 놀고, 제철 음식을 맛보고, 밤하늘의 별을 올려다봅니다. ENOWA의 여름은 단순한 숙박으로 끝나지 않습니다. |
| CTA見出し | この夏の一日を、ENOWAで。 | Spend a day of summer at ENOWA. | 這個夏天的一天，在ENOWA度過。 | 这个夏天的一天，在ENOWA度过。 | 이 여름의 하루를, ENOWA에서. |

### タイムライン（8項目・時刻は変更不可＝そのまま表示）

| 時刻 | タイトル(EN固定) | タイトル(JA) | 説明(JA) | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|---|---|
| 15:00 | CHECK IN | チェックイン | 由布院の緑に包まれて、夏の滞在が始まる。 | Wrapped in the greenery of Yufuin, your summer stay begins. | 沐浴在由布院的綠意中，夏日旅程就此展開。 | 沐浴在由布院的绿意中，夏日旅程就此展开。 | 유후인의 초록에 감싸여, 여름 숙박이 시작됩니다. |
| 16:00 | HARVEST | ハーベスト | 畑に入り、旬の夏野菜に触れる。 | Step into the fields and touch summer vegetables at their peak. | 走進農田，親手觸摸當季夏季蔬菜。 | 走进农田，亲手触摸当季夏季蔬菜。 | 밭으로 들어가, 제철 여름 채소를 직접 만져봅니다. |
| 17:00 | POOL & SAUNA | プール＆サウナ | 水と風を感じながら、思い思いに過ごす。 | Feel the water and the breeze, and spend the afternoon exactly as you like. | 感受水與風，隨心所欲地度過午後時光。 | 感受水与风，随心所欲地度过午后时光。 | 물과 바람을 느끼며, 마음 가는 대로 시간을 보냅니다. |
| 18:30 | FARM DRIVEN DINNER | ファームドリブンディナー | その日、その畑で育った命を一皿に。 | What grew in the fields that very day becomes tonight's dinner. | 當天在農場孕育的生命，化為餐桌上的一道料理。 | 当天在农场孕育的生命，化为餐桌上的一道料理。 | 그날, 그 밭에서 자란 생명이 한 접시의 요리가 됩니다. |
| 20:30 | SUMMER EXPERIENCE | サマーエクスペリエンス | 太鼓や季節限定の体験を楽しむ。 | Enjoy taiko drumming and other seasonal experiences. | 享受太鼓表演及季節限定體驗。 | 享受太鼓表演及季节限定体验。 | 태고(북) 공연과 계절 한정 체험을 즐깁니다. |
| **22:00** | STARS | スターズ | 夜空を見上げ、流れ星を待つ。 | Look up at the night sky and wait for a shooting star. | 仰望夜空，等待流星劃過。 | 仰望夜空，等待流星划过。 | 밤하늘을 올려다보며, 별똥별을 기다립니다. |
| 7:00 | MORNING FARM | モーニングファーム | 朝露の残る畑を歩く。 | Walk through fields still glistening with morning dew. | 漫步於仍留有晨露的田野間。 | 漫步于仍留有晨露的田野间。 | 아침 이슬이 남아 있는 밭을 거닙니다. |
| 8:00 | BREAKFAST | ブレックファースト | 畑の恵みから、一日を始める。 | Start your day with the bounty of the farm. | 從農場的恩惠中，展開新的一天。 | 从农场的馈赠中，展开新的一天。 | 밭의 은혜로움으로, 하루를 시작합니다. |

---

## 5. Section 03：SUMMER EXPERIENCES（夏を、遊び尽くす。）

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 見出し | 夏を、遊び尽くす。 | Play summer to the fullest. | 把夏天，玩到盡興。 | 把夏天，玩到尽兴。 | 여름을, 마음껏 즐기다. |

### カード（8項目）

| タイトル(EN固定) | タイトル(JA) | 説明(JA) | ラベル(JA) | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|---|---|
| FARM HARVEST | ファームハーベスト | 畑に入り、その手で旬の夏野菜を収穫する。 | 要予約 | Step into the fields and harvest summer vegetables with your own hands. / *Reservation Required* | 走進農田，親手採收當季夏季蔬菜。 / *需預約* | 走进农田，亲手采摘当季夏季蔬菜。 / *需预约* | 밭에 들어가 직접 손으로 제철 여름 채소를 수확합니다. / *사전 예약 필요* |
| VEGETABLE SHAVED ICE | ベジタブルかき氷 | 畑から生まれた野菜シロップの、夏だけのひと皿。 | — | A summer-only treat made with syrup born from the farm's vegetables. | 使用農場蔬菜製成糖漿，只在夏天限定的剉冰。 | 使用农场蔬菜制成糖浆，仅在夏天限定的刨冰。 | 밭에서 태어난 채소 시럽으로 만든, 여름에만 즐길 수 있는 한 그릇. |
| POOL | プール | 水しぶきと笑い声に満ちた、夏だけの時間。 | — | A summer-only time filled with splashes and laughter. | 充滿水花與笑聲，只屬於夏天的時光。 | 充满水花与笑声，只属于夏天的时光。 | 물보라와 웃음소리로 가득한, 여름에만 있는 시간. |
| DRONE EXPERIENCE | ドローン体験 | 由布院の空と緑を、上空から見渡す。 | 季節限定 | See Yufuin's sky and greenery from above. / *Seasonal* | 從空中俯瞰由布院的天空與綠意。 / *季節限定* | 从空中俯瞰由布院的天空与绿意。 / *季节限定* | 유후인의 하늘과 초록을 하늘 위에서 내려다봅니다. / *계절 한정* |
| TAIKO PERFORMANCE | 太鼓演奏 | 体に響く音と振動を、間近で。 | — | Feel the sound and vibration in your body, up close. | 近距離感受震撼身心的鼓聲與震動。 | 近距离感受震撼身心的鼓声与震动。 | 몸에 울리는 소리와 진동을, 가까이에서. |
| STARGAZING | スターゲイジング | 由布院の澄んだ夜空に、流れ星を待つ。 | — | Wait for a shooting star in Yufuin's clear night sky. | 在由布院澄澈的夜空下，等待流星劃過。 | 在由布院澄澈的夜空下，等待流星划过。 | 유후인의 맑은 밤하늘 아래에서, 별똥별을 기다립니다. |
| SAUNA | サウナ | 汗と外気浴で、心と体をほどく。 | — | Sweat it out and unwind body and mind with outdoor air bathing. | 藉由流汗與外氣浴，讓身心徹底放鬆。 | 借助流汗与外气浴，让身心彻底放松。 | 땀과 외기욕으로, 몸과 마음을 풀어줍니다. |
| FARM DRIVEN DINNER | ファームドリブンディナー | 今日の畑が、今夜の一皿になる。 | — | Today's harvest becomes tonight's dinner. | 今日的農場，化為今夜的一道料理。 | 今日的农场，化为今夜的一道料理。 | 오늘의 밭이, 오늘 밤의 한 접시가 됩니다. |

---

## 6. Section 04：SUMMER HARVEST（夏のみずみずしさを、そのまま。）

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 夏のみずみずしさを、そのまま。 | The freshness of summer, just as it is. | 夏日的鮮美，原汁原味。 | 夏日的鲜美，原汁原味。 | 여름의 싱그러움을, 그대로. |

## 7. Section 05：VEGETABLE SHAVED ICE（畑から生まれた、夏のひと皿。）

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 畑から生まれた、夏のひと皿。 | A taste of summer, born from the farm. | 誕生自農場，夏天限定的一品。 | 诞生自农场，夏天限定的一品。 | 밭에서 태어난, 여름의 한 그릇. |

> シロップ3種（GREEN / RED / YELLOW）の正式名称・素材は `TBD` のため翻訳対象外。色名の英語表記（GREEN/RED/YELLOW）は全言語共通で使用してください。

## 8. Section 06：FARM DRIVEN DINNER（今日の畑が、今夜の一皿になる。）

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 今日の畑が、今夜の一皿になる。 | Today's harvest becomes tonight's dinner. | 今日的農場，化為今夜的一道料理。 | 今日的农场，化为今夜的一道料理。 | 오늘의 밭이, 오늘 밤의 한 접시가 됩니다. |

> FARM / KITCHEN / TABLE の3段階ラベルは全言語で英語のまま使用してください。

## 9. Section 07：STAY IN SUMMER（水と風に、ほどけていく。）

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 見出し | 水と風に、ほどけていく。 | Let the water and breeze unwind you. | 在水與風中，漸漸放鬆。 | 在水与风中，渐渐放松。 | 물과 바람에, 서서히 풀어지다. |
| グループラベル：客室 | 客室 | Room | 客房 | 客房 | 객실 |
| 詳細リンク | 客室の詳細を見る | View Room Details | 查看客房詳情 | 查看客房详情 | 객실 상세 보기 |

> グループラベルの POOL / SAUNA は全言語で英語のまま使用してください（客室のみ「Room／客房／객실」に翻訳）。

## 10. Section 08：SUMMER NIGHT（流れ星を待つ夜までが、ENOWAの夏です。）

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 流れ星を待つ夜までが、ENOWAの夏です。 | ENOWA's summer lasts until the night you wait for a shooting star. | 直到等待流星的夜晚，都是ENOWA的夏天。 | 直到等待流星的夜晚，都是ENOWA的夏天。 | 별똥별을 기다리는 밤까지가, ENOWA의 여름입니다. |

> TAIKO / STARGAZING のサブラベルは全言語で英語のまま使用してください。

## 11. Section 09：CAMPAIGN INFORMATION（キャンペーン詳細）

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 見出し | キャンペーン詳細 | Campaign Details | 活動詳情 | 活动详情 | 캠페인 상세 |
| 注記 | ※ 「TBD」の項目は現在確定作業中です。確定次第、本セクションのみ更新されます。 | * Items marked "TBD" are still being finalized. This section will be updated once details are confirmed. | ※ 標示「TBD」的項目目前正在確認中，確定後將僅更新本區塊內容。 | ※ 标示"TBD"的项目目前正在确认中，确定后将仅更新本区块内容。 | ※ 'TBD'로 표시된 항목은 현재 확정 작업 중입니다. 확정되는 대로 이 섹션만 업데이트됩니다. |

### 項目ラベル（値は全てTBDのため翻訳対象外）

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 実施期間 | Campaign Period | 活動期間 | 活动期间 | 실시 기간 |
| 対象宿泊日 | Eligible Stay Dates | 適用住宿日期 | 适用住宿日期 | 대상 숙박일 |
| 対象者 | Eligibility | 適用對象 | 适用对象 | 대상자 |
| 体験内容 | Included Experiences | 體驗內容 | 体验内容 | 체험 내용 |
| 事前予約の要否 | Advance Reservation | 是否需事先預約 | 是否需事先预约 | 사전 예약 필요 여부 |
| 定員 | Capacity | 名額 | 名额 | 정원 |
| 雨天・天候時の対応 | Rain / Weather Policy | 雨天・天候應對方式 | 雨天・天候应对方式 | 우천 시 대응 |
| 宿泊料金への包含有無 | Included in Room Rate? | 是否包含於住宿費用 | 是否包含于住宿费用 | 숙박 요금 포함 여부 |
| 注意事項 | Notes | 注意事項 | 注意事项 | 유의사항 |

## 12. Section 10：ページ最下部 CTA

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 見出し | この夏の宿泊を予約する（CTA共通） | Reserve Your Summer Stay | 預約這個夏天的住宿 | 预订这个夏天的住宿 | 이번 여름 숙박을 예약하다 |
| サブコピー | 一生忘れられない夏休みが、ここから始まる。 | The summer you'll remember for a lifetime begins here. | 一生難忘的夏日，從這裡開始。 | 一生难忘的夏天，从这里开始。 | 평생 잊지 못할 여름이, 여기서 시작됩니다. |

## 13. モバイル固定CTA（StickyReserveCTA）

| 項目 | 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|---|
| 見出し | 夏こそ、ENOWA。 | Summer belongs at ENOWA. | 夏天，就是ENOWA。 | 夏天，就是ENOWA。 | 여름은, ENOWA에서. |
| 本文 | この夏の宿泊を予約する（CTA共通） | Reserve Your Summer Stay | 預約這個夏天的住宿 | 预订这个夏天的住宿 | 이번 여름 숙박을 예약하다 |
| 領域ラベル（aria） | 宿泊予約 | Reservation | 訂房 | 订房 | 숙박 예약 |
| 閉じるボタン（aria） | この表示を閉じる | Close this banner | 關閉此提示 | 关闭此提示 | 이 배너 닫기 |

---

## 付録：ヒーローコピー候補②③（現在未使用・参考訳）

サイト上は候補①（上記 §3）で確定していますが、`src/data/summerCampaign.ts` の `copyVariants` に他2案も残っています。将来切り替える場合に備え参考訳のみ用意しました。

### 候補②

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| そういえば、夏ってこんなに楽しかった。 | Come to think of it, summer used to be this much fun. | 說起來，夏天原來這麼好玩。 | 说起来，夏天原来这么好玩。 | 그러고 보니, 여름이 이렇게 즐거웠었지. |
| 風を感じて、土に触れて、旬を味わい、夜空を見上げる。 | Feel the wind, touch the earth, taste what's in season, and look up at the night sky. | 感受微風，觸摸泥土，品味當季，仰望夜空。 | 感受微风，触摸泥土，品味当季，仰望夜空。 | 바람을 느끼고, 흙을 만지고, 제철을 맛보고, 밤하늘을 올려다보다. |
| 忘れていた夏が、ここにあります。 | The summer you forgot is right here. | 被遺忘的夏天，就在這裡。 | 被遗忘的夏天，就在这里。 | 잊고 있던 여름이, 여기 있습니다. |

### 候補③

| 日本語 | English | 繁體中文 | 简体中文 | 한국어 |
|---|---|---|---|---|
| 夏を、好きだった頃の自分へ。 | To the self who once loved summer. | 獻給，曾經熱愛夏天的自己。 | 献给，曾经热爱夏天的自己。 | 여름을 좋아했던, 그 시절의 나에게. |

---

## 未翻訳・要確認事項

- キャンペーン詳細9項目の値（実施期間・対象宿泊日など）：日本語が `TBD` のため、確定後に本書へ追記が必要です。
- 野菜シロップ3種の正式名称・素材：同上、`TBD` のため未翻訳です。
- 予約URL（現在 `#reservation` の仮リンク）：多言語ページを実装する場合、言語ごとに別の予約導線URLが必要かどうかご確認ください。
