# ENOWA SUMMER EXPERIENCE LP — 翻訳リファレンス / Translation Reference

**2026-08-10 改訂**: 本番公開サイト https://enowa-yufuin.jp/lp/summer2026/ で実際に配信されている公式翻訳データ
（`assets/i18n/{ja,en,zh-CN,zh-TW,ko}.json`）をそのまま転記した内容です。自己翻訳ではありません。
サイト本体は既に5言語（日本語・English・简体中文・繁體中文・한국語）で公開済みのため、本書は
`data-i18n` キー単位で内容を照合・記録するための参照資料です。

各セクションの note に記載のある eyebrow・時刻・英語見出し等は `data-i18n` 対象外の静的テキストのため、
全言語で英語のまま共通表示されます。

---

## 1. ナビゲーション（ドロワーメニュー内リンク文言）

> cta.reserve（宿泊予約をする）もヘッダー内に共通で表示。ページ内の実際のセクション見出し（Seasonal Experiences等）とは別の、メニュー専用の短い言い回しです。

| ラベル | key | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|---|
| リンク1（#intro） | `nav.24h` | ENOWAの夏の24時間 | 24 hours of ENOWA summer | ENOWA之夏的24小時 | ENOWA之夏的24小时 | ENOWA 여름의 24시간 |
| リンク2（#seasonal） | `nav.special` | 夏の記憶を深くする、季節の体験。 | Seasonal experiences that deepen summer memories. | 讓夏日記憶更深刻的季節體驗。 | 让夏日记忆更深刻的季节体验。 | 여름의 기억을 깊게 하는, 계절의 경험. |

---

## 2. Hero

> eyebrow「AT ENOWA, YUFUIN — SUMMER 2026」と英語版サブコピー行（Harvest. Taste. Play. ...）は静的テキストで、data-i18n対象外＝全言語共通で英語のまま表示されます。

| ラベル | key | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|---|
| 見出し（ハイライト語: 好きだった/loved/熱愛/热爱/좋아했던） | `mv.title` | 夏を、 / 好きだった頃の / 自分へ。 | To the summer / you once loved. | 獻給，曾經熱愛夏天的 / 自己。 | 献给，曾经热爱夏天的 / 自己。 | 여름을 좋아했던, / 그 시절의 나에게. |
| サブコピー（日本語） | `mv.lead` | 収穫する。味わう。遊ぶ。星に願う。 / 一生忘れられない夏休みが、 / ここから始まる。 | Harvest. Taste. Play. Wish upon the stars. / An unforgettable summer vacation / begins at ENOWA. | 收穫。品味。玩樂。向星星許願。 / 一生難忘的夏日假期， / 從ENOWA開始。 | 采摘。品味。玩耍。向星星许愿。 / 一生难忘的夏日假期， / 从ENOWA开始。 | 수확하다. 맛보다. 즐기다. 별에게 소원을 빌다. / 평생 잊지 못할 여름휴가가, / ENOWA에서 시작됩니다. |
| CTA①（サイト共通） | `cta.reserve` | 宿泊予約をする | Book Your Stay | 立即訂房 | 立即订房 | 숙박 예약하기 |
| CTA②（#introへスクロール） | `cta.summer_guide` | 夏の過ごし方を見る | See How to Spend Summer | 查看夏日玩法 | 查看夏日玩法 | 여름을 보내는 방법 보기 |

---

## 3. The Summer You Remember.（Remember Summerセクション）

> eyebrow「AT ENOWA, YUFUIN」と見出し「The Summer You Remember.」は静的テキストで全言語共通（英語のまま）。

| ラベル | key | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|---|
| 本文 | `remember.text` | 子どもの頃の夏を、覚えていますか。 / 土の匂い、水しぶき、太鼓の音、空いっぱいの星。 / ENOWAは、あの頃の夏を取り戻す場所です。 | Do you remember the summers of your childhood? / The scent of earth, the splash of water, the sound of taiko drums, a sky full of stars. / ENOWA is a place to reclaim that summer. | 您還記得兒時的夏天嗎？ / 泥土的氣息、水花四濺、太鼓的聲響、滿天的星斗。 / ENOWA，是找回那個夏天的地方。 | 您还记得儿时的夏天吗？ / 泥土的气息、水花四溅、太鼓的声响、满天的星斗。 / ENOWA，是找回那个夏天的地方。 | 어린 시절의 여름을 기억하시나요? / 흙 내음, 물보라, 태고 소리, 가득한 밤하늘의 별. / ENOWA는, 그 시절의 여름을 되찾는 곳입니다. |

