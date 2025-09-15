import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-navy">Contacta con Nosotros</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para proteger tu empresa? Solicita una demo gratuita y descubre 
            cómo podemos mejorar la ciberseguridad de tu organización.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <Card className="border-2 hover:border-orange/50 transition-all duration-300 hover:shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-navy">Solicita una Demo Gratuita</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input 
                      id="nombre" 
                      placeholder="Tu nombre completo"
                      className="border-2 focus:border-orange"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa *</Label>
                    <Input 
                      id="empresa" 
                      placeholder="Nombre de la empresa"
                      className="border-2 focus:border-orange"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Corporativo *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="email@empresa.com"
                      className="border-2 focus:border-orange"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input 
                      id="telefono" 
                      placeholder="+34 600 000 000"
                      className="border-2 focus:border-orange"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="empleados">Número de Empleados</Label>
                  <select className="w-full p-3 border-2 rounded-md focus:border-orange focus:outline-none">
                    <option value="">Selecciona el rango</option>
                    <option value="1-50">1-50 empleados</option>
                    <option value="51-100">51-100 empleados</option>
                    <option value="101-500">101-500 empleados</option>
                    <option value="500+">Más de 500 empleados</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Cuéntanos sobre tu empresa</Label>
                  <Textarea 
                    id="mensaje"
                    placeholder="Describe brevemente tu empresa y qué te interesa de nuestros servicios..."
                    className="border-2 focus:border-orange min-h-[120px]"
                  />
                </div>
                
                <div className="space-y-4">
                  <Button variant="cta" size="lg" className="w-full">
                    Solicitar Demo Gratuita
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    * Te contactaremos en menos de 24 horas
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Información de Contacto */}
          <div className="space-y-8">
            <Card className="bg-gradient-primary text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Oficina Principal</h4>
                    <p className="text-white/90">
                      Passeig de Gràcia, 101<br />
                      08008 Barcelona, España
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <p className="text-white/90">+34 93 000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-white/90">info@cybersecurebcn.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horario</h4>
                    <p className="text-white/90">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Soporte 24/7 disponible
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-orange/10 border border-orange/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-navy mb-3">¿Por qué elegirnos?</h3>
              <ul className="space-y-2 text-navy/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  Experiencia local en Barcelona desde 2018
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  Certificaciones oficiales en ciberseguridad
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  Soporte técnico en español
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  Cumplimiento total con normativas españolas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;