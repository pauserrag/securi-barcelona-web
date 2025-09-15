import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CursosSection from "@/components/CursosSection";
import SimulacrosSection from "@/components/SimulacrosSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CursosSection />
      <SimulacrosSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
