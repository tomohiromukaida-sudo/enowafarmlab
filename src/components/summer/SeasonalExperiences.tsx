import { seasonalExperiences, seasonalExperiencesIntro } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";

export default function SeasonalExperiences() {
  return (
    <section id="experiences" className="bg-enowa-cream px-5 py-24 sm:px-8 sm:py-32">
      <RevealSection className="mx-auto max-w-3xl rounded-3xl border border-enowa-black/10 bg-white/60 px-6 py-10 sm:px-12 sm:py-14">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-enowa-black/10 pb-6">
          <h2 className="font-display text-2xl tracking-wide text-enowa-green sm:text-3xl">
            {seasonalExperiencesIntro.heading}
          </h2>
          <p className="font-display text-xs tracking-[0.2em] text-enowa-black/40">{seasonalExperiencesIntro.eyebrow}</p>
        </div>

        <ul className="divide-y divide-enowa-black/10">
          {seasonalExperiences.map((item, i) => (
            <RevealSection as="li" key={item.title} delayMs={(i % 6) * 60} className="py-5 sm:py-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-heading text-base text-enowa-black sm:text-lg">{item.title}</p>
                {item.badge && (
                  <span className="rounded border border-enowa-green/30 px-2 py-0.5 text-[10px] font-medium tracking-wide text-enowa-green">
                    {item.badge}
                  </span>
                )}
                {item.schedule && (
                  <p className="ml-auto text-xs text-enowa-black/50 sm:text-sm">{item.schedule}</p>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-enowa-black/70">{item.description}</p>
              {item.note && <p className="mt-1 text-xs text-enowa-black/45">{item.note}</p>}
            </RevealSection>
          ))}
        </ul>
      </RevealSection>
    </section>
  );
}
