"use client";

import Image from "next/image";
import { activeCopy, brand, gaEvents, heroImage, RESERVATION_URL } from "@/data/summerCampaign";
import { trackEvent } from "@/lib/gtag";

export default function SummerHero() {
  return (
    <section id="top" className="relative flex min-h-[85svh] items-end overflow-hidden sm:min-h-screen">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Light gradient only — brief calls for keeping the photo bright, not darkened */}
      <div className="absolute inset-0 bg-gradient-to-t from-enowa-black/70 via-enowa-black/15 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="font-display text-xs tracking-[0.3em] text-enowa-cream/80">{brand.campaignNameEn}</p>

        <h1 className="font-heading text-3xl leading-snug text-enowa-cream sm:text-5xl sm:leading-tight">
          {activeCopy.ja.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="font-display text-sm tracking-[0.15em] text-enowa-cream/80 sm:text-base">
          {activeCopy.en}
        </p>

        <a
          href={RESERVATION_URL}
          onClick={() => trackEvent(gaEvents.heroReserveClick, { placement: "hero" })}
          className="mt-4 inline-flex min-h-11 items-center gap-3 rounded-full bg-enowa-cream px-8 py-4 text-sm font-medium tracking-wide text-enowa-green transition-transform duration-300 hover:scale-[1.03]"
        >
          <span>この夏の宿泊を予約する</span>
          <span aria-hidden="true" className="font-display text-xs tracking-widest opacity-70">
            VIEW AVAILABILITY
          </span>
        </a>
      </div>

      <a
        href="#day"
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
