import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail, Award, BarChart3, Users, FileText } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-navy">¿Qué Ofrecemos?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales de ciberseguridad diseñadas para empresas que quieren 
            protegerse de las amenazas digitales más comunes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cursos Online */}
          <Card className="relative overflow-hidden border-2 hover:border-orange/50 transition-all duration-300 hover:shadow-elegant">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent"></div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-navy">Cursos Online de Ciberseguridad</CardTitle>
              <CardDescription className="text-base">
                Formación completa y certificada para todos los niveles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Certificados Oficiales</p>
                    <p className="text-sm text-muted-foreground">Acreditaciones reconocidas en el sector</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Contenido Adaptado</p>
                    <p className="text-sm text-muted-foreground">Módulos personalizados por sector y rol</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Seguimiento Detallado</p>
                    <p className="text-sm text-muted-foreground">Dashboard con progreso en tiempo real</p>
                  </div>
                </li>
              </ul>
              
              <div className="pt-4 border-t">
                <Button variant="corporate" className="w-full">
                  Ver Cursos Disponibles
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Simulacros de Phishing */}
          <Card className="relative overflow-hidden border-2 hover:border-orange/50 transition-all duration-300 hover:shadow-elegant">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent"></div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-navy">Simulacros de Phishing Controlada</CardTitle>
              <CardDescription className="text-base">
                Evaluaciones seguras para medir y mejorar la concienciación
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Campañas Simuladas</p>
                    <p className="text-sm text-muted-foreground">Emails de phishing realistas pero 100% seguros</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Análisis de Vulnerabilidades</p>
                    <p className="text-sm text-muted-foreground">Identificación de empleados en riesgo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Informes Ejecutivos</p>
                    <p className="text-sm text-muted-foreground">Reportes detallados con recomendaciones</p>
                  </div>
                </li>
              </ul>
              
              <div className="pt-4 border-t">
                <Button variant="corporate" className="w-full">
                  Programar Simulacro
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;