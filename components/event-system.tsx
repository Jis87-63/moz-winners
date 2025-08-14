"use client"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Plane, Zap, Navigation } from "lucide-react"

const events = [
  {
    name: "Aviator",
    icon: Plane,
    description: "O jogo continuará a pagar multiplicadores altos durante este evento especial",
    province: "Maputo",
  },
  {
    name: "JetX",
    icon: Zap,
    description: "O jogo continuará a pagar prêmios exclusivos durante este torneio",
    province: "Beira",
  },
  {
    name: "Navigator",
    icon: Navigation,
    description: "O jogo continuará a pagar apostas especiais durante este desafio",
    province: "Nampula",
  },
]

const playerSuggestions = [
  { name: "Carlos M.", province: "Maputo", amount: "15,000 MT" },
  { name: "Ana S.", province: "Beira", amount: "8,500 MT" },
  { name: "João P.", province: "Nampula", amount: "12,300 MT" },
  { name: "Maria L.", province: "Matola", amount: "6,800 MT" },
]

export function EventSystem() {
  const [currentEvent, setCurrentEvent] = useState(events[0])
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 30, seconds: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          const nextEventIndex = (events.indexOf(currentEvent) + 1) % events.length
          setCurrentEvent(events[nextEventIndex])
          return { hours: 2, minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentEvent])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  return (
    <section id="events" className="py-8 px-3">
      <div className="container mx-auto text-center max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-2">⚡ Eventos Especiais</h2>
        <p className="text-sm text-gray-300 mb-6">Eventos únicos a cada 2 horas!</p>

        <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-white/20 p-4 backdrop-blur-sm mb-4">
          <div className="flex items-center justify-center mb-4">
            <currentEvent.icon className="w-8 h-8 text-yellow-400 mr-2" />
            <div className="text-left">
              <h3 className="text-lg font-bold text-white">Evento {currentEvent.name}</h3>
              <p className="text-xs text-gray-300">{currentEvent.description}</p>
            </div>
          </div>

          <div className="flex items-center justify-center mb-4">
            <Clock className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-white text-sm">Próximo evento em:</span>
          </div>

          <div className="flex justify-center space-x-2 mb-4">
            <div className="bg-black/50 rounded-lg p-2 min-w-[50px]">
              <div className="text-xl font-bold text-yellow-400">{formatTime(timeLeft.hours)}</div>
              <div className="text-xs text-gray-300">H</div>
            </div>
            <div className="bg-black/50 rounded-lg p-2 min-w-[50px]">
              <div className="text-xl font-bold text-yellow-400">{formatTime(timeLeft.minutes)}</div>
              <div className="text-xs text-gray-300">M</div>
            </div>
            <div className="bg-black/50 rounded-lg p-2 min-w-[50px]">
              <div className="text-xl font-bold text-yellow-400">{formatTime(timeLeft.seconds)}</div>
              <div className="text-xs text-gray-300">S</div>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold mb-3"
            onClick={() => window.open("https://media1.placard.co.mz/redirect.aspx?pid=4482&bid=1514", "_blank")}
          >
            🎯 Aproveitar Agora!
          </Button>

          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm px-4 py-1">
            Ativo: {currentEvent.name} - {currentEvent.province}
          </Badge>
        </Card>

        <Card className="bg-black/30 border-white/20 p-4 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-white mb-3">🏆 Ganhos Recentes</h4>
          <div className="space-y-2">
            {playerSuggestions.map((player, index) => (
              <div key={index} className="flex justify-between items-center bg-black/20 rounded-lg p-2">
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">{player.name}</div>
                  <div className="text-gray-400 text-xs">{player.province}</div>
                </div>
                <div className="text-yellow-400 font-bold text-sm">{player.amount}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
