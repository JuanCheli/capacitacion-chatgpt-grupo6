import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Video, Smartphone, Monitor, Tablet, Info } from "lucide-react"

export default function Module2Page() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 lg:py-12 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span>Módulo 2</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
          Módulo 2: Primeros pasos con ChatGPT
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">Duración estimada: 40-60 minutos</p>
      </div>

      {/* Video placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Video className="h-6 w-6 text-primary" />
            Video tutorial paso a paso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-3 p-6">
              <Video className="h-16 w-16 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground text-lg">Video: Cómo acceder a ChatGPT desde tu dispositivo</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Acceso desde distintos dispositivos</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Celular</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Descarga la aplicación desde la tienda de tu teléfono o usa el navegador web.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Monitor className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Computadora</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Abre tu navegador favorito y visita chat.openai.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Tablet className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Tablet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Funciona igual que en el celular, con pantalla más grande.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Creación de una cuenta</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <Alert>
                <Info className="h-5 w-5" />
                <AlertDescription className="text-base leading-relaxed">
                  Necesitarás un correo electrónico para crear tu cuenta. Si no tienes uno, pide ayuda a un familiar.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Ve a chat.openai.com</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Escribe esta dirección en tu navegador o búscala en Google.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Haz clic en "Sign up" (Registrarse)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Encontrarás este botón en la página principal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Ingresa tu correo electrónico</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Escribe tu dirección de correo y crea una contraseña segura.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Verifica tu correo</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Revisa tu bandeja de entrada y haz clic en el enlace de verificación.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Navegación básica de la interfaz</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">Una vez que inicies sesión, verás una pantalla simple con:</p>
              <ul className="space-y-3 pl-4">
                <li className="text-lg leading-relaxed">
                  <strong>Una caja de texto grande:</strong> Aquí es donde escribes tus preguntas o mensajes.
                </li>
                <li className="text-lg leading-relaxed">
                  <strong>Un botón de enviar:</strong> Haz clic aquí después de escribir tu mensaje.
                </li>
                <li className="text-lg leading-relaxed">
                  <strong>Historial de conversaciones:</strong> En el lado izquierdo verás tus conversaciones
                  anteriores.
                </li>
              </ul>

              <div className="bg-muted p-6 rounded-lg mt-6">
                <p className="text-lg font-semibold mb-3">Ejemplo de primera pregunta:</p>
                <div className="bg-background p-4 rounded border-l-4 border-primary">
                  <p className="text-lg italic">"Hola, ¿puedes explicarme cómo funcionas?"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Practice section */}
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Practica ahora</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            ¿Ya tienes tu cuenta creada? Prueba el simulador para practicar sin presión.
          </p>
          <Button asChild size="lg" className="text-base">
            <Link href="/simulador">Ir al Simulador</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t">
        <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
          <Link href="/modulo-1">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Módulo anterior
          </Link>
        </Button>
        <Button asChild size="lg" className="text-base">
          <Link href="/modulo-3">
            Siguiente: El Prompting
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
