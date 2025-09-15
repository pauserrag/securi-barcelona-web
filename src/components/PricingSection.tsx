import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const planes = [
    {
      nombre: "Starter",
      descripcion: "Ideal para pequeñas empresas",
      empleados: "Hasta 25 empleados",
      caracteristicas: [
        "3 cursos de ciberseguridad",
        "1 simulacro de phishing/trimestre",
        "Informe básico de resultados",
        "Soporte por email",
        "Certificados de finalización"
      ],
      destacado: false
    },
    {
      nombre: "Growth",
      descripcion: "Para empresas en crecimiento",
      empleados: "Hasta 100 empleados",
      caracteristicas: [
        "6 cursos completos de ciberseguridad",
        "2 simulacros de phishing/trimestre",
        "Informes detallados con métricas",
        "Soporte telefónico",
        "Dashboard de compliance",
        "Campañas personalizadas"
      ],
      destacado: true
    },
    {
      nombre: "Pro",
      descripcion: "Solución enterprise completa",
      empleados: "Más de 100 empleados",
      caracteristicas: [
        "Todos los cursos + contenido exclusivo",
        "Simulacros ilimitados personalizados",
        "Informes ejecutivos y de compliance",
        "Account Manager dedicado",
        "Integración con HRIS/AD",
        "Formación presencial disponible",
        "Consultoría en ciberseguridad"
      ],
      destacado: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Planes adaptados a tu empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte al tamaño y necesidades de tu organización
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planes.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 ${
                plan.destacado ? 'ring-2 ring-blue-light scale-105' : ''
              }`}
            >
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-light text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-navy mb-2">{plan.nombre}</CardTitle>
                <p className="text-gray-600 mb-4">{plan.descripcion}</p>
                <div className="text-lg font-semibold text-blue-light">{plan.empleados}</div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-light flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.destacado ? "cta" : "demo"} 
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Pedir presupuesto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado para más de 500 empleados?
          </p>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Contacta con nuestro equipo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;