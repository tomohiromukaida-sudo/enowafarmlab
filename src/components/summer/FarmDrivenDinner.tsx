import Image from "next/image";
import { dinnerFlow, type DinnerFlowStage } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";

const STAGE_LABELS: Record<DinnerFlowStage["stage"], string> = {
  FARM: "FARM",
  KITCHEN: "KITCHEN",
  TABLE: "TABLE",
};

export default function FarmDrivenDinner() {
  const stages = (["FARM", "KITCHEN", "TABLE"] as const).map((stage) => ({
    stage,
    images: dinnerFlow.filter((img) => img.stage === stage),
  }));

  return (
    <section id="dinner" className="bg-enowa-cream px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <RevealSection className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-summer-tomato">FARM DRIVEN DINNER</p>
          <h2 className="mt-4 font-heading text-2xl text-enowa-black sm:text-4xl">今日の畑が、今夜の一皿になる。</h2>
        </RevealSection>

        <div className="mt-16 flex flex-col gap-16 sm:mt-24 sm:gap-10">
          {stages.map((group, groupIndex) => (
            <div key={group.stage}>
              <RevealSection className="mb-5 flex items-center gap-3 sm:mb-6">
                <span className="font-display text-xs font-semibold tracking-[0.3em] text-enowa-green">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm tracking-[0.3em] text-enowa-black/80">
                  {STAGE_LABELS[group.stage]}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-enowa-black/10" />
              </RevealSection>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
                {group.images.map((img, i) => (
                  <RevealSection
                    key={img.src}
                    delayMs={i * 80}
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="reveal-image object-cover"
                      />
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
