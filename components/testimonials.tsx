"use client"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Machel",
    location: "Maputo, Moçambique",
    text: "Ganhei 15.000 MZN na roleta no primeiro dia! Site confiável e pagamentos rápidos.",
    rating: 5,
    prize: "Bônus de 200%",
    avatar: "/african-man-smiling.png",
  },
  {
    name: "Amélia Sitoe",
    location: "Beira, Moçambique",
    text: "Os eventos especiais são incríveis! Já ganhei várias apostas grátis no Aviator.",
    rating: 5,
    prize: "10 Vôos no Aviator",
    avatar: "/african-woman-smiling.png",
  },
  {
    name: "João Cossa",
    location: "Nampula, Moçambique",
    text: "Melhor site de cassino que já usei. Interface limpa e prêmios reais!",
    rating: 5,
    prize: "1000 Mts apostas",
    avatar: "/african-man-happy.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">💬 O Que Dizem Nossos Usuários</h2>
          <p className="text-xl text-gray-300">Histórias reais de moçambicanos que ganharam prêmios incríveis</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900/90 to-black/90 border-white/20 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>

              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg p-3 border border-yellow-400/30">
                <span className="text-yellow-400 font-semibold text-sm">🏆 Prêmio Ganho: {testimonial.prize}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center space-x-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">5K+</div>
              <div className="text-gray-300">Usuários Moçambicanos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50M+ MZN</div>
              <div className="text-gray-300">Prêmios Distribuídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.9★</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
