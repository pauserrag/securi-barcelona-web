import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy">CyberSecure BCN</h1>
              <p className="text-xs text-muted-foreground">Formación en Ciberseguridad</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-navy hover:text-orange transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-navy hover:text-orange transition-colors">
              Servicios
            </a>
            <a href="#beneficios" className="text-navy hover:text-orange transition-colors">
              Beneficios
            </a>
            <a href="#precios" className="text-navy hover:text-orange transition-colors">
              Precios
            </a>
            <Button variant="demo" size="sm">
              Solicita una Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;