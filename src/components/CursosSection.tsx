import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ExternalLink, Mail, Lock, Smartphone, Users, FileText, Shield } from "lucide-react";

const CursosSection = () => {
  const cursos = [
    {
      titulo: "Phishing y correos fraudulentos",
      descripcion: "Aprende a identificar y evitar correos de phishing, técnicas de ingeniería social por email.",
      duracion: "45 min",
      icon: Mail,
      url: "#" // placeholder para Teachable
    },
    {
      titulo: "Contraseñas y autenticación MFA",
      descripcion: "Mejores prácticas para crear contraseñas seguras y configurar autenticación multifactor.",
      duracion: "30 min",
      icon: Lock,
      url: "#" // placeholder para Teachable
    },
    {
      titulo: "Uso seguro del puesto de trabajo",
      descripcion: "Protocolo de seguridad para el uso diario del ordenador, navegadores y aplicaciones.",
      duracion: "60 min",
      icon: Shield,
      url: "#" // placeholder para Teachable
    },
    {
      titulo: "Móvil y mensajería segura",
      descripcion: "Ciberseguridad en dispositivos móviles, WhatsApp, SMS y aplicaciones de mensajería.",
      duracion: "40 min",
      icon: Smartphone,
      url: "#" // placeholder para Teachable
    },
    {
      titulo: "Ingeniería social y manipulación",
      descripcion: "Identificar técnicas de manipulación psicológica y ataques de ingeniería social.",
      duracion: "50 min",
      icon: Users,
      url: "#" // placeholder para Teachable
    },
    {
      titulo: "RGPD básico y protección de datos",
      descripcion: "Fundamentos del Reglamento General de Protección de Datos aplicado al día a día.",
      duracion: "35 min",
      icon: FileText,
      url: "#" // placeholder para Teachable
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Cursos de Ciberseguridad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formación práctica y certificada para empleados. Aprende a proteger tu empresa 
            con cursos diseñados específicamente para el entorno corporativo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {cursos.map((curso, index) => {
            const IconComponent = curso.icon;
            return (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navy">{curso.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{curso.descripcion}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-blue-light">
                    <Clock className="w-4 h-4" />
                    <span>Duración: {curso.duracion}</span>
                  </div>
                  
                  <Button 
                    variant="cta" 
                    className="w-full"
                    onClick={() => window.open(curso.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Acceder en Teachable
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Todos los cursos incluyen certificado de finalización válido para compliance
          </p>
          <Button variant="demo" size="lg">
            Ver todos los cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CursosSection;