import { brand, footer } from "@/data/summerCampaign";

export default function Footer() {
  return (
    <footer className="bg-enowa-black px-5 py-16 text-enowa-cream sm:px-8">
      <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-enowa-cream/50">
        {footer.disclaimer}
      </p>

      <div className="mt-14 flex flex-col items-center gap-4">
        <p className="font-display text-lg tracking-[0.3em] text-enowa-cream/90">{brand.nameEn}</p>
        <p className="text-xs text-enowa-cream/40">{footer.copyright}</p>
      </div>
    </footer>
  );
}
