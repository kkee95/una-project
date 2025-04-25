import { gerarPainelDeImpacto } from "@/lib/impacto"
import ImpactPanel from "@/components/ImpactPanel"

export default function Dashboard() {
  // Simulando um usuário (substituir depois por dados reais do banco)
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
    <div className="container mx-auto py-12">
      <ImpactPanel impacto={impacto} />
    </div>
  )
}
