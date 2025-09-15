import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    empresa: "",
    email: "",
    telefono: "",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Placeholder para endpoint de Formspree
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado correctamente!",
          description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
        });
        setFormData({ empresa: "", email: "", telefono: "", mensaje: "" });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      toast({
        title: "Error al enviar el mensaje",
        description: "Por favor, inténtalo de nuevo o contacta directamente por email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Solicita tu demo gratuita
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo podemos mejorar la ciberseguridad de tu empresa. 
            Te contactaremos para programar una demostración personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-navy">Envíanos tu consulta</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa *</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={handleInputChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono (opcional)</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre las necesidades de ciberseguridad de tu empresa..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar demo gratuita"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-navy">Contacto directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-light" />
                  <div>
                    <p className="font-semibold">Barcelona, España</p>
                    <p className="text-gray-600">Servicios en toda España</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-light" />
                  <div>
                    <p className="font-semibold">info@securibarcelona.com</p>
                    <p className="text-gray-600">Respuesta en 24h</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-light" />
                  <div>
                    <p className="font-semibold">+34 93 000 0000</p>
                    <p className="text-gray-600">Lun-Vie 9:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-light">
              <h3 className="text-lg font-semibold text-navy mb-3">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-light rounded-full"></div>
                  Experiencia contrastada en ciberseguridad
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-light rounded-full"></div>
                  Metodología 100% segura y legal
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-light rounded-full"></div>
                  Cumplimiento normativo garantizado
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-light rounded-full"></div>
                  Soporte en español, desde Barcelona
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