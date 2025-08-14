"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, X } from "lucide-react"
import Link from "next/link"

export function FloatingRouletteButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Mostrar notificação periodicamente
    const notificationInterval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 4000)
    }, 15000)

    // Animação de destaque
    const animationInterval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 8000)

    return () => {
      clearInterval(notificationInterval)
      clearInterval(animationInterval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Notification popup */}
      {showNotification && (
        <div className="fixed bottom-20 right-4 z-40 bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-3 rounded-lg shadow-xl max-w-48 animate-in slide-in-from-right">
          <button
            onClick={() => setShowNotification(false)}
            className="absolute -top-1 -right-1 bg-black/20 rounded-full p-1"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="text-xs font-bold mb-1">🎁 Gire a Roleta!</div>
          <div className="text-xs opacity-90">2 tentativas grátis disponíveis</div>
        </div>
      )}

      {/* Main floating button */}
      <Link href="/roleta">
        <Button
          className={`fixed bottom-4 right-4 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold rounded-full w-16 h-16 shadow-2xl transition-all duration-300 group ${
            isAnimating ? "animate-bounce scale-110" : "hover:scale-110"
          }`}
          size="icon"
        >
          <div className="relative">
            <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />

            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full bg-yellow-400/30 animate-ping"></div>

            {/* Rotating border */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-30 animate-spin"></div>
          </div>
        </Button>
      </Link>

      {/* Floating particles effect */}
      <div className="fixed bottom-8 right-8 pointer-events-none z-40">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60`}
            style={{
              animationDelay: `${i * 0.5}s`,
              transform: `translate(${Math.cos(i * 2) * 20}px, ${Math.sin(i * 2) * 20}px)`,
            }}
          />
        ))}
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="fixed bottom-2 right-2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs transition-colors"
      >
        <X className="w-3 h-3" />
      </button>
    </>
  )
}
