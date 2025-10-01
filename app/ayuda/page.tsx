import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { MessageSquare, Mail, HelpCircle, ArrowLeft, Send } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 lg:py-12 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span>Ayuda</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Centro de Ayuda y Soporte</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Estamos aquí para ayudarte. Encuentra respuestas a preguntas frecuentes o contáctanos directamente.
        </p>
      </div>

      {/* Support options */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <HelpCircle className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">Preguntas Frecuentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Consulta las respuestas a las dudas más comunes.
            </p>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="#faq">Ver FAQ</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <MessageSquare className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">Foro Comunitario</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">Comparte experiencias con otros usuarios.</p>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="#forum">Ir al Foro</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Mail className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">Contacto Directo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">Envíanos un mensaje y te responderemos pronto.</p>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="#contact">Contactar</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="space-y-4 scroll-mt-8">
        <h2 className="text-2xl font-bold text-foreground">Preguntas Frecuentes</h2>
        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-left">¿Necesito pagar para usar ChatGPT?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  ChatGPT tiene una versión gratuita que puedes usar sin costo. También existe una versión de pago
                  (ChatGPT Plus) con funciones adicionales, pero no es necesaria para aprender y usar las funciones
                  básicas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg text-left">¿Puedo usar ChatGPT desde mi celular?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Sí, puedes usar ChatGPT desde tu celular de dos formas: descargando la aplicación oficial desde la
                  tienda de aplicaciones, o usando el navegador web de tu teléfono visitando chat.openai.com.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg text-left">¿Qué hago si olvidé mi contraseña?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  En la página de inicio de sesión de ChatGPT, haz clic en "Forgot password" (Olvidé mi contraseña). Te
                  enviarán un correo electrónico con instrucciones para crear una nueva contraseña.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg text-left">¿ChatGPT guarda mis conversaciones?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Sí, ChatGPT guarda tus conversaciones en tu cuenta para que puedas volver a verlas después. Puedes
                  borrar conversaciones individuales si lo deseas. Por eso es importante no compartir información
                  sensible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg text-left">¿Puedo usar ChatGPT sin internet?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  No, necesitas conexión a internet para usar ChatGPT, ya que funciona en línea. Asegúrate de tener WiFi
                  o datos móviles activos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg text-left">¿En qué idiomas funciona ChatGPT?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  ChatGPT funciona en muchos idiomas, incluyendo español. Puedes escribirle en español y te responderá
                  en español. También puede ayudarte a traducir entre idiomas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Forum placeholder */}
      <section id="forum" className="space-y-4 scroll-mt-8">
        <h2 className="text-2xl font-bold text-foreground">Foro Comunitario</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Comparte y aprende con otros usuarios</CardTitle>
            <CardDescription className="text-base">
              Un espacio moderado donde puedes hacer preguntas, compartir experiencias y ayudar a otros.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              (Aquí se integrará el foro moderado donde los usuarios pueden publicar preguntas y respuestas)
            </p>
            <div className="bg-muted p-6 rounded-lg space-y-3">
              <p className="font-semibold">Temas populares:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mis primeros pasos con ChatGPT</li>
                <li>• Recetas que he descubierto usando ChatGPT</li>
                <li>• Cómo uso ChatGPT para mantenerme en contacto con mi familia</li>
                <li>• Dudas sobre seguridad y privacidad</li>
              </ul>
            </div>
            <Button size="lg" className="text-base">
              <MessageSquare className="h-5 w-5 mr-2" />
              Acceder al Foro
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Contact form */}
      <section id="contact" className="space-y-4 scroll-mt-8">
        <h2 className="text-2xl font-bold text-foreground">Formulario de Contacto</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Envíanos tu consulta</CardTitle>
            <CardDescription className="text-base">
              Responderemos tu mensaje lo antes posible. Tiempo de respuesta estimado: 24-48 horas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">
                  Nombre completo
                </Label>
                <Input id="name" placeholder="Tu nombre" className="text-base h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Correo electrónico
                </Label>
                <Input id="email" type="email" placeholder="tu@correo.com" className="text-base h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-base">
                  Asunto
                </Label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" className="text-base h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  placeholder="Describe tu consulta o problema con el mayor detalle posible..."
                  className="min-h-[150px] text-base resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-base">
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Additional resources */}
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Recursos Adicionales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">📧 Correo de soporte</h3>
              <p className="text-muted-foreground">soporte@ejemplo.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📞 Teléfono de ayuda</h3>
              <p className="text-muted-foreground">+54 11 1234-5678</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Horario de atención: Lunes a Viernes, 9:00 - 18:00 hs
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-start pt-4">
        <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
          <Link href="/">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  )
}
