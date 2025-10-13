"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Video, Smartphone, Monitor, Tablet, Info, CheckCircle2, XCircle } from "lucide-react"
import { useState } from "react"

export default function Module2Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const questions = [
    {
      id: 1,
      question: "¿Desde qué dispositivos puedes acceder a ChatGPT?",
      options: [
        "Solo desde computadora",
        "Solo desde celular",
        "Desde celular, computadora y tablet",
        "Solo desde tablet"
      ],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "¿Qué necesitas para crear una cuenta en ChatGPT?",
      options: [
        "Solo tu nombre",
        "Un correo electrónico",
        "Tu número de teléfono únicamente",
        "Tu dirección física"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "¿Cuál es la dirección web para acceder a ChatGPT?",
      options: [
        "www.chatgpt.com",
        "www.openai.com",
        "chat.openai.com",
        "www.chat-gpt.com"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "¿Dónde escribes tus preguntas o mensajes en ChatGPT?",
      options: [
        "En el menú superior",
        "En una caja de texto grande",
        "En el historial de conversaciones",
        "En la barra lateral"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "¿Qué debes hacer después de registrarte en ChatGPT?",
      options: [
        "Descargar un programa especial",
        "Pagar una suscripción",
        "Verificar tu correo electrónico",
        "Llamar por teléfono"
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
            Video: Primeros pasos con ChatGPT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Io1bBA7vcpw"
              title="Video introductorio del módulo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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

      {/* Quiz Section */}
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Evaluación del Módulo 2</CardTitle>
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