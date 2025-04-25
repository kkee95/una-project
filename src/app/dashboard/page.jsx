'use client'

import { gerarPainelDeImpacto } from "@/lib/impacto"
import ImpactPanel from "@/components/ImpactPanel"

export default function DashboardPage() {
  const usuario = {
    nome: "Ana Verde",
    residuosReciclados: 12.5,
    quizzesCompletados: 6,
    diasParticipando: 8,
    pontos: 1280,
    referidos: 2,
    missoesConcluidas: ["Raiz Ativa", "Guardião do Solo"]
  }

  const impacto = gerarPainelDeImpacto(usuario)

  return (
    <main className="p-6 md:p-12">
      <ImpactPanel impacto={impacto} />
    </main>
  )
}

