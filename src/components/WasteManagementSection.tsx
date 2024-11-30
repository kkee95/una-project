import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Recycle, Map, Calendar } from 'lucide-react'

export default function WasteManagementSection() {
  return (
    <section id="gestao-residuos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Gestão de Resíduos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Recycle className="mr-2" />
                Pontos de Coleta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Encontre os pontos de coleta de resíduos mais próximos de você.</p>
              <Button>Localizar Pontos</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="mr-2" />
                Rotas de Coleta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Visualize e planeje rotas eficientes para coleta de resíduos em sua comunidade.</p>
              <Button>Ver Rotas</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2" />
                Agendamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Agende a coleta de resíduos especiais ou de grande volume.</p>
              <Button>Agendar Coleta</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}