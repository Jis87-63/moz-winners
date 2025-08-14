"use client"

import { Button } from "@/components/ui/button"
import { Trophy, Gift, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black/30 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-2 rounded-xl shadow-lg">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              CasinoWin MZ
            </span>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            <Menu className="h-5 w-5" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="/roleta" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
              Roleta
            </a>
            <a href="#events" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
              Eventos
            </a>
            <a href="/estrategias" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
              Estratégias
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-green-500/20 border border-green-400/30 px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-medium">Online</span>
            </div>
            <Button
              onClick={() => window.open("https://media1.placard.co.mz/redirect.aspx?pid=4482&bid=1514", "_blank")}
              size="sm"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-xs px-3 py-1 h-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Gift className="h-3 w-3 mr-1" />
              Registre-se
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-white/10">
            <nav className="flex flex-col space-y-2 pt-3">
              <a href="/roleta" className="text-white/80 hover:text-yellow-400 transition-colors text-sm py-1">
                Roleta de Prêmios
              </a>
              <a href="#events" className="text-white/80 hover:text-yellow-400 transition-colors text-sm py-1">
                Eventos Ativos
              </a>
              <a href="/estrategias" className="text-white/80 hover:text-yellow-400 transition-colors text-sm py-1">
                Estratégias
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
