import { experiences } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceGrid() {
  return (
    <section id="experiences" className="bg-enowa-cream px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <RevealSection className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-enowa-green/70">SUMMER EXPERIENCES</p>
          <h2 className="mt-4 font-heading text-2xl text-enowa-black sm:text-4xl">夏を、遊び尽くす。</h2>
        </RevealSection>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-5 lg:grid-cols-4">
          {experiences.map((item, i) => (
            <RevealSection key={item.id} delayMs={(i % 4) * 80}>
              <ExperienceCard item={item} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
