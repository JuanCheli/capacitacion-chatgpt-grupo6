import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Video, Mail, Calendar, BookOpen, Smile } from "lucide-react"

export default function Module4Page() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 lg:py-12 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span>Módulo 4</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
          Módulo 4: Aplicaciones prácticas para la vida cotidiana
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">Duración estimada: 40-60 minutos</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Video className="h-6 w-6 text-primary" />
            Video: Casos de uso reales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-3 p-6">
              <Video className="h-16 w-16 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground text-lg">Video con ejemplos prácticos de uso diario</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            Redacción de mensajes y correos
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">
                ChatGPT puede ayudarte a escribir mensajes claros y bien redactados para cualquier ocasión.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Ejemplo 1: Mensaje de cumpleaños</h3>
                  <div className="bg-muted p-4 rounded-lg mb-2">
                    <p className="text-base italic">
                      "Ayúdame a escribir un mensaje de cumpleaños cariñoso para mi nieta que cumple 15 años"
                    </p>
                  </div>
                  <div className="bg-accent p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-base leading-relaxed">
                      <strong>Respuesta de ChatGPT:</strong>
                      <br />
                      "Querida [nombre], en este día tan especial quiero desearte un feliz cumpleaños. Ver cómo has
                      crecido y te has convertido en una joven maravillosa llena mi corazón de orgullo y alegría. Que
                      este nuevo año de vida esté lleno de sueños cumplidos, risas y momentos inolvidables. Te quiero
                      mucho. ¡Felices 15!"
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Ejemplo 2: Correo formal</h3>
                  <div className="bg-muted p-4 rounded-lg mb-2">
                    <p className="text-base italic">
                      "Necesito escribir un correo para pedir un turno médico. Hazlo formal pero amable"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Recordatorios y organización de actividades
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">
                Usa ChatGPT para crear listas, planificar tu semana o recordar tareas importantes.
              </p>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-base italic mb-3">
                    "Ayúdame a organizar mi semana. Tengo que: ir al médico el martes, comprar medicamentos, llamar a mi
                    hijo el jueves, y regar las plantas cada dos días"
                  </p>
                </div>

                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-base font-semibold mb-2">ChatGPT te puede crear:</p>
                  <ul className="space-y-2 text-base">
                    <li>✅ Una lista organizada por días</li>
                    <li>✅ Recordatorios con horarios sugeridos</li>
                    <li>✅ Consejos para no olvidar nada</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Educación continua: aprender cosas nuevas
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">
                Nunca es tarde para aprender. ChatGPT puede explicarte cualquier tema de forma simple y clara.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Historia</p>
                  <p className="text-sm italic">"Cuéntame sobre la historia de mi ciudad de forma breve"</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Tecnología</p>
                  <p className="text-sm italic">"¿Qué es el WiFi y cómo funciona? Explícalo simple"</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Naturaleza</p>
                  <p className="text-sm italic">"¿Por qué cambian de color las hojas en otoño?"</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Idiomas</p>
                  <p className="text-sm italic">"Enséñame 10 frases básicas en inglés para viajar"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Smile className="h-6 w-6 text-primary" />
            Entretenimiento: chistes, historias y juegos
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">
                ChatGPT también puede ser tu compañía para momentos de diversión y entretenimiento.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Chistes y humor</h3>
                  <div className="bg-accent p-4 rounded-lg">
                    <p className="text-base italic">"Cuéntame un chiste limpio y gracioso"</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Historias</h3>
                  <div className="bg-accent p-4 rounded-lg">
                    <p className="text-base italic">
                      "Escribe una historia corta sobre un abuelo que aprende a usar tecnología"
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Juegos de palabras</h3>
                  <div className="bg-accent p-4 rounded-lg">
                    <p className="text-base italic">"Juguemos a las adivinanzas. Dame una fácil"</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Ejercicios mentales</h3>
                  <div className="bg-accent p-4 rounded-lg">
                    <p className="text-base italic">"Dame 5 acertijos para mantener mi mente activa"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Prueba estas aplicaciones</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            Ahora que conoces todas estas aplicaciones prácticas, ve al simulador y prueba algunas de estas ideas.
          </p>
          <Button asChild size="lg" className="text-base">
            <Link href="/simulador">Practicar Ahora</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t">
        <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
          <Link href="/modulo-3">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Módulo anterior
          </Link>
        </Button>
        <Button asChild size="lg" className="text-base">
          <Link href="/modulo-5">
            Siguiente: Seguridad
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
