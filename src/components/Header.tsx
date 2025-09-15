import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy">Securi Barcelona</h1>
              <p className="text-xs text-muted-foreground">Ciberseguridad profesional</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('cursos')} 
              className="text-navy hover:text-blue-light transition-colors font-medium"
            >
              Cursos
            </button>
            <button 
              onClick={() => scrollToSection('simulacros')} 
              className="text-navy hover:text-blue-light transition-colors font-medium"
            >
              Simulacros de phishing
            </button>
            <button 
              onClick={() => scrollToSection('precios')} 
              className="text-navy hover:text-blue-light transition-colors font-medium"
            >
              Precios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-navy hover:text-blue-light transition-colors font-medium"
            >
              Contacto
            </button>
            <Button variant="demo" size="sm" onClick={() => scrollToSection('contacto')}>
              Solicitar demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;