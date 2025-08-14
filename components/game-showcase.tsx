"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Navigation, Plane } from "lucide-react"

const games = [
  {
    name: "Aviator",
    icon: Plane,
    description: "O jogo do aviãozinho que está conquistando Moçambique. Multiplique seus ganhos antes do avião voar!",
    multiplier: "x1000",
    players: "15K+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "JetX",
    icon: Zap,
    description: "Decole com o foguete e multiplique seus ganhos. Retire antes da explosão!",
    multiplier: "x2000",
    players: "8K+",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Navigator",
    icon: Navigation,
    description: "Navegue pelos mares e encontre tesouros incríveis. Quanto mais longe, maior o prêmio!",
    multiplier: "x500",
    players: "5K+",
    color: "from-green-500 to-teal-500",
  },
]

export function GameShowcase() {
  return (
    <section id="games" className="py-8 px-3">
      <div className="container mx-auto max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">🎮 Jogos em Destaque</h2>
          <p className="text-sm text-gray-300">Os jogos mais populares em Moçambique</p>
        </div>

        <div className="space-y-4">
          {games.map((game, index) => (
            <Card key={game.name} className="bg-black/30 border-white/20 backdrop-blur-sm p-4">
              <div className="flex items-start mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${game.color} mr-3`}>
                  <game.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{game.name}</h3>
                  <Badge className="bg-black/70 text-white text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {game.players} jogadores
                  </Badge>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-3">{game.description}</p>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400">Multiplicador máximo</span>
                  <div className="text-lg font-bold text-yellow-400">{game.multiplier}</div>
                </div>
                <Badge
                  className={`bg-gradient-to-r ${game.color} text-white px-3 py-1 cursor-pointer hover:scale-105 transition-transform text-xs`}
                  onClick={() => window.open("https://media1.placard.co.mz/redirect.aspx?pid=4482&bid=1514", "_blank")}
                >
                  Jogar Agora
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <Card className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-yellow-400/30 p-4">
            <h3 className="text-lg font-bold text-white mb-2">🏆 Dica Profissional</h3>
            <p className="text-gray-300 text-sm">
              Comece com apostas pequenas e vá aumentando gradualmente. Defina sempre um limite e jogue com
              responsabilidade!
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
