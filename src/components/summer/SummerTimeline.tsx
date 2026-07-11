import Image from "next/image";
import { gaEvents, timeline } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";
import ReservationCTA from "./ReservationCTA";

export default function SummerTimeline() {
  return (
    <section id="day" className="bg-enowa-cream px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <RevealSection className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-enowa-green/70">A SUMMER DAY AT ENOWA</p>
          <h2 className="mt-4 font-heading text-2xl text-enowa-black sm:text-4xl">ENOWAで過ごす、夏の24時間。</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-loose text-enowa-black/70 sm:text-base">
            畑で収穫し、プールで遊び、
            <br />
            旬を味わい、星を見上げる。
            <br />
            ENOWAの夏は、泊まるだけでは終わりません。
          </p>
        </RevealSection>

        <ol className="relative mt-16 flex flex-col gap-10 sm:mt-24 sm:gap-16">
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-2 bottom-2 w-px bg-enowa-green/20 sm:left-1/2 sm:-translate-x-1/2"
          />

          {timeline.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <RevealSection
                key={item.time}
                as="li"
                delayMs={(i % 4) * 80}
                className="relative flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:items-center sm:gap-12"
              >
                <div className="flex items-start gap-4 sm:contents">
                  <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-enowa-green font-display text-[11px] font-semibold tracking-wide text-enowa-cream sm:absolute sm:left-1/2 sm:h-16 sm:w-16 sm:-translate-x-1/2 sm:text-xs">
                    {item.time}
                  </div>

                  <div
                    className={`flex-1 pt-1 ${isEven ? "sm:order-1 sm:pr-8 sm:text-right" : "sm:order-2 sm:pl-8"}`}
                  >
                    <p className="font-display text-[11px] tracking-[0.2em] text-enowa-green/70">{item.titleEn}</p>
                    <p className="mt-1 font-heading text-lg text-enowa-black sm:text-xl">{item.titleJa}</p>
                    <p className="mt-2 text-sm leading-relaxed text-enowa-black/70">{item.description}</p>
                  </div>
                </div>

                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                    isEven ? "sm:order-2 sm:pl-8" : "sm:order-1 sm:pr-8"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 40vw"
                      className="reveal-image object-cover"
                    />
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </ol>

        <RevealSection className="mt-20 sm:mt-28">
          <ReservationCTA
            gaEvent={gaEvents.timelineReserveClick}
            heading="この夏の一日を、ENOWAで。"
          />
        </RevealSection>
      </div>
    </section>
  );
}
