"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Video, Mail, Calendar, BookOpen, Smile, CheckCircle2, XCircle } from "lucide-react"
import { useState } from "react"

export default function Module4Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const questions = [
    {
      id: 1,
      question: "¿Para qué puedes usar ChatGPT en redacción de mensajes?",
      options: [
        "Solo para mensajes de negocios",
        "Para escribir mensajes claros y bien redactados para cualquier ocasión",
        "Únicamente para correos formales",
        "Solo para mensajes cortos"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "¿Qué puede hacer ChatGPT para ayudarte con la organización de actividades?",
      options: [
        "Solo puede crear listas de compras",
        "Únicamente puede recordar fechas importantes",
        "Puede crear listas, planificar tu semana y recordar tareas importantes",
        "Solo puede organizar eventos sociales"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "¿Sobre qué temas puedes aprender con ChatGPT?",
      options: [
        "Solo sobre tecnología",
        "Únicamente sobre historia",
        "Cualquier tema de forma simple y clara",
        "Solo sobre temas educativos formales"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "¿Qué tipo de entretenimiento puede ofrecerte ChatGPT?",
      options: [
        "Solo chistes",
        "Chistes, historias, juegos de palabras y ejercicios mentales",
        "Únicamente historias largas",
        "Solo adivinanzas"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "¿Cuál de estas NO es una aplicación práctica mencionada en el módulo?",
      options: [
        "Redactar mensajes de cumpleaños",
        "Organizar la semana con recordatorios",
        "Hacer videollamadas con familiares",
        "Aprender sobre historia o tecnología"
      ],
      correctAnswer: 2
    }
  ]

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    if (!quizSubmitted) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: answerIndex,
      }))
    }
  }

  const handleSubmitQuiz = () => {
    if (Object.keys(selectedAnswers).length === questions.length) {
      setQuizSubmitted(true)
      setShowResults(true)
    }
  }

  const handleRetryQuiz = () => {
    setSelectedAnswers({})
    setQuizSubmitted(false)
    setShowResults(false)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const score = showResults ? calculateScore() : 0
  const allAnswered = Object.keys(selectedAnswers).length === questions.length

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

      {/* Video placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Video className="h-6 w-6 text-primary" />
            Video: Aplicaciones prácticas para la vida cotidiana
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ET-avaDoAP8"
              title="Video introductorio del módulo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>

      {/* Presentation section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="h-6 w-6 text-primary" />
            Presentación del módulo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://docs.google.com/presentation/d/1txuhb7hwspGIMI8jyE2h7cui1XR1Rn689KIBeVcH13s/embed?start=false&loop=false&delayms=3000"
              title="Presentación del módulo"
              allowFullScreen
            />
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

      {/* Quiz Section */}
      <Card className="bg-primary-light">
        <CardHeader>
          <CardTitle className="text-xl">Evaluación del Módulo 4</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            Responde estas preguntas para verificar que has comprendido el contenido del módulo:
          </p>

          {questions.map((question, qIndex) => (
            <div key={question.id} className="space-y-3">
              <h3 className="text-lg font-semibold">
                {qIndex + 1}. {question.question}
              </h3>
              <div className="space-y-2">
                {question.options.map((option, optIndex) => {
                  const isSelected = selectedAnswers[question.id] === optIndex
                  const isCorrect = optIndex === question.correctAnswer
                  const showCorrectAnswer = quizSubmitted && isCorrect
                  const showIncorrectAnswer = quizSubmitted && isSelected && !isCorrect

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleAnswerSelect(question.id, optIndex)}
                      disabled={quizSubmitted}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all text-base lg:text-lg ${
                        showCorrectAnswer
                          ? "border-green-500 bg-green-50 dark:bg-green-950"
                          : showIncorrectAnswer
                            ? "border-red-500 bg-red-50 dark:bg-red-950"
                            : isSelected
                              ? "border-primary bg-primary/10"
                              : "border-border bg-card hover:border-primary/50"
                      } ${quizSubmitted ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            showCorrectAnswer
                              ? "border-green-500 bg-green-500"
                              : showIncorrectAnswer
                                ? "border-red-500 bg-red-500"
                                : isSelected
                                  ? "border-primary bg-primary"
                                  : "border-muted-foreground"
                          }`}
                        >
                          {showCorrectAnswer && <CheckCircle2 className="h-4 w-4 text-white" />}
                          {showIncorrectAnswer && <XCircle className="h-4 w-4 text-white" />}
                          {isSelected && !quizSubmitted && <div className="w-3 h-3 rounded-full bg-white" />}
                        </div>
                        <span className="leading-relaxed">{option}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}

          {!quizSubmitted && (
            <Button onClick={handleSubmitQuiz} disabled={!allAnswered} size="lg" className="w-full text-lg">
              {allAnswered
                ? "Enviar respuestas"
                : `Responde todas las preguntas (${Object.keys(selectedAnswers).length}/${questions.length})`}
            </Button>
          )}

          {showResults && (
            <Alert className={score >= 4 ? "border-green-500" : score >= 3 ? "border-yellow-500" : "border-red-500"}>
              <AlertDescription className="space-y-3">
                <p className="text-lg font-semibold">
                  Tu puntuación: {score} de {questions.length} respuestas correctas
                </p>
                {score === 5 && (
                  <p className="text-base leading-relaxed">
                    ¡Excelente! Has comprendido perfectamente el contenido del módulo. Estás listo para continuar.
                  </p>
                )}
                {score === 4 && (
                  <p className="text-base leading-relaxed">
                    ¡Muy bien! Has comprendido la mayoría del contenido. Puedes continuar al siguiente módulo.
                  </p>
                )}
                {score === 3 && (
                  <p className="text-base leading-relaxed">
                    Bien hecho. Te recomendamos revisar el contenido del módulo antes de continuar.
                  </p>
                )}
                {score < 3 && (
                  <p className="text-base leading-relaxed">
                    Te sugerimos revisar el contenido del módulo y volver a intentar el cuestionario.
                  </p>
                )}
                <Button
                  onClick={handleRetryQuiz}
                  variant="outline"
                  size="lg"
                  className="w-full text-base bg-transparent"
                >
                  Intentar de nuevo
                </Button>
              </AlertDescription>
            </Alert>
          )}
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