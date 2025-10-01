"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, BookOpen, Lightbulb, MessageSquare, Shield, PlayCircle, HelpCircle, Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Módulo 1: Introducción", href: "/modulo-1", icon: BookOpen },
  { name: "Módulo 2: Primeros Pasos", href: "/modulo-2", icon: Lightbulb },
  { name: "Módulo 3: El Prompting", href: "/modulo-3", icon: MessageSquare },
  { name: "Módulo 4: Aplicaciones", href: "/modulo-4", icon: PlayCircle },
  { name: "Módulo 5: Seguridad", href: "/modulo-5", icon: Shield },
  { name: "Simulador", href: "/simulador", icon: PlayCircle },
  { name: "Ayuda", href: "/ayuda", icon: HelpCircle },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-sidebar-foreground">Aprende ChatGPT</h1>
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Abrir menú">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Sidebar navigation */}
      <nav
        className={cn(
          "w-full lg:w-72 bg-sidebar border-r border-sidebar-border lg:sticky lg:top-0 lg:h-screen overflow-y-auto",
          "fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out lg:transform-none",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "pt-20 lg:pt-0",
        )}
      >
        <div className="p-6 space-y-8">
          {/* Logo/Title */}
          <div className="hidden lg:block">
            <h1 className="text-2xl font-bold text-sidebar-foreground text-balance">Aprende ChatGPT</h1>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Manual interactivo para adultos mayores
            </p>
          </div>

          {/* Navigation links */}
          <div className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-base font-medium",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
                    isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground",
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="leading-relaxed">{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Accessibility controls */}
          <div className="pt-6 border-t border-sidebar-border">
            <p className="text-sm font-medium text-sidebar-foreground mb-3">Accesibilidad</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="leading-relaxed">• Usa Tab para navegar</p>
              <p className="leading-relaxed">• Presiona Enter para seleccionar</p>
              <p className="leading-relaxed">• Aumenta el zoom del navegador si necesitas</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
    </>
  )
}