---

## 4. 24-Hour Timeline イントロ

> eyebrow「24 Hours of ENOWA Summer」は静的テキストで全言語共通（英語のまま）。

| ラベル | key | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|---|
| 見出し | `intro.title` | ENOWAの夏は、 / 24時間が特別になる。 | At ENOWA, every hour of / summer becomes special. | 在ENOWA， / 夏天的24小時都變得特別。 | 在ENOWA， / 夏天的24小时都变得特别。 | ENOWA의 여름은, / 24시간이 특별해집니다. |
| リード文（5行＋結び） | `intro.text` | 朝、畑で収穫する。 / 昼、風の中で遊ぶ。 / 夕暮れ、自然の甘さを味わう。 / 夜、鼓動を感じる。 / そして最後は、星に願う。 /  / この夏だけの、一日をお過ごしください。 | Morning, harvest in the fields. / Midday, play in the breeze. / Dusk, savor nature’s sweetness. / Night, feel the heartbeat. / And finally, wish upon a star. /  / Spend a day found only in this summer. | 清晨，在農田裡採收。 / 白天，在風中玩樂。 / 黃昏，品味自然的甘甜。 / 夜晚，感受鼓動。 / 最後，向星星許願。 /  / 請享受這個夏天限定的一天。 | 清晨，在农田里采摘。 / 白天，在风中玩耍。 / 黄昏，品味自然的甘甜。 / 夜晚，感受鼓动。 / 最后，向星星许愿。 /  / 请享受这个夏天限定的一天。 | 아침, 밭에서 수확하다. / 낮, 바람 속에서 놀다. / 저녁, 자연의 달콤함을 맛보다. / 밤, 고동을 느끼다. / 그리고 마지막은, 별에게 소원을 빌다. /  / 이 여름에만 있는 하루를 보내세요. |

---

## 5. 24-Hour Timeline 本編（5項目）

> 各項目の time-en（at ENOWA — Farm Tour 等）は静的テキストで全言語共通（英語のまま）。時刻表示（13:00〜22:00）もdata-i18n対象外です。★22:00の項目は本番サイトでは元は21:30表記でしたが、時刻ラベル自体（HTML内のテキスト）は22:00に更新済みです。

