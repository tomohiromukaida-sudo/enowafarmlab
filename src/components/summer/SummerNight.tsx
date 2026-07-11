import Image from "next/image";
import { nightFeatureImages } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";

export default function SummerNight() {
  return (
    <section id="night" className="bg-enowa-night px-5 py-24 text-enowa-cream sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <RevealSection className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-summer-citrus">SUMMER NIGHT</p>
          <h2 className="mt-4 font-heading text-2xl leading-snug sm:text-4xl">
            流れ星を待つ夜までが、
            <br />
            ENOWAの夏です。
          </h2>
        </RevealSection>

        <div className="mt-16 sm:mt-24">
          <RevealSection className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="font-display text-sm tracking-[0.3em] text-enowa-cream/80">TAIKO</span>
            <span aria-hidden="true" className="h-px flex-1 bg-enowa-cream/15" />
          </RevealSection>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {nightFeatureImages.taiko.map((img, i) => (
              <RevealSection
                key={img.src}
                delayMs={i * 100}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
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

        <div className="mt-16 sm:mt-24">
          <RevealSection className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="font-display text-sm tracking-[0.3em] text-enowa-cream/80">STARGAZING</span>
            <span aria-hidden="true" className="h-px flex-1 bg-enowa-cream/15" />
          </RevealSection>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {nightFeatureImages.stars.map((img, i) => (
              <RevealSection
                key={img.src}
                delayMs={i * 100}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 2 ? "aspect-[4/5] sm:col-span-1" : "aspect-[4/5]"
                }`}
              >
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
      </div>
    </section>
  );
}
