"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star, Gift } from "lucide-react"

const casinos = [
  {
    name: "Placard",
    bonus: "200%",
    description: "Bônus de boas-vindas até 200% + rodadas grátis",
    features: ["Aviator", "JetX", "Apostas Desportivas", "Casino ao Vivo"],
    rating: 4.8,
    url: "https://media1.placard.co.mz/redirect.aspx?pid=4482&bid=1514",
    highlight: "Mais Popular",
    maxBonus: "50,000 MT",
  },
  {
    name: "MegaGameLive",
    bonus: "300%",
    description: "Super bônus de 300% + 100 rodadas grátis",
    features: ["Navigator", "Slots Premium", "Torneios", "Cashback"],
    rating: 4.9,
    url: "https://www.megagamelive.com/affiliates/?btag=2084979",
    highlight: "Maior Bônus",
    maxBonus: "75,000 MT",
  },
]

export function CasinoOffers() {
  return (
    <section className="py-8 px-3 bg-black/20">
      <div className="container mx-auto max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">🎰 Cassinos Parceiros</h2>
          <p className="text-sm text-gray-300">Registre-se e receba bônus exclusivos</p>
        </div>

        <div className="space-y-4">
          {casinos.map((casino, index) => (
            <Card
              key={casino.name}
              className="bg-gradient-to-br from-gray-900/90 to-black/90 border-white/20 p-4 backdrop-blur-sm relative overflow-hidden"
            >
              {casino.highlight && (
                <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs">
                  {casino.highlight}
                </Badge>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">{casino.name}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(casino.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                    />
                  ))}
                  <span className="text-gray-300 ml-1 text-sm">{casino.rating}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Gift className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-xl font-bold text-yellow-400">Bônus {casino.bonus}</span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{casino.description}</p>
                <p className="text-yellow-400 text-sm font-semibold">Até {casino.maxBonus}</p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {casino.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="bg-white/10 text-white text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => window.open(casino.url, "_blank")}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 text-sm py-3"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Registrar e Ganhar Bônus
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-xs">* Termos e condições aplicam-se. Jogue com responsabilidade. +18</p>
        </div>
      </div>
    </section>
  )
}