| ラベル | key | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|---|
| 13:00 見出し（ハイライト: 熱い/warm/溫熱/温热/따뜻하다） | `t1300.title` | 畑のトマトは、熱い。 / その場でかじってみる。 | The tomatoes in the field are warm. / Take a bite, right there. | 田裡的番茄，是溫熱的。 / 當場咬一口試試。 | 田里的番茄，是温热的。 / 当场咬一口试试。 | 밭의 토마토는, 따뜻하다. / 그 자리에서 한 입 베어물어보세요. |
| 13:00 本文 | `t1300.desc` | 太陽の熱を抱えたまま実った一粒を、その場でかじる。 / 冷蔵庫では決して出会えない、生命のみずみずしさがそこにあります。 | Bite into a tomato that ripened while still holding the sun’s warmth — / a freshness you’ll never find in a refrigerator. | 咬下一顆仍帶著陽光熱度成熟的果實。 / 那是冰箱裡絕對嚐不到的、生命的鮮甜。 | 咬下一颗仍带着阳光热度成熟的果实。 / 那是冰箱里绝对尝不到的、生命的鲜甜。 | 태양의 열기를 그대로 머금은 채 익은 한 알을, 그 자리에서 베어뭅니다. / 냉장고에서는 결코 만날 수 없는, 생명의 싱그러움이 그곳에 있습니다. |
| 13:00 タグ2件 | `t1300.list` | ファームツアー／夏野菜収穫体験 / 空から見るファームツアー／ドローン体験 | Farm Tour / Summer Vegetable Harvest Experience / Aerial Farm Tour / Drone Experience | 農場導覽／夏季蔬菜採收體驗 / 空中農場導覽／無人機體驗 | 农场导览／夏季蔬菜采摘体验 / 空中农场导览／无人机体验 | 팜 투어 / 여름 채소 수확 체험 / 하늘에서 보는 팜 투어 / 드론 체험 |
| 14:30 見出し（ハイライト: 甘さ/sweetness/甘甜/甘甜/단맛） | `t1430.title` | はじめての / 甘さに、 / 笑った。 | A sweetness / like no other, / made me smile. | 從未有過的 / 甘甜， / 讓人不禁微笑。 | 从未有过的 / 甘甜， / 让人不禁微笑。 | 처음 느끼는 / 단맛에, / 웃음이 났다. |
| 14:30 本文（タイトル＋説明を1つに結合） | `t1430.caption` | ENOWAオリジナルかき氷/ / エノワファームのとれたて野菜で作るシロップは、 / フルーツより優しい甘さ。 | ENOWA Original Kakigori / / Syrup made from freshly picked ENOWA Farm vegetables — / a sweetness gentler than fruit. | ENOWA原創剉冰/ / 使用ENOWA農場現採蔬菜製成的糖漿， / 甜味比水果更溫和。 | ENOWA原创刨冰/ / 使用ENOWA农场现采蔬菜制成的糖浆， / 甜味比水果更温和。 | ENOWA 오리지널 빙수/ / ENOWA 팜에서 갓 수확한 채소로 만든 시럽은, / 과일보다 부드러운 단맛. |
| 15:30 見出し | `t1530.title` | 由布院の風に / 飛び込んだ | Dove into / the breeze of Yufuin. | 躍入 / 由布院的微風之中。 | 跃入 / 由布院的微风之中。 | 유후인의 바람 속으로 / 뛰어들었다. |
| 15:30 本文 | `t1530.desc` | 見晴らしのいいプライベートプールで、 / 笑い声が夏空へ溶けていく。 | In a private pool with sweeping views, / laughter dissolves into the summer sky. | 在視野遼闊的私人泳池裡， / 笑聲融入夏日的天空。 | 在视野辽阔的私人泳池里， / 笑声融入夏日的天空。 | 전망이 탁 트인 프라이빗 풀에서, / 웃음소리가 여름 하늘로 녹아듭니다. |
| 15:30 注記 | `t1530.note` | ※ プールのないお部屋もあります | * Some rooms do not have a pool. | ※ 部分房型無附設泳池。 | ※ 部分房型无附设泳池。 | ※ 풀이 없는 객실도 있습니다. |
| 19:30 見出し（ハイライト: 源流の鼓動/pulse of Genryu/源流的鼓動/源流的鼓动/겐류의 고동） | `t2000.title` | 夏の夜に、 / 源流の鼓動が / ひびく。 | On a summer night, / the pulse of Genryu / echoes. | 夏夜裡， / 源流的鼓動 / 迴盪。 | 夏夜里， / 源流的鼓动 / 回荡。 | 여름밤, / 겐류의 고동이 / 울려 퍼진다. |
| 19:30 本文（JA正式名称「豊の国ゆふいん源流太鼓 野外演奏」を含む） | `t2000.desc` | 豊の国ゆふいん源流太鼓 野外演奏／ / ENOWAガーデンのウッドデッキに響く太鼓の響き。 / 由布院の夜とひとつになる。 | Toyo-no-Kuni Yufuin Genryu Taiko Outdoor Performance / / The sound of taiko drums resonates across ENOWA GARDEN’s wooden deck, / becoming one with the Yufuin night. | 豐之國由布院源流太鼓 野外演奏／ / 太鼓的鼓聲迴盪在ENOWA GARDEN的木平台上， / 與由布院的夜晚融為一體。 | 丰之国由布院源流太鼓 野外演奏／ / 太鼓的鼓声回荡在ENOWA GARDEN的木平台上， / 与由布院的夜晚融为一体。 | 토요노쿠니 유후인 겐류다이코 야외 공연／ / ENOWA 가든의 우드덱에 울려퍼지는 태고 소리. / 유후인의 밤과 하나가 됩니다. |
| 19:30 日程 ⚠️サイト上は現在HTMLコメントアウトで非表示（辞書には残存） | `t2000.note` | 実施期間　7月29日（水）／8月28日（木） 19:30〜 | Dates: July 29 (Wed) / August 28 (Thu), from 19:30 | 舉辦日期　7月29日（週三）／8月28日（週四） 19:30〜 | 举办日期　7月29日（周三）／8月28日（周四） 19:30〜 | 실시 기간　7월 29일(수) / 8월 28일(목) 19:30〜 |
| 22:00 見出し | `t2130.title` | 夜空にも、 / 旬がある。 | The Night / Has Its Season. | 夜空， / 也有屬於它的當令時節。 | 夜空， / 也有属于它的当令时节。 | 밤하늘에도, / 제철이 있다. |
| 22:00 本文 | `t2130.body` | 畑に収穫の季節があるように、 / 夜空にも一年に一度だけの見頃があります。 /  / 夏は、ペルセウス座流星群。 / 客室やENOWAガーデンから、 / 由布院の静かな夜空を / ゆっくりとお楽しみください。 | Just as the fields have a harvest season, / the night sky has its own once-a-year peak. /  / In summer, it’s the Perseid meteor shower. / Enjoy Yufuin’s quiet night sky at your leisure, / from your room or ENOWA GARDEN. | 如同農田有收穫的季節， / 夜空也有一年僅一次的最佳觀賞期。 /  / 夏天，是英仙座流星雨的季節。 / 請從客房或ENOWA GARDEN， / 悠閒地欣賞由布院寧靜的夜空。 | 如同农田有收获的季节， / 夜空也有一年仅一次的最佳观赏期。 /  / 夏天，是英仙座流星雨的季节。 / 请从客房或ENOWA GARDEN， / 悠闲地欣赏由布院宁静的夜空。 | 밭에 수확의 계절이 있듯, / 밤하늘에도 일 년에 단 한 번뿐인 절정이 있습니다. /  / 여름은, 페르세우스자리 유성우. / 객실이나 ENOWA 가든에서, / 유후인의 고요한 밤하늘을 천천히 즐겨보세요. |

