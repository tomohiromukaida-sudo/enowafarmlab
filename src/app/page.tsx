import Header from "@/components/summer/Header";
import Footer from "@/components/summer/Footer";
import SummerHero from "@/components/summer/SummerHero";
import SummerManifesto from "@/components/summer/SummerManifesto";
import SummerTimeline from "@/components/summer/SummerTimeline";
import SeasonalExperiences from "@/components/summer/SeasonalExperiences";
import ClosingCTA from "@/components/summer/ClosingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SummerHero />
        <SummerManifesto />
        <SummerTimeline />
        <SeasonalExperiences />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
