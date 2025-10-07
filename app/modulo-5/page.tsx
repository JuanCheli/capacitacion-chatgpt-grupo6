"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { ArrowLeft, Video, Shield, AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react"
import { useState } from "react"

export default function Module5Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const questions = [
    {
      id: 1,
      question: "¿Cuál de estos datos NO debes compartir con ChatGPT?",
      options: [
        "El nombre de tu ciudad",
        "Tu contraseña de correo electrónico",
        "Preguntas sobre recetas de cocina",
        "Tu tema favorito de conversación"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "¿Por qué ChatGPT no es un reemplazo de profesionales como médicos o abogados?",
      options: [
        "Porque es muy lento para responder",
        "Porque solo habla en inglés",
        "Porque puede dar información general pero no diagnósticos ni asesoramiento profesional",
        "Porque no puede escribir textos largos"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "¿Qué debes hacer si ChatGPT te da información importante sobre salud o finanzas?",
      options: [
        "Confiar completamente sin verificar",
        "Verificar con fuentes oficiales o profesionales",
        "Compartir la información inmediatamente con todos",
        "Ignorar la información por completo"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "¿Cuál de estas afirmaciones sobre ChatGPT es correcta?",
      options: [
        "Siempre tiene razón y nunca se equivoca",
        "Puede hacer compras y enviar correos por ti",
        "Puede equivocarse y dar información incorrecta o desactualizada",
        "Tiene acceso a todas tus cuentas personales"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "¿Qué debes hacer al terminar de usar ChatGPT en una computadora compartida?",
      options: [
        "Dejar la sesión abierta para la próxima vez",
        "Cerrar sesión para proteger tu privacidad",
        "Compartir tu contraseña con otros usuarios",
        "Eliminar tu cuenta completamente"
      ],
      correctAnswer: 1
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
          <span>Módulo 5</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
          Módulo 5: Seguridad digital y buenas prácticas
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">Duración estimada: 20-30 minutos</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Video className="h-6 w-6 text-primary" />
            Video: Protege tu información
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-3 p-6">
              <Video className="h-16 w-16 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground text-lg">Video sobre seguridad y privacidad digital</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Alert className="border-destructive">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-base leading-relaxed">
            <strong>Importante:</strong> Tu seguridad es lo primero. Lee este módulo con atención para proteger tu
            información personal.
          </AlertDescription>
        </Alert>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Qué información NO debes compartir
          </h2>
          <Card className="border-destructive">
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed font-semibold">
                NUNCA compartas con ChatGPT (ni con ninguna herramienta online):
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Contraseñas</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      Nunca escribas tus contraseñas de correo, banco, redes sociales, etc.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Números de tarjetas de crédito o débito</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      Ni el número completo, ni el código de seguridad (CVV).
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Número de documento completo</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      Evita compartir tu DNI, pasaporte o número de seguro social completo.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Dirección exacta de tu casa</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      Puedes mencionar tu ciudad o barrio, pero no tu dirección completa.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Información médica sensible</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      Puedes hacer preguntas generales, pero no compartas historiales médicos detallados.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Reconocer límites y posibles errores de la IA</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <Alert>
                <Info className="h-5 w-5" />
                <AlertDescription className="text-base leading-relaxed">
                  ChatGPT es muy útil, pero no es perfecto. Es importante que sepas sus limitaciones.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    ChatGPT puede equivocarse
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    A veces da información incorrecta o desactualizada. Si algo es muy importante (salud, dinero,
                    trámites legales), verifica con fuentes oficiales o profesionales.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    No reemplaza a profesionales
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    ChatGPT no es un médico, abogado o contador. Puede darte información general, pero no diagnósticos
                    ni asesoramiento profesional.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    No tiene acceso a internet en tiempo real
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    No puede buscar noticias de hoy ni información actualizada al minuto. Su conocimiento tiene una
                    fecha límite.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    No puede hacer acciones por ti
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    No puede enviar correos, hacer llamadas, comprar cosas o realizar trámites en tu nombre.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Uso responsable y acompañado de otras fuentes</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">
                Para usar ChatGPT de forma segura y responsable, sigue estas recomendaciones:
              </p>

              <div className="space-y-4">
                <div className="bg-accent p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">✅ Verifica información importante</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Si ChatGPT te da información sobre salud, finanzas o trámites, confírmala con fuentes oficiales o
                    profesionales.
                  </p>
                </div>

                <div className="bg-accent p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">✅ Usa el sentido común</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Si algo suena demasiado bueno para ser verdad o te parece extraño, probablemente necesites
                    verificarlo.
                  </p>
                </div>

                <div className="bg-accent p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">✅ Pide ayuda cuando la necesites</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Si tienes dudas sobre si algo es seguro, pregunta a un familiar, amigo o usa nuestro canal de
                    soporte.
                  </p>
                </div>

                <div className="bg-accent p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">✅ Mantén tu contraseña segura</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Usa una contraseña fuerte para tu cuenta de ChatGPT y no la compartas con nadie.
                  </p>
                </div>

                <div className="bg-accent p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">✅ Cierra sesión en dispositivos compartidos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Si usas ChatGPT en una computadora que comparten varias personas, recuerda cerrar sesión cuando
                    termines.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Quiz Section */}
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Evaluación del Módulo 5</CardTitle>
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
                    ¡Excelente! Has comprendido perfectamente las buenas prácticas de seguridad. Estás listo para usar ChatGPT de forma segura.
                  </p>
                )}
                {score === 4 && (
                  <p className="text-base leading-relaxed">
                    ¡Muy bien! Has comprendido la mayoría del contenido sobre seguridad. Puedes comenzar a usar ChatGPT con confianza.
                  </p>
                )}
                {score === 3 && (
                  <p className="text-base leading-relaxed">
                    Bien hecho. Te recomendamos revisar el contenido del módulo para reforzar los conceptos de seguridad.
                  </p>
                )}
                {score < 3 && (
                  <p className="text-base leading-relaxed">
                    Te sugerimos revisar el contenido del módulo con atención, especialmente las secciones sobre seguridad y privacidad.
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

      <Card className="bg-accent border-primary">
        <CardHeader>
          <CardTitle className="text-xl">¡Felicitaciones!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            Has completado todos los módulos del manual. Ahora estás listo para usar ChatGPT de forma segura y efectiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/simulador">Practicar en el Simulador</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
              <Link href="/ayuda">Ver Recursos de Ayuda</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-start pt-8 border-t">
        <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
          <Link href="/modulo-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Módulo anterior
          </Link>
        </Button>
      </div>
    </div>
  )
}