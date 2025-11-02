import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Send, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 lg:py-12 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span>Contáctanos</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-10 w-10 text-primary" />
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Contáctanos</h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos lo antes posible.
        </p>
      </div>

      {/* Contact form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Formulario de Contacto</CardTitle>
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

      {/* Contact information */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Mail className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-xl">Correo electrónico</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">capacitaciongpt@soporte.com</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Envíanos un correo directamente si prefieres comunicarte por esta vía.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Phone className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-xl">Teléfono de ayuda</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">+54 9 351-7691445</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Llámanos durante nuestro horario de atención para asistencia inmediata.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Office hours */}
      <Card className="bg-accent">
        <CardHeader>
          <Clock className="h-8 w-8 text-primary mb-2" />
          <CardTitle className="text-xl">Horario de Atención</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-base">
              <strong>Lunes a Viernes:</strong> 9:00 - 18:00 hs
            </p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Fuera de nuestro horario de atención, puedes enviarnos un mensaje a través del formulario y te
              responderemos en el siguiente día hábil.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
          <Link href="/">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
          <Link href="/preguntas-frecuentes">Ver Preguntas Frecuentes</Link>
        </Button>
      </div>
    </div>
  )
}
