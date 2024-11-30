import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function PartnersSection() {
  const partners = [
    { name: "VIRA-BICHO", role: "Mobilização comunitária e educação", logo: "/placeholder.svg" },
    { name: "Eye", role: "Processamento de PET e alumínio", logo: "/placeholder.svg" },
    { name: "Várzea Composta", role: "Gestão de resíduos orgânicos", logo: "/placeholder.svg" },
  ]

  return (
    <section id="parceiros" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Nossos Parceiros</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6">
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-center text-gray-600">{partner.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}