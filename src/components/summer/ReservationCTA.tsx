"use client";

import { RESERVATION_URL } from "@/data/summerCampaign";
import { trackEvent } from "@/lib/gtag";

type ReservationCTAProps = {
  gaEvent: string;
  variant?: "light" | "dark";
  heading?: string;
  sub?: string;
  className?: string;
};

/**
 * TODO(reservation-url): points at RESERVATION_URL (#reservation) until the
 * real booking link is confirmed — see src/data/summerCampaign.ts.
 */
export default function ReservationCTA({
  gaEvent,
  variant = "light",
  heading,
  sub,
  className = "",
}: ReservationCTAProps) {
  const isDark = variant === "dark";

  return (
    <div className={`flex flex-col items-center gap-6 text-center ${className}`}>
      {heading && (
        <p className={`font-heading text-2xl sm:text-3xl ${isDark ? "text-enowa-cream" : "text-enowa-black"}`}>
          {heading}
        </p>
      )}
      {sub && (
        <p className={`max-w-md text-sm sm:text-base ${isDark ? "text-enowa-cream/70" : "text-enowa-black/70"}`}>
          {sub}
        </p>
      )}
      <a
        href={RESERVATION_URL}
        onClick={() => trackEvent(gaEvent)}
        className={`inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-transform duration-300 hover:scale-[1.03] ${
          isDark
            ? "bg-enowa-cream text-enowa-night hover:bg-white"
            : "bg-enowa-green text-enowa-cream hover:bg-enowa-green-light"
        }`}
      >
        <span>この夏の宿泊を予約する</span>
        <span aria-hidden="true" className="font-display text-xs tracking-widest opacity-80">
          RESERVE
        </span>
      </a>
    </div>
  );
}
