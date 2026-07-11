import Image from "next/image";
import { shavedIceImages } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";
import SyrupList from "./SyrupList";

export default function ShavedIceFeature() {
  return (
    <section id="shaved-ice" className="bg-enowa-cream px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <RevealSection className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-summer-pool">VEGETABLE SHAVED ICE</p>
          <h2 className="mt-4 font-heading text-2xl text-enowa-black sm:text-4xl">畑から生まれた、夏のひと皿。</h2>
        </RevealSection>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4 sm:gap-4">
          {shavedIceImages.map((img, i) => (
            <RevealSection
              key={img.src}
              delayMs={i * 80}
              className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square"}`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="reveal-image object-cover"
                />
              </div>
            </RevealSection>
          ))}
        </div>

        <SyrupList />
      </div>
    </section>
  );
}
