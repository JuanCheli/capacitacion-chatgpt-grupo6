"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Video, Lightbulb, CheckCircle2, XCircle } from "lucide-react"
import { useState } from "react"

export default function Module3Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const questions = [
    {
      id: 1,
      question: "¿Qué es un 'prompt'?",
      options: [
        "Un tipo de computadora",
        "La pregunta o instrucción que le das a ChatGPT",
        "Una aplicación del celular",
        "Un código de programación"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "¿Cuál de estos es un ejemplo de un prompt CLARO y ESPECÍFICO?",
      options: [
        "Dime sobre comida",
        "Háblame de cosas",
        "¿Puedes darme una receta fácil de pollo al horno para 4 personas?",
        "Explícame todo"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "¿Por qué es importante ser específico en tus preguntas a ChatGPT?",
      options: [
        "Para que funcione más rápido",
        "Para obtener respuestas más útiles y precisas",
        "Porque es obligatorio",
        "Para gastar menos internet"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "¿Cuál es la forma correcta de pedir ayuda con un trámite?",
      options: [
        "Ayúdame",
        "Trámites",
        "Explícame paso a paso cómo renovar mi DNI",
        "Necesito información"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "¿Qué debes recordar al usar ChatGPT para temas de salud?",
      options: [
        "ChatGPT puede reemplazar completamente a tu médico",
        "Solo usar ChatGPT y no consultar profesionales",
        "Puede dar consejos generales, pero siempre consulta con tu médico para temas específicos",
        "No sirve para nada relacionado con salud"
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

      {/* Quiz Section */}
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Evaluación del Módulo 3</CardTitle>
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
                    ¡Excelente! Has comprendido perfectamente el arte del prompting. Estás listo para continuar.
                  </p>
                )}
                {score === 4 && (
                  <p className="text-base leading-relaxed">
                    ¡Muy bien! Tienes un buen entendimiento sobre cómo hacer preguntas efectivas. Puedes continuar al siguiente módulo.
                  </p>
                )}
                {score === 3 && (
                  <p className="text-base leading-relaxed">
                    Bien hecho. Te recomendamos revisar los ejemplos de prompts antes de continuar.
                  </p>
                )}
                {score < 3 && (
                  <p className="text-base leading-relaxed">
                    Te sugerimos revisar el contenido del módulo, especialmente la sección de preguntas claras vs. vagas.
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