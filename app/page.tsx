"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Clock, Users, Sparkles, ClipboardList, ExternalLink } from "lucide-react";
import PodcastPlayer from "@/components/podcast-player";

export default function HomePage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8 lg:py-12 space-y-12">
      {/* Hero section */}
      <section className="text-center space-y-6 py-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
          Bienvenido a tu Manual de ChatGPT
        </h1>
        <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          Aprende a usar ChatGPT paso a paso, a tu propio ritmo, con ejemplos
          prácticos y ejercicios interactivos.
        </p>
      </section>

      {/* Course Info Cards */}
      <section className="grid md:grid-cols-3 gap-4 md:gap-6">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary flex-shrink-0" />
              <span>Objetivos del Curso</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
              <li>• Comprender qué es la IA y ChatGPT</li>
              <li>• Crear y usar tu cuenta de forma segura</li>
              <li>• Hacer preguntas efectivas</li>
              <li>• Aplicar ChatGPT en tu vida diaria</li>
              <li>• Proteger tu información personal</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl flex items-center gap-2">
              <Users className="h-6 w-6 text-primary flex-shrink-0" />
              <span>¿A quién está dirigido?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
              <li>• Adultos mayores de 60 años</li>
              <li>• Personas con poca experiencia digital</li>
              <li>• Cualquiera que quiera aprender sobre IA</li>
              <li>• Usuarios que buscan herramientas útiles</li>
              <li>• Personas curiosas por la tecnología</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary flex-shrink-0" />
              <span>Conocimientos Previos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-base md:text-lg font-semibold text-foreground">
                ¡No se requieren!
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Este curso está diseñado para que cualquier persona pueda aprender, sin importar su experiencia con la tecnología. Te guiaremos en cada paso.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Clock className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">A tu ritmo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Aprende cuando quieras, sin presiones. Puedes volver a ver los
              videos y leer las guías las veces que necesites.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Sparkles className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">Práctica segura</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Usa nuestro simulador para practicar sin miedo a equivocarte. Es
              un espacio seguro para experimentar.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">Soporte disponible</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Si tienes dudas, pregunta a nuestro asistente o contacta con
              nuestro equipo de soporte.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Buttons */}
      <section className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6">
          <Link href="/modulo-1">Comenzar Ahora</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent"
        >
          <Link href="/simulador">Probar Simulador</Link>
        </Button>
      </section>

      {/* Modules overview */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-foreground">
            Los 5 Módulos de Aprendizaje
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada módulo dura entre 20 y 60 minutos. Completa todos para dominar
            ChatGPT.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Module 0 - Diagnostic Survey */}
          <Card className="hover:shadow-lg transition-shadow border-2 border-primary/50 bg-primary/5">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  0
                </div>
                <div className="flex-1 space-y-2">
                  <CardTitle className="text-xl lg:text-2xl text-balance">
                    Encuesta Diagnóstica (Opcional)
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Antes de comenzar, ayúdanos a conocer tu nivel de experiencia con la tecnología. Esta breve encuesta nos permitirá personalizar tu experiencia de aprendizaje.
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Clock className="h-4 w-4" />
                    <span>5-10 min</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="w-full text-base py-5"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSffRHXRv2qBvZnWhp6qi5VfMdhHmZw9QD9i7qeT_Sx2fkmsmg/viewform" target="_blank" rel="noopener noreferrer">
                  <ClipboardList className="h-5 w-5 mr-2" />
                  Completar Encuesta
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <ModuleCard
            number={1}
            title="Introducción al mundo digital y la IA"
            description="Descubre qué es ChatGPT, cómo funciona y cómo puede ayudarte en tu día a día."
            duration="20-30 min"
            href="/modulo-1"
          />

          <ModuleCard
            number={2}
            title="Primeros pasos con ChatGPT"
            description="Aprende a acceder desde tu dispositivo, crear una cuenta y navegar por la interfaz."
            duration="40-60 min"
            href="/modulo-2"
          />

          <ModuleCard
            number={3}
            title="El arte del prompting"
            description="Descubre cómo hacer preguntas claras para obtener las mejores respuestas."
            duration="40-60 min"
            href="/modulo-3"
          />

          <ModuleCard
            number={4}
            title="Aplicaciones prácticas para la vida cotidiana"
            description="Usa ChatGPT para escribir mensajes, organizar tareas, aprender cosas nuevas y entretenerte."
            duration="40-60 min"
            href="/modulo-4"
          />

          <ModuleCard
            number={5}
            title="Seguridad digital y buenas prácticas"
            description="Aprende a proteger tu información personal y usar ChatGPT de forma responsable."
            duration="20-30 min"
            href="/modulo-5"
          />
        </div>
      </section>

      {/* Podcast section */}
      <PodcastPlayer />

      {/* CTA section */}
      <section className="bg-primary-light rounded-2xl p-8 lg:p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold text-accent-foreground">
          ¿Listo para empezar?
        </h2>
        <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto leading-relaxed">
          No necesitas experiencia previa. Te guiaremos paso a paso en cada
          módulo.
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <Link href="/modulo-1">Ir al Módulo 1</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted/30 pt-8 mt-12">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <p className="text-base font-semibold text-foreground">
              Grupo 6 — Comunicación Multimedial 4K4
            </p>
            <p className="text-sm text-muted-foreground">
              Integrantes: Juan Cheli, Juan Mateo Simes, Ignacio Dilewski, Pedro Galera, Jeronimo Osuna
            </p>
          </div>
          <div className="text-xs text-muted-foreground pt-2">
            <p>© {new Date().getFullYear()} Grupo 6 — Proyecto de capacitación ChatGPT</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ModuleCard({
  number,
  title,
  description,
  duration,
  href,
}: {
  number: number;
  title: string;
  description: string;
  duration: string;
  href: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
            {number}
          </div>
          <div className="flex-1 space-y-2">
            <CardTitle className="text-xl lg:text-2xl text-balance">
              {title}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {description}
            </CardDescription>
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          asChild
          variant="outline"
          className="w-full text-base py-5 bg-transparent"
        >
          <Link href={href}>
            <BookOpen className="h-5 w-5 mr-2" />
            Comenzar Módulo
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
