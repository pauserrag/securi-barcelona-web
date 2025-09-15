import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, Briefcase, Building } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      icon: Users,
      employees: "Hasta 50 empleados",
      price: "299€",
      period: "/mes",
      description: "Perfecto para pequeñas empresas que empiezan con ciberseguridad",
      features: [
        "2 simulacros de phishing al mes",
        "Cursos básicos de ciberseguridad", 
        "Informes mensuales",
        "Soporte por email",
        "Dashboard básico"
      ],
      popular: false
    },
    {
      name: "Professional",
      icon: Briefcase,
      employees: "Hasta 100 empleados",
      price: "549€",
      period: "/mes",
      description: "La opción más popular para empresas en crecimiento",
      features: [
        "4 simulacros de phishing al mes",
        "Cursos avanzados + certificaciones",
        "Informes semanales detallados",
        "Soporte prioritario",
        "Dashboard completo",
        "Formación personalizada",
        "API de integración"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      icon: Building,
      employees: "Más de 100 empleados",
      price: "Personalizado",
      period: "",
      description: "Solución completa para grandes organizaciones",
      features: [
        "Simulacros ilimitados",
        "Cursos personalizados por sector",
        "Informes en tiempo real",
        "Soporte 24/7 dedicado",
        "Dashboard ejecutivo",
        "Consultoría especializada",
        "Integración completa",
        "SLA garantizado"
      ],
      popular: false
    }
  ];

  return (
    <section id="precios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-navy">Planes y Precios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elige el plan que mejor se adapte al tamaño y necesidades de tu empresa.
            Todos incluyen formación certificada y simulacros seguros.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-elegant ${
              plan.popular 
                ? 'border-2 border-orange shadow-glow scale-105' 
                : 'border-2 hover:border-orange/50'
            }`}>
              {plan.popular && (
                <div className="absolute -top-1 left-0 right-0 h-2 bg-gradient-accent"></div>
              )}
              
              {plan.popular && (
                <div className="absolute top-6 right-6 bg-orange text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Más Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-navy">{plan.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-orange">
                      {plan.employees}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-navy">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <Button 
                    variant={plan.popular ? "cta" : "corporate"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.price === "Personalizado" ? "Contactar Ventas" : "Empezar Ahora"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">¿Necesitas una solución personalizada?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Ofrecemos planes personalizados para organizaciones con requisitos específicos, 
              múltiples sedes o necesidades de integración especiales.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="demo" size="lg">
                Solicitar Demo Personalizada
              </Button>
              <Button variant="outline" size="lg">
                Hablar con un Experto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;