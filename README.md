# ENOWA SUMMER EXPERIENCE — LP

夏季ブランドキャンペーンLP（Next.js 16 / App Router / TypeScript / Tailwind CSS v4）。

> HONDA SUN ENOWA FARM LAB 作業記録の後継として、このリポジトリに新規構築しています。
> 改修ベースとなる ENOWA YUFUIN 本サイトのソースコードはこのセッションではアクセスできなかったため
> （ヘッダー/フッター/予約導線などの既存実装なし）、Adobe XD のデザインを参考にゼロから実装しました。
> 本サイトのコードが用意でき次第、ヘッダー・フッター・フォント・ボタン等をそちらに合わせて置き換えてください。

## セットアップ

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run lint
```

## ディレクトリ構成

```
src/data/summerCampaign.ts   コピー・タイムライン・体験カード・シロップ・キャンペーン詳細・予約URL等の一次情報
src/lib/gtag.ts               GA4/GTM 用の dataLayer push ヘルパー
src/components/summer/        セクションごとのコンポーネント（Header, Footer, SummerHero, SummerTimeline, ...）
public/images/summer/**       画像（現在はプレースホルダーSVG）
scripts/generate-placeholders.mjs   プレースホルダー画像の再生成スクリプト
```

## コピーの差し替え

`src/data/summerCampaign.ts` の `activeCopyId` を `candidate-1` / `candidate-2` / `candidate-3` に変更するだけで
ヒーローのメインコピーが切り替わります。各候補の文言も同ファイル内 `copyVariants` にまとまっています。

## 画像の差し替え（撮影素材受領後）

`public/images/summer/**` 以下のプレースホルダーSVGを、**同じパス・同じファイル名**の実写真（`.jpg`/`.webp`等）に
差し替えるだけで反映されます。パスは `src/data/summerCampaign.ts` に一元管理されているため、コンポーネント側の
修正は不要です。拡張子を変える場合は同ファイル内の該当パスも合わせて更新してください。

プレースホルダーを作り直す場合は `node scripts/generate-placeholders.mjs` を実行してください。

## 未確定事項（TODO）

- **予約URL**: 本番の予約ページURLが未確定のため `src/data/summerCampaign.ts` の `RESERVATION_URL` は
  `#reservation` の仮リンクです。確定後、この1箇所を差し替えれば全CTAに反映されます。
- **キャンペーン詳細**: `src/data/summerCampaign.ts` の `campaignInfo` は全項目 `TBD`。マーケティング確定後に
  この配列のみ更新してください。
- **野菜シロップ名/材料**: `syrups` の `name` / `ingredients` も `TBD`。
- **ブランド資産**: 実際のENOWAロゴ・正式ヘッダー/フッターナビ・確定フォントが未提供のため、
  `Header.tsx` / `Footer.tsx` は新規のテキストロゴ・仮ナビで実装しています。既存サイトのコードが
  用意でき次第、差し替えを推奨します。

## GA4 / GTM

既存の GA4/GTM 実装がこのセッションでは確認できなかったため、`NEXT_PUBLIC_GTM_ID`（`.env.example` 参照）を
設定すると `src/components/summer/GtmScript.tsx` が GTM のスクリプトタグを出力します。未設定時は何も描画しません。
計測イベント名は `src/data/summerCampaign.ts` の `gaEvents` に定義済みで、各CTA/カードから
`src/lib/gtag.ts` の `trackEvent()` 経由で `window.dataLayer` にpushされます。

既存サイトに別方式のタグ実装がある場合は、`trackEvent()` の中身をそちらに合わせて置き換えてください。
