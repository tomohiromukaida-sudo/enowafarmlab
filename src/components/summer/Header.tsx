"use client";

import { useEffect, useState } from "react";
import { RESERVATION_URL, brand, gaEvents, nav } from "@/data/summerCampaign";
import { trackEvent } from "@/lib/gtag";

/**
 * New baseline header (no existing ENOWA site was available to reuse in
 * this session — see repo research notes). Swap `brand` copy / add a real
 * logomark in place of the text wordmark once brand assets are supplied.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled || menuOpen ? "bg-enowa-cream/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className={`font-display text-lg font-semibold tracking-[0.2em] transition-colors ${
            scrolled || menuOpen ? "text-enowa-green" : "text-enowa-cream"
          }`}
        >
          {brand.nameEn}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors ${
                scrolled ? "text-enowa-black/80 hover:text-enowa-green" : "text-enowa-cream/90 hover:text-enowa-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESERVATION_URL}
            onClick={() => trackEvent(gaEvents.heroReserveClick, { placement: "header" })}
            className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors ${
              scrolled
                ? "bg-enowa-green text-enowa-cream hover:bg-enowa-green-light"
                : "bg-enowa-cream/90 text-enowa-green hover:bg-enowa-cream"
            }`}
          >
            RESERVE
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          className={`flex h-11 w-11 items-center justify-center md:hidden ${
            scrolled || menuOpen ? "text-enowa-green" : "text-enowa-cream"
          }`}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M1 1L21 15M21 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="flex flex-col gap-1 bg-enowa-cream px-5 pb-6 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="min-h-11 border-b border-enowa-black/5 py-3 text-sm text-enowa-black/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESERVATION_URL}
            onClick={() => {
              trackEvent(gaEvents.heroReserveClick, { placement: "header-mobile" });
              setMenuOpen(false);
            }}
            className="mt-3 min-h-11 rounded-full bg-enowa-green px-5 py-3 text-center text-sm font-medium tracking-wide text-enowa-cream"
          >
            RESERVE
          </a>
        </nav>
      )}
    </header>
  );
}
