"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Video, BookOpen, CheckCircle2, Lightbulb, XCircle } from "lucide-react"
import { useState } from "react"

export default function Module1Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const questions = [
    {
      id: 1,
      question: "¿Qué es ChatGPT?",
      options: [
        "Un programa de televisión",
        "Un asistente virtual inteligente que puede conversar y ayudarte con tareas",
        "Un juego de computadora",
        "Una red social",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "¿Cuál de estas es una ventaja de usar ChatGPT?",
      options: [
        "Solo funciona de día",
        "Necesitas pagar cada vez que lo usas",
        "Está disponible las 24 horas del día",
        "Solo responde preguntas sobre tecnología",
      ],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "¿Es verdad que ChatGPT siempre tiene razón?",
      options: [
        "Sí, nunca se equivoca",
        "No, puede cometer errores y es importante verificar información importante",
        "Solo tiene razón los fines de semana",
        "Depende del clima",
      ],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "¿Para qué puedes usar ChatGPT en tu vida diaria?",
      options: [
        "Solo para jugar videojuegos",
        "Para escribir mensajes, buscar recetas y aprender cosas nuevas",
        "Para hacer llamadas telefónicas",
        "Para ver películas",
      ],
      correctAnswer: 1,
    },
    {
      id: 5,
      question: "¿Es cierto que ChatGPT es muy complicado de usar?",
      options: [
        "Sí, necesitas ser ingeniero",
        "Sí, solo los jóvenes pueden usarlo",
        "No, es tan simple como escribir una pregunta",
        "Sí, necesitas estudiar por años",
      ],
      correctAnswer: 2,
    },
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
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GOkDK_-fj1k"
              title="Video introductorio del módulo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
          <CardTitle className="text-xl">Evaluación del Módulo 1</CardTitle>
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
