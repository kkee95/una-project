import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Target } from 'lucide-react'

export default function GamificationSection() {
  return (
    <section id="gamificacao" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Gamificação</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="mr-2" />
                Sistema de Pontos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Ganhe pontos por cada ação sustentável e suba no ranking da comunidade.</p>
              <Button>Ver Pontuação</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="mr-2" />
                Conquistas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Desbloqueie conquistas especiais por suas ações em prol do meio ambiente.</p>
              <Button>Ver Conquistas</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2" />
                Desafios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Participe de desafios semanais para testar seus conhecimentos e ganhar recompensas.</p>
              <Button>Ver Desafios</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}