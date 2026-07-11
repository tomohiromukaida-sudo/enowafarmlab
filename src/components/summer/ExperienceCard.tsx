"use client";

import Image from "next/image";
import type { ExperienceCard as ExperienceCardType } from "@/data/summerCampaign";
import { gaEvents } from "@/data/summerCampaign";
import { trackEvent } from "@/lib/gtag";

export default function ExperienceCard({ item }: { item: ExperienceCardType }) {
  return (
    <a
      href={item.link}
      onClick={() => trackEvent(gaEvents.experienceCardClick, { experience_id: item.id })}
      className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl"
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-enowa-black/80 via-enowa-black/10 to-transparent" />

      {item.label && (
        <span className="absolute right-3 top-3 rounded-full bg-enowa-cream/90 px-3 py-1 text-[10px] font-medium tracking-wide text-enowa-green">
          {item.label}
        </span>
      )}

      <div className="relative z-10 p-4 sm:p-5">
        <p className="font-display text-[10px] tracking-[0.2em] text-enowa-cream/80">{item.title}</p>
        <p className="mt-1 font-heading text-lg text-enowa-cream sm:text-xl">{item.titleJa}</p>
        <p className="mt-1 text-xs leading-relaxed text-enowa-cream/80 sm:text-sm">{item.description}</p>
      </div>
    </a>
  );
}
