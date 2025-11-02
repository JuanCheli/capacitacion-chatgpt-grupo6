import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { ArrowLeft, HelpCircle } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 lg:py-12 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span>Preguntas Frecuentes</span>
        </div>
        <div className="flex items-center gap-3">
          <HelpCircle className="h-10 w-10 text-primary" />
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Preguntas Frecuentes</h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Encuentra respuestas a las dudas más comunes sobre ChatGPT y nuestro curso de capacitación.
        </p>
      </div>

      {/* FAQ Section */}
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

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg text-left">¿Es difícil aprender a usar ChatGPT?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                No, ChatGPT es muy fácil de usar. Solo necesitas escribir tus preguntas como si estuvieras hablando
                con una persona. No necesitas conocimientos técnicos especiales. Con este curso, aprenderás paso a
                paso todo lo que necesitas saber.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg text-left">
                ¿Puedo confiar en la información que me da ChatGPT?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                ChatGPT es muy útil, pero no es perfecto. A veces puede cometer errores o dar información
                desactualizada. Es importante verificar información importante, especialmente sobre salud o finanzas,
                con fuentes confiables o profesionales.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="bg-accent">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-2 text-lg">¿No encontraste lo que buscabas?</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Si tienes alguna otra pregunta, no dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
          <Button asChild variant="default" size="lg" className="text-base">
            <Link href="/contactanos">Ir a Contáctanos</Link>
          </Button>
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
