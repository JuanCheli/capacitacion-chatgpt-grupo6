import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, HelpCircle, ArrowLeft, ArrowRight } from "lucide-react"

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
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <HelpCircle className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">Preguntas Frecuentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Consulta las respuestas a las dudas más comunes sobre ChatGPT y nuestro curso.
            </p>
            <Button className="w-full" asChild>
              <Link href="/preguntas-frecuentes">
                Ver Preguntas Frecuentes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Mail className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">Contáctanos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Envíanos un mensaje y te responderemos lo antes posible.
            </p>
            <Button className="w-full" asChild>
              <Link href="/contactanos">
                Ir a Contacto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick access info */}
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">¿Qué puedes encontrar?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Preguntas Frecuentes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Respuestas rápidas a las dudas más comunes sobre ChatGPT, cómo usarlo, seguridad y más.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Contacto Directo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Formulario de contacto, correo electrónico, teléfono y horarios de atención para ayudarte cuando lo necesites.
                </p>
              </div>
            </div>
          </div>
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
