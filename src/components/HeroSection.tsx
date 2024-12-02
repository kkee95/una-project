import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-600 to-emerald-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Una - Educação Ambiental e Gamificação Integrada</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Transforme sua comunidade através de práticas sustentáveis</p>
        <div className="space-x-4">
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">Comece Agora</Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-emerald-700">Saiba Mais</Button>
        </div>
      </div>
    </section>
  )
}
