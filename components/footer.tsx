"use client"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">🎰</span>
              </div>
              <h3 className="text-2xl font-bold text-white">PrêmiosMZ</h3>
            </div>
            <p className="text-gray-300 mb-6">
              A melhor plataforma de cassino online para moçambicanos com prêmios reais e eventos especiais.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/roleta" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Roleta de Prêmios
                </a>
              </li>
              <li>
                <a href="/estrategias" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Estratégias
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Cassinos Parceiros</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://media1.placard.co.mz/redirect.aspx?pid=4482&bid=1514"
                  target="_blank"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                  rel="noreferrer"
                >
                  Placard - Bônus 200%
                </a>
              </li>
              <li>
                <a
                  href="https://www.megagamelive.com/affiliates/?btag=2084979"
                  target="_blank"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                  rel="noreferrer"
                >
                  MegaGameLive - Bônus 300%
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>suporte@premiosmz.co.mz</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+258 84 123 4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Maputo, Moçambique</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 PrêmiosMZ. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Jogo Responsável
              </a>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-yellow-400 text-sm font-semibold">
              🔞 Este site é destinado apenas para maiores de 18 anos. Jogue com responsabilidade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
