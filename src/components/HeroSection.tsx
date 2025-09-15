import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Formación en ciberseguridad y simulacros de phishing para empresas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Protege tu empresa con cursos certificados y simulacros de phishing controlados. 
              Cumplimiento normativo y concienciación de empleados en Barcelona.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => scrollToSection('contacto')}
            >
              Solicitar demo gratuita
            </Button>
            <Button 
              variant="outline-light" 
              size="xl"
              onClick={() => scrollToSection('cursos')}
            >
              Ver nuestros cursos
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">100% Seguro</h3>
                <p className="text-white/80">Simulaciones controladas sin riesgos</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Certificaciones</h3>
                <p className="text-white/80">Cursos con certificado profesional</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Compliance</h3>
                <p className="text-white/80">Cumplimiento normativo garantizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;