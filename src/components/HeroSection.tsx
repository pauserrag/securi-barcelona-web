import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Formación y simulacros de phishing para empresas
              </h1>
              <p className="text-xl text-white/90">
                Protege tu empresa con formación especializada en ciberseguridad y 
                simulacros de phishing 100% seguros para evaluar y mejorar la concienciación 
                de tus empleados.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="xl">
                Solicita una Demo Gratuita
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-navy">
                Conoce Nuestros Servicios
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">100% Seguro</p>
                  <p className="text-sm text-white/80">Simulaciones controladas</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Certificados</p>
                  <p className="text-sm text-white/80">Formación acreditada</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Resultados</p>
                  <p className="text-sm text-white/80">Informes detallados</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Ciberseguridad corporativa en Barcelona"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;