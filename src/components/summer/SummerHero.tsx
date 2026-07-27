"use client";

import Image from "next/image";
import { gaEvents, hero, RESERVATION_URL } from "@/data/summerCampaign";
import { trackEvent } from "@/lib/gtag";

function Headline() {
  return (
    <h1 className="font-heading text-3xl leading-snug text-enowa-cream sm:text-5xl sm:leading-tight">
      {hero.headlineLines.map((line, i) => (
        <span key={i} className="block">
          {line.includes(hero.highlightWord) ? (
            <>
              {line.split(hero.highlightWord)[0]}
              <span className="text-summer-highlight">{hero.highlightWord}</span>
              {line.split(hero.highlightWord)[1]}
            </>
          ) : (
            line
          )}
        </span>
      ))}
    </h1>
  );
}

export default function SummerHero() {
  return (
    <section id="top" className="relative flex min-h-[85svh] items-end overflow-hidden sm:min-h-screen">
      <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-enowa-black/70 via-enowa-black/15 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="font-display text-xs tracking-[0.3em] text-enowa-cream/80">{hero.eyebrow}</p>

        <Headline />

        <div className="text-sm leading-relaxed text-enowa-cream/90 sm:text-base">
          {hero.subJa.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="font-display text-xs leading-relaxed tracking-[0.05em] text-enowa-cream/70 sm:text-sm">
          {hero.subEn.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href={RESERVATION_URL}
            onClick={() => trackEvent(gaEvents.heroReserveClick, { placement: "hero" })}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-enowa-cream px-8 py-4 text-sm font-medium tracking-wide text-enowa-green transition-transform duration-300 hover:scale-[1.03]"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href={hero.ctaSecondaryHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-enowa-green px-8 py-4 text-sm font-medium tracking-wide text-enowa-cream transition-transform duration-300 hover:scale-[1.03]"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <a
        href="#manifesto"
        aria-label="次のセクションへスクロール"
        className="absolute bottom-6 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center text-enowa-cream/80 motion-safe:animate-bounce"
      >
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" aria-hidden="true">
          <path d="M8 1V25M8 25L1 18M8 25L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
