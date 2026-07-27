"use client";

import Image from "next/image";
import { CONTACT_URL, closingCta, gaEvents, RESERVATION_URL } from "@/data/summerCampaign";
import { trackEvent } from "@/lib/gtag";
import RevealSection from "./RevealSection";

export default function ClosingCTA() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden py-24 sm:min-h-[85vh]">
      <Image src={closingCta.image.src} alt={closingCta.image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-enowa-black/50 via-enowa-black/10 to-transparent" />

      <RevealSection className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-5 px-5 sm:px-8">
        <p className="font-display text-xs tracking-[0.3em] text-enowa-cream/80">{closingCta.eyebrow}</p>
        <h2 className="font-heading text-3xl leading-tight text-enowa-cream sm:text-5xl">{closingCta.heading}</h2>
        <p className="max-w-xl text-sm leading-relaxed text-enowa-cream/85 sm:text-base">{closingCta.body}</p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href={RESERVATION_URL}
            onClick={() => trackEvent(gaEvents.bottomReserveClick)}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-enowa-cream px-8 py-4 text-sm font-medium tracking-wide text-enowa-green transition-transform duration-300 hover:scale-[1.03]"
          >
            {closingCta.ctaPrimary}
          </a>
          <a
            href={CONTACT_URL}
            onClick={() => trackEvent(gaEvents.campaignDetailClick, { placement: "closing-contact" })}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-enowa-green px-8 py-4 text-sm font-medium tracking-wide text-enowa-cream transition-transform duration-300 hover:scale-[1.03]"
          >
            {closingCta.ctaSecondary}
          </a>
        </div>
      </RevealSection>
    </section>
  );
}
