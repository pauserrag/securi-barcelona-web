import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Play, BarChart3, AlertTriangle } from "lucide-react";

const SimulacrosSection = () => {
  const procesos = [
    {
      titulo: "Diseño y plantillas",
      descripcion: "Creamos campañas de phishing simulado personalizadas para tu empresa, adaptadas a tu sector y empleados.",
      icon: Palette,
      detalles: [
        "Plantillas personalizadas por sector",
        "Emails adaptados a tu empresa",
        "Diferentes niveles de dificultad",
        "Calendario de campañas programadas"
      ]
    },
    {
      titulo: "Ejecución segura",
      descripcion: "Lanzamos simulacros controlados que NO capturan credenciales reales. Solo evaluamos concienciación.",
      icon: Play,
      detalles: [
        "Sin captura de credenciales reales",
        "Páginas de aterrizaje educativas",
        "Seguimiento anónimo del comportamiento",
        "Protección total de datos personales"
      ]
    },
    {
      titulo: "Informe y plan",
      descripcion: "Generamos informes detallados con métricas de concienciación y plan de mejora personalizado.",
      icon: BarChart3,
      detalles: [
        "Métricas de clicks y interacciones",
        "Identificación de empleados en riesgo",
        "Plan de formación personalizado",
        "Comparativa con benchmarks del sector"
      ]
    }
  ];

  return (
    <section id="simulacros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Simulacros de Phishing Controlados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evaluamos la concienciación de tus empleados con simulacros 100% seguros. 
            Sin riesgos para tu empresa, solo aprendizaje y mejora continua.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {procesos.map((proceso, index) => {
            const IconComponent = proceso.icon;
            return (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navy">{proceso.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{proceso.descripcion}</p>
                  
                  <ul className="space-y-2">
                    {proceso.detalles.map((detalle, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-light rounded-full mt-2 flex-shrink-0"></div>
                        {detalle}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-light">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-blue-light" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Compromiso de seguridad y cumplimiento normativo
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="space-y-2">
                  <p className="font-medium">✓ Sin captura de credenciales reales</p>
                  <p className="font-medium">✓ Cumple con RGPD y normativas</p>
                  <p className="font-medium">✓ Datos anonimizados y protegidos</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">✓ Solo fines educativos y de concienciación</p>
                  <p className="font-medium">✓ Informes para compliance y auditorías</p>
                  <p className="font-medium">✓ Metodología certificada y profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulacrosSection;