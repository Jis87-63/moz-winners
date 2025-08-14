"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EventSystem } from "@/components/event-system"
import { CasinoOffers } from "@/components/casino-offers"
import { GameShowcase } from "@/components/game-showcase"
import { Footer } from "@/components/footer"
import { FloatingRouletteButton } from "@/components/floating-roulette-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      <Header />
      <Hero />
      <EventSystem />
      <CasinoOffers />
      <GameShowcase />
      <Footer />
      <FloatingRouletteButton />
    </div>
  )
}
