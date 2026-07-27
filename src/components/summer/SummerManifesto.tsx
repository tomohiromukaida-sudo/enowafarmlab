import Image from "next/image";
import { manifesto } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";

export default function SummerManifesto() {
  return (
    <section id="manifesto" className="relative flex min-h-[70svh] items-center overflow-hidden py-24 sm:min-h-[85vh]">
      <Image src={manifesto.image.src} alt={manifesto.image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-enowa-black/45" />

      <RevealSection className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <p className="font-display text-xs tracking-[0.3em] text-enowa-cream/80">{manifesto.eyebrow}</p>
        <h2 className="font-heading text-3xl leading-tight text-enowa-cream sm:text-5xl">{manifesto.headline}</h2>
        <div className="text-sm leading-loose text-enowa-cream/90 sm:text-base">
          {manifesto.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