---

## 6. Seasonal Experiences（6項目・タイムラインと同じ時系列順）

> 見出し「Seasonal Experiences」／サブ「Summer Only At ENOWA」、バッジ「SUMMER ONLY」は静的テキストで全言語共通（英語のまま、data-i18n対象外）。かき氷・プールのバッジ「SUMMER ONLY」も同様です。

| ラベル | key | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|---|
| 1. ファームツアー タイトル | `season.harvest.title` | ファームツアー | Farm Tour | 農場之旅 | 农场之旅 | 팜 투어 |
| 1. ファームツアー 説明＋注記 | `season.harvest.desc` | 夏野菜が育つENOWA FARMを巡り、自然の循環に触れる体験。※ご要望頂いたお客様に提供しておりますが季節や当日の状況により / お受けできない可能性があります。 | Tour ENOWA FARM, where summer vegetables grow, and experience nature’s cycle firsthand.* Available upon request; may be unavailable depending on the season or the day’s conditions. | 走訪孕育夏季蔬菜的ENOWA FARM，體驗自然的循環。※應客人要求提供，惟視季節及當天狀況， / 有時可能無法受理。 | 走访孕育夏季蔬菜的ENOWA FARM，体验自然的循环。※应客人要求提供，惟视季节及当天状况， / 有时可能无法受理。 | 여름 채소가 자라는 ENOWA FARM을 둘러보며, 자연의 순환을 느끼는 체험.※요청하신 고객께 제공하고 있으나 계절이나 당일 상황에 따라 / 제공이 어려울 수 있습니다. |
| 2. 空から見るファームツアー タイトル | `season.drone.title` | 空から見るファームツアー（ドローン体験） | Aerial Farm Tour (Drone Experience) | 空中農場之旅（無人機體驗） | 空中农场之旅（无人机体验） | 하늘에서 보는 팜 투어（드론 체험） |
| 2. 空から見るファームツアー 説明 | `season.drone.desc` | 歩いた畑を、鳥の目線で見下ろす体験。 | See the fields you walked through from a bird’s-eye view. | 以鳥瞰視角，俯瞰您走過的田野。 | 以鸟瞰视角，俯瞰您走过的田野。 | 걸었던 밭을, 새의 시선으로 내려다보는 체험. |
| 2. バッジ ⚠️8月→9月に変更（実施月がずれています） | `tag.sat_aug` | 9月土曜限定 | September Saturdays Only | 9月週六限定 | 9月周六限定 | 9월 토요일 한정 |
| 2. 日程 ⚠️8月→9月に変更 | `season.drone.schedule` | 9月毎週土曜日　12:00-14:00間で実施 | Every Saturday in September, held between 12:00–14:00 | 9月每週六　於12:00-14:00之間實施 | 9月每周六　于12:00-14:00之间实施 | 9월 매주 토요일　12:00-14:00 사이에 실시 |
| 3. ENOWAオリジナルかき氷 タイトル | `season.kakigori.title` | ENOWAオリジナルかき氷 | ENOWA Original Kakigori (Shaved Ice) | ENOWA原創剉冰 | ENOWA原创刨冰 | ENOWA 오리지널 빙수 |
| 3. ENOWAオリジナルかき氷 説明＋注記 ⚠️提供方法の注記（ファームツアー参加者へホテルで提供）が新規追加 | `season.kakigori.desc` | その日のファームの収穫状況によって素材が変わる、 / ENOWAらしい夏の一皿。※かき氷は、ENOWA ファームツアーをご体験いただいたお客様へ、 / ツアー終了後にホテル（フロントまたはテラス）にてご提供いたします。 | A dish uniquely ENOWA — / its ingredients change with what the farm harvests that day.* Kakigori is served after the ENOWA Farm Tour to participating guests, at the hotel (front desk or terrace). | 依當日農場的採收狀況而變化食材， / 充滿ENOWA風格的夏日一品。※剉冰僅向參加ENOWA農場之旅的客人， / 於行程結束後在飯店（櫃台或露台）提供。 | 依当日农场的采收状况而变化食材， / 充满ENOWA风格的夏日一品。※刨冰仅向参加ENOWA农场之旅的客人， / 于行程结束后在酒店（前台或露台）提供。 | 그날 팜의 수확 상황에 따라 재료가 바뀌는, / ENOWA다운 여름의 한 그릇.※빙수는 ENOWA 팜 투어에 참여하신 고객께, / 투어 종료 후 호텔（프런트 또는 테라스）에서 제공합니다. |
| 4. プライベートプール タイトル | `season.pool.title` | プライベートプール | Private Pool | 私人泳池 | 私人泳池 | 프라이빗 풀 |
| 4. プライベートプール 説明＋注記 | `season.pool.desc` | 由布岳を望む開放的なプール。水しぶきと笑い声が夏を作る。※プールのないお部屋もあります。 | An open-air pool with views of Mt. Yufu. Splashes and laughter make the summer.* Some rooms do not have a pool. | 可遠眺由布岳的開放式泳池。水花與笑聲交織成夏天。※ 部分房型無附設泳池。 | 可远眺由布岳的开放式泳池。水花与笑声交织成夏天。※ 部分房型无附设泳池。 | 유후다케를 바라보는 개방적인 풀. 물보라와 웃음소리가 여름을 만듭니다.※ 풀이 없는 객실도 있습니다. |
| 5. 源流太鼓野外演奏 タイトル | `season.taiko.title` | 豊の国ゆふいん源流太鼓 野外演奏 | Toyo-no-Kuni Yufuin Genryu Taiko — Outdoor Performance | 豐之國由布院源流太鼓 野外演奏 | 丰之国由布院源流太鼓 野外演奏 | 토요노쿠니 유후인 겐류다이코 야외 공연 |
| 5. 源流太鼓野外演奏 説明 | `season.taiko.desc` | ゆふいん源流太鼓による演奏と、太鼓の演奏体験。 | A performance by Yufuin Genryu Taiko, plus a hands-on taiko playing experience. | 由布院源流太鼓的演奏，並可親手體驗打太鼓。 | 由布院源流太鼓的演奏，并可亲手体验打太鼓。 | 유후인 겐류다이코의 연주와 함께, 태고를 직접 연주해보는 체험. |
| 5. 日程 | `season.taiko.schedule` | 実施日時　7月29日（水）／8月28日（木） 19:30〜 | Dates: July 29 (Wed) / August 28 (Thu), from 19:30 | 舉辦日期　7月29日（週三）／8月28日（週四） 19:30〜 | 举办日期　7月29日（周三）／8月28日（周四） 19:30〜 | 실시 일시　7월 29일(수) / 8월 28일(목) 19:30〜 |
| 6. ペルセウス座流星群観測 タイトル | `season.perseid.title` | ペルセウス座流星群観測 | Perseid Meteor Shower Observation | 英仙座流星雨觀測 | 英仙座流星雨观测 | 페르세우스자리 유성우 관측 |
| 6. ペルセウス座流星群観測 説明 | `season.perseid.desc` | 光害のない由布院の夜空を見上げる。 | Look up at Yufuin’s night sky, free of light pollution. | 仰望不受光害影響的由布院夜空。 | 仰望不受光污染影响的由布院夜空。 | 빛 공해가 없는 유후인의 밤하늘을 올려다봅니다. |
| 6. 観測時期 | `season.perseid.schedule` | 観測時期 7月下旬〜 8月下旬 22:00〜夜明け前頃 | Viewing period: late July – late August, 22:00 until just before dawn | 觀測時期　7月下旬〜8月下旬 22:00〜黎明前 | 观测时期　7月下旬〜8月下旬 22:00〜黎明前 | 관측 시기　7월 하순〜8월 하순 22:00〜동트기 전 무렵 |

