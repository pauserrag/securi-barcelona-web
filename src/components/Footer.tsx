import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CyberSecure BCN</h3>
                <p className="text-sm text-white/70">Formación en Ciberseguridad</p>
              </div>
            </div>
            <p className="text-white/80">
              Protegemos empresas de Barcelona y toda España con formación especializada 
              y simulacros de phishing seguros.
            </p>
          </div>
          
          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#servicios" className="hover:text-orange transition-colors">Cursos Online</a></li>
              <li><a href="#servicios" className="hover:text-orange transition-colors">Simulacros de Phishing</a></li>
              <li><a href="#beneficios" className="hover:text-orange transition-colors">Consultoría</a></li>
              <li><a href="#precios" className="hover:text-orange transition-colors">Planes Enterprise</a></li>
            </ul>
          </div>
          
          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-orange transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Certificaciones</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange" />
                <span className="text-sm">Barcelona, España</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange" />
                <span className="text-sm">+34 93 000 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange" />
                <span className="text-sm">info@cybersecurebcn.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 CyberSecure BCN. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-orange transition-colors">Términos de Uso</a>
              <a href="#" className="hover:text-orange transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-orange transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;