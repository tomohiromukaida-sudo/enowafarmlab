import { campaignInfo } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";

export default function CampaignInformation() {
  return (
    <section id="campaign-info" className="bg-enowa-cream px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <RevealSection className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-enowa-green/70">CAMPAIGN INFORMATION</p>
          <h2 className="mt-4 font-heading text-2xl text-enowa-black sm:text-4xl">キャンペーン詳細</h2>
          <p className="mt-4 text-xs text-enowa-black/50">
            ※ 「TBD」の項目は現在確定作業中です。確定次第、本セクションのみ更新されます。
          </p>
        </RevealSection>

        <RevealSection as="dl" className="mt-14 divide-y divide-enowa-black/10 border-y border-enowa-black/10 sm:mt-20">
          {campaignInfo.map((item) => (
            <div key={item.label} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8 sm:py-6">
              <dt className="text-sm font-medium text-enowa-black/60 sm:w-48 sm:shrink-0">{item.label}</dt>
              <dd className="text-sm text-enowa-black sm:flex-1">{item.value}</dd>
            </div>
          ))}
        </RevealSection>
      </div>
    </section>
  );
}
