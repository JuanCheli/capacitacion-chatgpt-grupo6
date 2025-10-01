import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Video, Lightbulb, CheckCircle2, XCircle } from "lucide-react"

export default function Module3Page() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 lg:py-12 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span>Módulo 3</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
          Módulo 3: El arte del prompting (uso eficiente)
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">Duración estimada: 40-60 minutos</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Video className="h-6 w-6 text-primary" />
            Video: Cómo hacer buenas preguntas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-3 p-6">
              <Video className="h-16 w-16 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground text-lg">Video tutorial sobre prompting efectivo</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            ¿Qué es un "prompt"?
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">
                Un <strong>prompt</strong> es simplemente la pregunta o instrucción que le das a ChatGPT. Es como cuando
                le pides algo a un amigo: mientras más claro seas, mejor te podrá ayudar.
              </p>
              <Alert>
                <Lightbulb className="h-5 w-5" />
                <AlertDescription className="text-base leading-relaxed">
                  <strong>Piénsalo así:</strong> Si le preguntas a alguien "¿Qué hago?", no sabrá cómo ayudarte. Pero si
                  dices "¿Cómo preparo un café?", la respuesta será mucho más útil.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Cómo formular preguntas claras y específicas</h2>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-destructive flex items-center gap-2">
                <XCircle className="h-6 w-6" />
                Preguntas poco claras
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-lg italic text-muted-foreground">"Dime sobre comida"</p>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed pl-4">
                  ❌ Demasiado vago. ChatGPT no sabe qué aspecto de la comida te interesa.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Preguntas claras y específicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-accent p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-lg italic">"¿Puedes darme una receta fácil de pollo al horno para 4 personas?"</p>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed pl-4">
                  ✅ Específico, claro y con detalles útiles (qué plato, para cuántas personas).
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Ejemplos prácticos para tu día a día</h2>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🍳 Pedir recetas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-base italic">"Dame una receta de sopa de verduras fácil y rápida"</p>
                </div>
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-base italic">"¿Cómo hago un postre con manzanas que no necesite horno?"</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📝 Ayuda con trámites</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-base italic">"Explícame paso a paso cómo renovar mi DNI"</p>
                </div>
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-base italic">"¿Qué documentos necesito para sacar un turno médico?"</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🧠 Juegos de memoria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-base italic">"Hazme 5 preguntas de trivia sobre historia argentina"</p>
                </div>
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-base italic">"Dame adivinanzas fáciles para entrenar mi mente"</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💊 Consejos de salud generales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-base italic">
                    "¿Qué ejercicios suaves puedo hacer en casa para mantenerme activo?"
                  </p>
                </div>
                <Alert className="mt-4">
                  <AlertDescription className="text-base leading-relaxed">
                    <strong>Importante:</strong> ChatGPT puede dar consejos generales, pero siempre consulta con tu
                    médico para temas de salud específicos.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Plantillas de prompts para copiar y usar</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed mb-4">
                Copia estas plantillas y reemplaza las partes entre [corchetes] con tu información:
              </p>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-base font-mono">"Explícame [tema] de forma simple, como si tuviera [edad] años"</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-base font-mono">
                    "Dame [número] ideas para [actividad] que pueda hacer en [lugar]"
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-base font-mono">"Ayúdame a escribir un mensaje de [ocasión] para [persona]"</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-base font-mono">
                    "¿Cuáles son los pasos para [tarea]? Explícalo de forma sencilla"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Practica tus prompts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            Ahora que conoces cómo hacer buenas preguntas, ve al simulador y prueba algunos de estos ejemplos.
          </p>
          <Button asChild size="lg" className="text-base">
            <Link href="/simulador">Practicar en el Simulador</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t">
        <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
          <Link href="/modulo-2">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Módulo anterior
          </Link>
        </Button>
        <Button asChild size="lg" className="text-base">
          <Link href="/modulo-4">
            Siguiente: Aplicaciones
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