---

## 7. Optional Experiences（Closing CTA）

> eyebrow「Optional Experiences」は静的テキストで全言語共通（英語のまま）。

| ラベル | key | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|---|
| 見出し | `optional.title` | この夏、 / ENOWAで / 過ごす一日を。 | This summer, / spend a day / at ENOWA. | 這個夏天， / 在ENOWA / 度過這一天。 | 这个夏天， / 在ENOWA / 度过这一天。 | 이번 여름, / ENOWA에서 / 보내는 하루를. |
| 本文 | `optional.text` | 畑から始まり、食卓、温泉、星空へとつながるENOWAの夏。 / 由布院の夏を、ENOWAならではの滞在体験として / お楽しみください。 | ENOWA’s summer begins in the fields and flows into the table, the hot spring, and the starry sky. / Enjoy Yufuin’s summer / as only ENOWA can offer it. | 從農田開始，延伸至餐桌、溫泉、星空的ENOWA夏天。 / 請將由布院的夏天， / 作為ENOWA獨有的住宿體驗盡情享受。 | 从农田开始，延伸至餐桌、温泉、星空的ENOWA夏天。 / 请将由布院的夏天， / 作为ENOWA独有的住宿体验尽情享受。 | 밭에서 시작되어, 식탁, 온천, 밤하늘로 이어지는 ENOWA의 여름. / 유후인의 여름을, / ENOWA만의 특별한 체류 경험으로 즐겨보세요. |
| CTA①（サイト共通・再掲） | `cta.reserve` | 宿泊予約をする | Book Your Stay | 立即訂房 | 立即订房 | 숙박 예약하기 |
| CTA② | `cta.contact` | お問い合わせ | Contact Us | 聯絡我們 | 联系我们 | 문의하기 |

