"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { Send, RotateCcw, Lightbulb, ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function SimulatorPage() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const formatMarkdown = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold text
      const boldRegex = /\*\*(.*?)\*\*/g
      let parts: (string | JSX.Element)[] = []
      let lastIndex = 0
      let match
      
      while ((match = boldRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index))
        }
        parts.push(<strong key={`bold-${i}-${match.index}`}>{match[1]}</strong>)
        lastIndex = match.index + match[0].length
      }
      
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex))
      }
      
      if (parts.length === 0) parts = [line]
      
      return (
        <span key={i} className="block mb-2">
          {parts}
        </span>
      )
    })
  }

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    const currentInput = input
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch('https://capacitaci-n-chatgpt-grupo6-backend.onrender.com/simulador/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: currentInput
        })
      })

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor')
      }

      const data = await response.json()
      
      const assistantMessage = {
        role: "assistant" as const,
        content: data.reply || "Lo siento, no pude generar una respuesta.",
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error al enviar mensaje:', error)
      const errorMessage = {
        role: "assistant" as const,
        content: "Lo siento, hubo un error al procesar tu pregunta. Por favor, intenta nuevamente.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([])
    setInput("")
  }

  const examplePrompts = [
    "¿Cómo preparo un té de manzanilla?",
    "Dame una receta fácil de pollo al horno",
    "Ayúdame a escribir un mensaje de cumpleaños para mi nieto",
    "¿Qué ejercicios suaves puedo hacer en casa?",
    "Cuéntame un chiste limpio y gracioso",
  ]

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 lg:py-12 space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span>Simulador</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Simulador de ChatGPT</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Practica aquí de forma segura. Puedes probar todas las preguntas que quieras sin miedo a equivocarte.
        </p>
      </div>

      <Alert>
        <Lightbulb className="h-5 w-5" />
        <AlertDescription className="text-base leading-relaxed">
          <strong>Consejo:</strong> Este es un espacio de práctica. Experimenta con diferentes formas de hacer preguntas
          y observa cómo cambian las respuestas.
        </AlertDescription>
      </Alert>

      {/* Example prompts */}
      {messages.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Ejemplos para empezar</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Haz clic en cualquiera de estos ejemplos para probarlos:
            </p>
            <div className="space-y-2">
              {examplePrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-4 text-base bg-transparent"
                  onClick={() => setInput(prompt)}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chat interface */}
      <Card className="min-h-[400px]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Conversación</CardTitle>
          {messages.length > 0 && (
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reiniciar
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">Escribe tu primera pregunta abajo para comenzar</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    message.role === "user" ? "bg-primary text-primary-foreground ml-8" : "bg-muted mr-8"
                  }`}
                >
                  <div className="text-base leading-relaxed whitespace-pre-wrap">
                    {message.role === "assistant" ? formatMarkdown(message.content) : message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="bg-muted p-4 rounded-lg mr-8">
                  <p className="text-base text-muted-foreground">Escribiendo respuesta...</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Input area */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Textarea
              placeholder="Escribe tu pregunta aquí... Por ejemplo: ¿Cómo preparo un té de manzanilla?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
              className="min-h-[120px] text-lg resize-none"
            />
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
              <p className="text-sm text-muted-foreground">
                Presiona Enter para enviar, o Shift + Enter para nueva línea
              </p>
              <Button
                size="lg"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="text-base w-full sm:w-auto"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar pregunta
              </Button>
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
