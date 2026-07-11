import { brand, nav, RESERVATION_URL } from "@/data/summerCampaign";

export default function Footer() {
  return (
    <footer className="bg-enowa-green px-5 pb-10 pt-16 text-enowa-cream sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold tracking-[0.2em]">{brand.nameEn}</p>
          <p className="mt-3 max-w-xs text-sm text-enowa-cream/70">{brand.taglineSub}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-enowa-cream/80">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="min-h-11 py-2 hover:text-enowa-cream">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={RESERVATION_URL}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-enowa-cream/40 px-6 py-3 text-sm font-medium tracking-wide text-enowa-cream transition-colors hover:bg-enowa-cream hover:text-enowa-green"
        >
          VIEW AVAILABILITY
        </a>
      </div>

      <p className="mx-auto mt-12 max-w-7xl text-xs text-enowa-cream/50">
        &copy; {new Date().getFullYear()} {brand.nameEn}. All rights reserved.
      </p>
    </footer>
  );
}
