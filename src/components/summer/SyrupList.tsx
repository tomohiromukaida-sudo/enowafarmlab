import Image from "next/image";
import { syrups } from "@/data/summerCampaign";
import RevealSection from "./RevealSection";

const COLOR_STYLES: Record<string, string> = {
  GREEN: "text-summer-farm",
  RED: "text-summer-tomato",
  YELLOW: "text-summer-citrus",
};

export default function SyrupList() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-3 sm:gap-8">
      {syrups.map((syrup, i) => (
        <RevealSection key={syrup.color} delayMs={i * 100} className="text-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={syrup.image}
              alt={`${syrup.color}の野菜シロップの瓶`}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="reveal-image object-cover"
            />
          </div>
          <p className={`mt-4 font-display text-xs tracking-[0.3em] ${COLOR_STYLES[syrup.color]}`}>{syrup.color}</p>
          <p className="mt-1 font-heading text-lg text-enowa-black">{syrup.name}</p>
          <p className="mt-1 text-xs text-enowa-black/50">{syrup.ingredients}</p>
        </RevealSection>
      ))}
    </div>
  );
}
