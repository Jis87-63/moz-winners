"use client"
import { Header } from "@/components/header"
import { PrizeWheel } from "@/components/prize-wheel"
import { Footer } from "@/components/footer"

export default function RoletaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 font-sans">Roleta de Prêmios</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Gire a roleta e ganhe prêmios incríveis! Você tem direito a 2 giros gratuitos.
          </p>
        </div>
        <PrizeWheel />
      </div>
      <Footer />
    </div>
  )
}