---

## 8. Footer / モバイル固定CTA

> コピーライト「© ENOWA ALL RIGHTS RESERVED.」は静的テキストで全言語共通（data-i18n対象外）。

| ラベル | key | 日本語 (JA) | English (EN) | 繁體中文 (zh-TW) | 简体中文 (zh-CN) | 한국어 (KO) |
|---|---|---|---|---|---|---|
| 免責注記 | `footer.note` | 掲載写真にはイメージを含みます。 / 一部の写真は ENOWAで過ごす夏の世界観を表現したイメージです。 | Photos shown may include representative imagery. / Some photos are illustrative, created to express the feeling of summer at ENOWA. | 刊登照片可能包含示意圖。 / 部分照片為表現ENOWA夏日世界觀之示意影像。 | 刊登照片可能包含示意图。 / 部分照片为表现ENOWA夏日世界观之示意影像。 | 게재된 사진에는 이미지 컷이 포함될 수 있습니다. / 일부 사진은 ENOWA에서 보내는 여름의 세계관을 표현한 이미지입니다. |
| 固定CTA①（サイト共通・再掲） | `cta.reserve` | 宿泊予約をする | Book Your Stay | 立即訂房 | 立即订房 | 숙박 예약하기 |
| 固定CTA②（サイト共通・再掲） | `cta.contact` | お問い合わせ | Contact Us | 聯絡我們 | 联系我们 | 문의하기 |

---

## 静的テキスト（data-i18n対象外・全言語で英語のまま表示）

| 箇所 | テキスト |
|---|---|
| Hero eyebrow | AT ENOWA, YUFUIN — SUMMER 2026 |
| Hero 英語サブコピー | Harvest. Taste. Play. Wish upon the stars. / An unforgettable summer vacation begins at ENOWA. |
| Remember eyebrow | AT ENOWA, YUFUIN |
| Remember 見出し | The Summer You Remember. |
| Intro eyebrow | 24 Hours of ENOWA Summer |
| 各タイムライン項目の time-en | at ENOWA — Farm Tour / at ENOWA — Vegetable Syrup Kakigori / at ENOWA — Private Pool / at ENOWA — Genryu Taiko / Night at ENOWA |
| 各タイムライン項目の時刻 | 13:00 / 14:30 / 15:30 / 19:30 / 22:00 |
| Seasonal 見出し | Seasonal Experiences |
| Seasonal サブ | Summer Only At ENOWA |
| Seasonal バッジ（かき氷・流星群） | SUMMER ONLY |
| Optional eyebrow | Optional Experiences |
| Footer コピーライト | © ENOWA ALL RIGHTS RESERVED. |
