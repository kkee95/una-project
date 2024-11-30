'use client'

import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

declare global {
  interface Window {
    mermaid: {
      init: (config: undefined, nodes: NodeListOf<Element>) => void;
    };
  }
}

export default function ScreenFlowchart() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.mermaid) {
      window.mermaid.init(undefined, document.querySelectorAll('.mermaid'))
    }
  }, [])

  return (
    <section id="fluxograma" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Fluxograma de Telas</h2>
        <Card>
          <CardHeader>
            <CardTitle>Navegação do Aplicativo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mermaid">
              {`
              graph TD
                A[Tela Inicial] --> B[Login/Registro]
                A --> C[Explorar Conteúdo]
                B --> D[Perfil do Usuário]
                C --> E[Artigos]
                C --> F[Vídeos]
                C --> G[Quizzes]
                D --> H[Progresso]
                D --> I[Conquistas]
                E & F & G --> J[Detalhes do Conteúdo]
                J --> K[Avaliação]
                H & I --> L[Ranking da Comunidade]
                L --> M[Desafios]
                M --> N[Recompensas]
              `}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}