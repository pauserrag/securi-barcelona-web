import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Users, BarChart3 } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      number: "01",
      icon: Users,
      title: "Análisis Inicial",
      description: "Evaluamos el nivel actual de concienciación de tu equipo",
      details: "Realizamos una auditoría inicial para entender las vulnerabilidades específicas de tu organización."
    },
    {
      number: "02", 
      icon: Shield,
      title: "Simulaciones Seguras",
      description: "Ejecutamos campañas de phishing 100% controladas y seguras",
      details: "Nunca utilizamos phishing real. Todas nuestras simulaciones son completamente seguras y están diseñadas para educar, no para dañar."
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Análisis de Resultados",
      description: "Medimos respuestas y identificamos áreas de mejora",
      details: "Generamos métricas detalladas sobre el comportamiento de los usuarios ante las simulaciones."
    },
    {
      number: "04",
      icon: FileText,
      title: "Informes Ejecutivos",
      description: "Proporcionamos reportes detallados con recomendaciones",
      details: "Recibes informes completos con análisis de riesgos, tendencias y plan de acción personalizado."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-navy">Nuestra Metodología</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso probado que garantiza la seguridad total mientras maximiza 
            el aprendizaje y la concienciación de tu equipo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-2 hover:border-orange/50 transition-all duration-300 hover:shadow-elegant">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-accent"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-orange/30">{step.number}</div>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-navy">{step.title}</CardTitle>
                <CardDescription className="text-base font-medium">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-orange/10 border border-orange/20 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-navy">Garantía de Seguridad</h3>
          </div>
          <p className="text-lg text-navy/80 mb-4">
            <strong>Nunca utilizamos phishing real.</strong> Todas nuestras simulaciones son 
            completamente controladas y diseñadas exclusivamente para fines educativos.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 text-navy/70">
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange" />
              Sin riesgos para la empresa
            </li>
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange" />
              Datos completamente protegidos
            </li>
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange" />
              Cumplimiento total con RGPD
            </li>
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange" />
              Certificaciones de seguridad
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;