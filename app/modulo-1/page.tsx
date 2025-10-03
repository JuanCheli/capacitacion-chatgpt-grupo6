import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Video, BookOpen, CheckCircle2, Lightbulb } from "lucide-react"

export default function Module1Page() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 lg:py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span>Módulo 1</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
          Módulo 1: Introducción al mundo digital y la IA
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">Duración estimada: 20-30 minutos</p>
      </div>

      {/* Video section placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Video className="h-6 w-6 text-primary" />
            Video introductorio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-3 p-6">
              <Video className="h-16 w-16 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground text-lg">Aquí irá el video introductorio del módulo</p>
              <p className="text-sm text-muted-foreground">(Espacio reservado para contenido multimedia)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content sections */}
      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            ¿Qué es ChatGPT y cómo funciona?
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">
                ChatGPT es un asistente virtual inteligente que puede conversar contigo, responder preguntas y ayudarte
                con muchas tareas del día a día.
              </p>
              <p className="text-lg leading-relaxed">
                Piensa en ChatGPT como un ayudante muy bien informado que está disponible las 24 horas del día. Puedes
                preguntarle cosas, pedirle que te explique temas complicados de forma simple, o que te ayude a escribir
                mensajes.
              </p>
              <Alert>
                <Lightbulb className="h-5 w-5" />
                <AlertDescription className="text-base leading-relaxed">
                  <strong>Ejemplo práctico:</strong> Puedes preguntarle "¿Cómo preparo un té de manzanilla?" y te dará
                  una respuesta clara y paso a paso.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Ventajas de usarlo en la vida diaria</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Disponible siempre:</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      Puedes usarlo cuando quieras, de día o de noche.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Respuestas rápidas:</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      Obtén información al instante sin tener que buscar en muchos lugares.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Ayuda con tareas cotidianas:</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      Desde escribir un correo hasta recordarte cómo hacer algo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Aprende cosas nuevas:</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      Puedes preguntarle sobre cualquier tema que te interese.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Mitos y realidades de la inteligencia artificial</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-destructive">
                  ❌ Mito: La IA va a reemplazar a las personas
                </h3>
                <p className="text-lg leading-relaxed pl-6">
                  <strong>Realidad:</strong> ChatGPT es una herramienta de ayuda, no un reemplazo. Está diseñado para
                  asistirte, no para sustituir el contacto humano.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-destructive">❌ Mito: Es muy complicado de usar</h3>
                <p className="text-lg leading-relaxed pl-6">
                  <strong>Realidad:</strong> Es tan simple como escribir una pregunta. Si sabes enviar un mensaje de
                  texto, puedes usar ChatGPT.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-destructive">❌ Mito: Siempre tiene razón</h3>
                <p className="text-lg leading-relaxed pl-6">
                  <strong>Realidad:</strong> ChatGPT puede cometer errores. Es importante verificar información
                  importante con otras fuentes.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Interactive exercise placeholder */}
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Ejercicio práctico</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            Piensa en tres situaciones de tu vida diaria donde ChatGPT podría ayudarte. Por ejemplo:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg pl-4">
            <li>Escribir un mensaje de cumpleaños</li>
            <li>Buscar una receta de cocina</li>
            <li>Aprender sobre un tema que te interesa</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            (Aca la idea es  agregar un multiple choice para que el usuario vea si aprendio el contenido del modulo)
          </p>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t">
        <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
          <Link href="/">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>
        </Button>
        <Button asChild size="lg" className="text-base">
          <Link href="/modulo-2">
            Siguiente: Primeros Pasos
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
