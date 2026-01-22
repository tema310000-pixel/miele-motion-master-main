import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollVideoHero } from "@/components/home/ScrollVideoHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { TrustBanner } from "@/components/home/TrustBanner";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ScrollVideoHero />
        <ServicesOverview />
        <WhyChooseUs />
        <ServiceAreas />
        <TrustBanner />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
