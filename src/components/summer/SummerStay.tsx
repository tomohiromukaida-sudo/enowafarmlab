"use client";

import Image from "next/image";
import { gaEvents, stayImages, type StayImage } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";
import ReservationCTA from "./ReservationCTA";
import { trackEvent } from "@/lib/gtag";

const GROUPS: { category: StayImage["category"]; en: string; ja: string }[] = [
  { category: "POOL", en: "POOL", ja: "プール" },
  { category: "SAUNA", en: "SAUNA", ja: "サウナ" },
  { category: "ROOM", en: "ROOM", ja: "客室" },
];

export default function SummerStay() {
  return (
    <section id="stay" className="bg-enowa-cream px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <RevealSection className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-summer-pool">STAY IN SUMMER</p>
          <h2 className="mt-4 font-heading text-2xl text-enowa-black sm:text-4xl">水と風に、ほどけていく。</h2>
        </RevealSection>

        <div className="mt-16 flex flex-col gap-16 sm:mt-24 sm:gap-24">
          {GROUPS.map((group) => {
            const images = stayImages.filter((img) => img.category === group.category);
            return (
              <div key={group.category} className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
                <RevealSection className="flex flex-col justify-center sm:col-span-1">
                  <p className="font-display text-xs tracking-[0.3em] text-enowa-green/70">{group.en}</p>
                  <p className="mt-2 font-heading text-2xl text-enowa-black">{group.ja}</p>
                </RevealSection>
                {images.map((img, i) => (
                  <RevealSection
                    key={img.src}
                    delayMs={i * 100}
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:col-span-1"
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
            );
          })}
        </div>

        <RevealSection className="mt-20 flex flex-col items-center gap-4 sm:mt-28">
          <a
            href="#campaign-info"
            className="text-sm tracking-wide text-enowa-green underline underline-offset-4"
            onClick={() => trackEvent(gaEvents.roomDetailClick)}
          >
            客室の詳細を見る
          </a>
          <ReservationCTA gaEvent={gaEvents.timelineReserveClick} />
        </RevealSection>
      </div>
    </section>
  );
}
