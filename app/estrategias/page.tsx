"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Target, Shield, Zap } from "lucide-react"

export default function EstrategiasPage() {
  const strategies = [
    {
      game: "Aviator",
      title: "Estratégia de Cash Out Automático",
      description: "Configure cash out automático em 2x para garantir lucros consistentes",
      difficulty: "Iniciante",
      icon: <TrendingUp className="w-6 h-6" />,
      tips: [
        "Defina cash out automático em 2.00x",
        "Aposte valores pequenos consistentemente",
        "Nunca persiga perdas grandes",
        "Mantenha disciplina nos valores",
      ],
    },
    {
      game: "JetX",
      title: "Método de Multiplicadores Baixos",
      description: "Foque em multiplicadores de 1.5x a 3x para maior taxa de sucesso",
      difficulty: "Intermediário",
      icon: <Target className="w-6 h-6" />,
      tips: [
        "Mire em multiplicadores de 1.5x a 3x",
        "Use sistema de progressão moderada",
        "Observe padrões de voos anteriores",
        "Defina limites diários de apostas",
      ],
    },
    {
      game: "Navigator",
      title: "Gestão de Banca Avançada",
      description: "Sistema de gestão que protege seu capital e maximiza ganhos",
      difficulty: "Avançado",
      icon: <Shield className="w-6 h-6" />,
      tips: [
        "Nunca aposte mais de 5% da banca",
        "Divida apostas em múltiplas rodadas",
        "Use stop loss de 20% da sessão",
        "Retire lucros a cada 50% de ganho",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 font-sans">Estratégias de Jogos</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Aprenda as melhores estratégias para jogos crash e maximize seus ganhos com técnicas comprovadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-emerald-600 text-white">
                    {strategy.game}
                  </Badge>
                  <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                    {strategy.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-600 rounded-lg text-white">{strategy.icon}</div>
                  <CardTitle className="text-white text-lg">{strategy.title}</CardTitle>
                </div>
                <CardDescription className="text-emerald-100">{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {strategy.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-emerald-100">{tip}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Aplicar Estratégia</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800/30 rounded-2xl p-8 border border-emerald-500/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Dicas Gerais para Todos os Jogos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">Gestão de Risco</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>• Defina um orçamento antes de começar</li>
                <li>• Nunca aposte dinheiro que não pode perder</li>
                <li>• Use stop loss e take profit</li>
                <li>• Faça pausas regulares durante o jogo</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">Psicologia do Jogo</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>• Mantenha a calma em sequências de perdas</li>
                <li>• Não deixe emoções controlarem apostas</li>
                <li>• Celebre pequenas vitórias consistentes</li>
                <li>• Aprenda com cada sessão de jogo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
