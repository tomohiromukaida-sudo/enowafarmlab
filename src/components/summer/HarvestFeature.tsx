import Image from "next/image";
import { harvestFeatureImages } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";

export default function HarvestFeature() {
  const [big, ...rest] = harvestFeatureImages;

  return (
    <section id="harvest" className="bg-enowa-cream px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <RevealSection className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-summer-tomato">SUMMER HARVEST</p>
          <h2 className="mt-4 font-heading text-2xl text-enowa-black sm:text-4xl">夏のみずみずしさを、そのまま。</h2>
        </RevealSection>

        <RevealSection className="relative mt-14 aspect-[16/10] w-full overflow-hidden rounded-3xl sm:mt-20 sm:aspect-[21/9]">
          <div className="relative h-full w-full overflow-hidden rounded-3xl">
            <Image
              src={big.src}
              alt={big.alt}
              fill
              sizes="100vw"
              className="reveal-image object-cover"
            />
          </div>
        </RevealSection>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-3">
          {rest.map((img, i) => (
            <RevealSection key={img.src} delayMs={i * 100} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="reveal-image object-cover"
                />
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
