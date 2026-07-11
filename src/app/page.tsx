import Header from "@/components/summer/Header";
import Footer from "@/components/summer/Footer";
import SummerHero from "@/components/summer/SummerHero";
import SummerTimeline from "@/components/summer/SummerTimeline";
import ExperienceGrid from "@/components/summer/ExperienceGrid";
import HarvestFeature from "@/components/summer/HarvestFeature";
import ShavedIceFeature from "@/components/summer/ShavedIceFeature";
import FarmDrivenDinner from "@/components/summer/FarmDrivenDinner";
import SummerStay from "@/components/summer/SummerStay";
import SummerNight from "@/components/summer/SummerNight";
import CampaignInformation from "@/components/summer/CampaignInformation";
import ReservationCTA from "@/components/summer/ReservationCTA";
import RevealSection from "@/components/summer/RevealSection";
import { gaEvents } from "@/data/summerCampaign";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SummerHero />
        <SummerTimeline />
        <ExperienceGrid />
        <HarvestFeature />
        <ShavedIceFeature />
        <FarmDrivenDinner />
        <SummerStay />
        <SummerNight />
        <CampaignInformation />

        <section className="bg-enowa-cream px-5 py-24 sm:px-8 sm:py-32">
          <RevealSection>
            <ReservationCTA
              gaEvent={gaEvents.bottomReserveClick}
              heading="この夏の宿泊を予約する"
              sub="一生忘れられない夏休みが、ここから始まる。"
            />
          </RevealSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
