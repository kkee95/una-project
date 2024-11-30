import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, HelpCircle } from 'lucide-react'

export default function EducationSection() {
  return (
    <section id="educacao" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Educação Ambiental</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2" />
                Artigos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Explore nossa coleção de artigos sobre práticas sustentáveis e educação ambiental.</p>
              <Button>Ver Artigos</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="mr-2" />
                Vídeos Educativos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Assista a vídeos informativos sobre temas ambientais e sustentabilidade.</p>
              <Button>Ver Vídeos</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-2" />
                Quizzes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Teste seus conhecimentos com nossos quizzes interativos sobre meio ambiente.</p>
              <Button>Fazer Quiz</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}