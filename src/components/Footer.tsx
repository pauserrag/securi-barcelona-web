import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-light rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Securi Barcelona</h3>
              <p className="text-sm text-white/70">Barcelona</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} Securi Barcelona · Barcelona
              </p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a 
                href="/aviso-legal" 
                className="text-white/70 hover:text-blue-light transition-colors"
              >
                Aviso Legal
              </a>
              <a 
                href="/privacidad" 
                className="text-white/70 hover:text-blue-light transition-colors"
              >
                Privacidad
              </a>
              <a 
                href="/cookies" 
                className="text-white/70 hover:text-blue-light transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;