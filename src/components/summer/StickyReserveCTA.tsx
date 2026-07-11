"use client";

import { useEffect, useState } from "react";
import { RESERVATION_URL, gaEvents } from "@/data/summerCampaign";
import { trackEvent } from "@/lib/gtag";

const DISMISS_KEY = "enowa-summer-sticky-cta-dismissed";

/**
 * Mobile-only fixed bottom reservation bar. Hides automatically once the
 * footer (which already contains a reservation CTA) scrolls into view, and
 * can be dismissed for the rest of the session via the close button.
 */
export default function StickyReserveCTA() {
  const [dismissed, setDismissed] = useState(true);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    // One-time sync from sessionStorage on mount (SSR has no access to it).
    if (sessionStorage.getItem(DISMISS_KEY) !== "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDismissed(false);
    }
  }, []);

  useEffect(() => {
    if (dismissed || typeof IntersectionObserver === "undefined") return;
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting), {
      rootMargin: "0px",
      threshold: 0,
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, [dismissed]);

  if (dismissed) return null;

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-enowa-black/10 bg-enowa-cream/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
        nearFooter ? "translate-y-full" : "translate-y-0"
      }`}
      role="region"
      aria-label="宿泊予約"
    >
      <p className="flex-1 text-xs font-medium leading-snug text-enowa-black">
        夏こそ、ENOWA。
        <br />
        <span className="text-enowa-black/60">この夏の宿泊を予約する</span>
      </p>
      <a
        href={RESERVATION_URL}
        onClick={() => trackEvent(gaEvents.stickyReserveClick)}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-enowa-green px-5 py-2.5 text-xs font-medium tracking-wide text-enowa-cream"
      >
        RESERVE
      </a>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="この表示を閉じる"
        className="flex h-11 w-11 shrink-0 items-center justify-center text-enowa-black/50"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
