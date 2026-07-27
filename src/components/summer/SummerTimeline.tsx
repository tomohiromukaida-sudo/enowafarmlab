import Image from "next/image";
import { timeline, timelineIntro } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";

function Headline({ item }: { item: (typeof timeline)[number] }) {
  return (
    <h3 className="font-heading text-2xl leading-snug text-current sm:text-3xl">
      {item.headline.map((line, i) => (
        <span key={i} className="block">
          {item.highlightWord && line.includes(item.highlightWord) ? (
            <>
              {line.split(item.highlightWord)[0]}
              <span className="text-summer-highlight">{item.highlightWord}</span>
              {line.split(item.highlightWord)[1]}
            </>
          ) : (
            line
          )}
        </span>
      ))}
    </h3>
  );
}

const ALIGN_CLASSES: Record<string, string> = {
  left: "items-start text-left",
  right: "items-end text-right ml-auto",
  center: "items-center text-center mx-auto",
};

function SplitMoment({ item }: { item: (typeof timeline)[number] }) {
  return (
    <RevealSection
      as="div"
      className="grid grid-cols-1 gap-6 border-t border-enowa-black/10 py-14 sm:grid-cols-2 sm:gap-12 sm:py-20"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-auto">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, 45vw"
          className="reveal-image object-cover"
        />
      </div>

      <div className="flex flex-col justify-center text-enowa-black">
        <p className="font-display text-2xl font-semibold tracking-wide text-enowa-green sm:text-3xl">{item.time}</p>
        <p className="mt-1 font-display text-[11px] tracking-[0.2em] text-enowa-black/50">{item.eyebrow}</p>
        <div className="mt-4">
          <Headline item={item} />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-enowa-black/70 sm:text-base">{item.body}</p>

        {item.tags && (
          <ul className="mt-5 space-y-1 border-t border-enowa-black/10 pt-4 text-xs text-enowa-black/50">
            {item.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        {item.gallery && (
          <div className="mt-5 grid grid-cols-3 gap-3">
            {item.gallery.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={img.src} alt={img.alt} fill sizes="150px" className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </RevealSection>
  );
}

function ImmersiveMoment({ item }: { item: (typeof timeline)[number] }) {
  const alignClass = ALIGN_CLASSES[item.align ?? "left"];

  return (
    <RevealSection as="div" className="relative flex min-h-[70svh] items-center overflow-hidden sm:min-h-[85vh]">
      <Image src={item.image.src} alt={item.image.alt} fill sizes="100vw" className="reveal-image object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-enowa-black/70 via-enowa-black/20 to-enowa-black/10" />

      <div className={`relative z-10 flex w-full max-w-xl flex-col gap-4 px-5 py-16 sm:px-8 ${alignClass}`}>
        <p className="font-display text-2xl font-semibold tracking-wide text-enowa-cream sm:text-3xl">{item.time}</p>
        <p className="font-display text-[11px] tracking-[0.2em] text-enowa-cream/70">{item.eyebrow}</p>
        {item.titleJa && <p className="font-heading text-sm text-enowa-cream/90">{item.titleJa}</p>}
        <Headline item={item} />
        <p className="max-w-md text-sm leading-relaxed text-enowa-cream/85 sm:text-base">{item.body}</p>
        {item.note && <p className="text-xs text-enowa-cream/60">{item.note}</p>}
        {item.schedule && <p className="text-xs tracking-wide text-enowa-cream/70">{item.schedule}</p>}
      </div>
    </RevealSection>
  );
}

export default function SummerTimeline() {
  return (
    <section id="day" className="bg-enowa-cream text-enowa-cream">
      <div className="bg-enowa-cream px-5 py-24 text-enowa-black sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
          <RevealSection>
            <p className="font-display text-xs tracking-[0.3em] text-enowa-green/70">{timelineIntro.eyebrow}</p>
            <h2 className="mt-4 font-heading text-2xl leading-snug text-enowa-black sm:text-4xl">
              {timelineIntro.heading}
            </h2>
          </RevealSection>

          <RevealSection delayMs={80} className="flex flex-col justify-center gap-1 sm:items-end sm:text-right">
            {timelineIntro.lead.map((line) => (
              <p key={line} className="text-sm leading-loose text-enowa-black/70 sm:text-base">
                {line}
              </p>
            ))}
            <p className="mt-3 text-sm leading-loose text-enowa-black/50 sm:text-base">{timelineIntro.closing}</p>
          </RevealSection>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {timeline
          .filter((item) => item.variant === "split")
          .map((item) => (
            <SplitMoment key={item.time} item={item} />
          ))}
      </div>

      {timeline
        .filter((item) => item.variant === "immersive")
        .map((item) => (
          <ImmersiveMoment key={item.time} item={item} />
        ))}
    </section>
  );
}
