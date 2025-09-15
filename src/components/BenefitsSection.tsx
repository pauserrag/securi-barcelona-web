import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, TrendingDown, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: FileCheck,
      title: "Cumplimiento Normativo",
      description: "Cumple con RGPD, ENS y otras normativas de ciberseguridad",
      details: "Asegura el cumplimiento de todas las regulaciones españolas y europeas en materia de protección de datos y ciberseguridad."
    },
    {
      icon: TrendingDown,
      title: "Reducción de Riesgos",
      description: "Disminuye hasta un 70% los incidentes de seguridad",
      details: "Nuestros clientes experimentan una reducción significativa en intentos de phishing exitosos y brechas de seguridad."
    },
    {
      icon: Users,
      title: "Empleados Más Conscientes",
      description: "Mejora la concienciación y respuesta ante amenazas",
      details: "Transforma a tus empleados en la primera línea de defensa contra los ataques de ingeniería social."
    },
    {
      icon: Shield,
      title: "Protección Proactiva",
      description: "Prevención antes que reacción ante incidentes",
      details: "Identifica y corrige vulnerabilidades humanas antes de que sean explotadas por ciberdelincuentes."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-navy">Beneficios Clave</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestra solución integral de ciberseguridad puede transformar 
            la seguridad digital de tu empresa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-navy">{benefit.title}</CardTitle>
                <CardDescription className="text-base font-medium text-orange">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-elegant">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-navy mb-2">95%</div>
              <p className="text-muted-foreground">Reducción en clics en enlaces maliciosos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy mb-2">24/7</div>
              <p className="text-muted-foreground">Monitorización y soporte continuo</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy mb-2">500+</div>
              <p className="text-muted-foreground">Empresas ya protegidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;