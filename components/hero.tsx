"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Award, Clock, Zap, Gift } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [stats, setStats] = useState({
    totalGanho: 2800000,
    jogadoresOnline: 1247,
    premiosEntregues: 15234,
  })

  // Simular stats em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        totalGanho: prev.totalGanho + Math.floor(Math.random() * 5000),
        jogadoresOnline: prev.jogadoresOnline + Math.floor(Math.random() * 3) - 1,
        premiosEntregues: prev.premiosEntregues + Math.floor(Math.random() * 2),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="py-6 px-3 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-16 h-16 bg-orange-500 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center max-w-sm relative z-10">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-3 py-1 mb-4">
            <Zap className="h-3 w-3 text-yellow-400" />
            <span className="text-xs text-yellow-400 font-medium">Evento Ativo Agora!</span>
          </div>

          <h1 className="text-2xl font-bold text-white mb-3 leading-tight">
            Ganhe até{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse">
              300% de Bônus
            </span>
          </h1>
          <p className="text-xs text-white/80 mb-5 leading-relaxed">
            Registre-se nos melhores cassinos de Moçambique e ganhe prêmios incríveis!
            <span className="text-yellow-400 font-medium"> Eventos especiais a cada 2 horas.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-5">
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm border-green-400/30 p-3 hover:scale-105 transition-transform duration-300">
            <TrendingUp className="h-4 w-4 text-green-400 mx-auto mb-1" />
            <div className="text-base font-bold text-white">{(stats.totalGanho / 1000000).toFixed(1)}M MT</div>
            <div className="text-xs text-green-400/80">Total Ganho Hoje</div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm border-blue-400/30 p-3 hover:scale-105 transition-transform duration-300">
            <Users className="h-4 w-4 text-blue-400 mx-auto mb-1" />
            <div className="text-base font-bold text-white">{stats.jogadoresOnline.toLocaleString()}</div>
            <div className="text-xs text-blue-400/80">Jogadores Online</div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-sm border-yellow-400/30 p-3 hover:scale-105 transition-transform duration-300">
            <Award className="h-4 w-4 text-yellow-400 mx-auto mb-1" />
            <div className="text-base font-bold text-white">{stats.premiosEntregues.toLocaleString()}</div>
            <div className="text-xs text-yellow-400/80">Prêmios Entregues</div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm border-purple-400/30 p-3 hover:scale-105 transition-transform duration-300">
            <Clock className="h-4 w-4 text-purple-400 mx-auto mb-1" />
            <div className="text-base font-bold text-white">24/7</div>
            <div className="text-xs text-purple-400/80">Suporte Ativo</div>
          </Card>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => window.open("https://media1.placard.co.mz/redirect.aspx?pid=4482&bid=1514", "_blank")}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-sm py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Gift className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />🎰 Placard - Bônus até 200%
          </Button>

          <Button
            onClick={() => window.open("https://www.megagamelive.com/affiliates/?btag=2084979", "_blank")}
            variant="outline"
            className="w-full border-2 border-orange-400/50 text-white hover:bg-orange-500/20 text-sm py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 hover:border-orange-400 transition-all duration-300 group"
          >
            <Zap className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />🎮 MegaGameLive - Bônus até 300%
          </Button>
        </div>

        <div className="mt-4 text-xs text-white/60">
          ⭐ Mais de <span className="text-yellow-400 font-medium">50.000 jogadores</span> confiam em nós
        </div>
      </div>
    </section>
  )
}
