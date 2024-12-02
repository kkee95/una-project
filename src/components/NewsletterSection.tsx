'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Newspaper, Video, Bell } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from 'next/image'

const carouselItems = [
  {
    type: 'video',
    title: 'FOSSA BAIXO CUSTO SUSTENTÁVEL | TEVAP BET',
    src: 'https://youtu.be/4Efy0fpUx48?si=RNRvTgC2Z0Ujo5sw',
  },
  {
    type: 'article',
    title: 'Manual manejo de águas',
    image: '/images/cartilha_manejo_da_agua_ipesa_v2.pdf',
    link: '#',
  },
  {
    type: 'news',
    title: 'A mudança de consciência começa nos hábitos',
    image: 'https://medium.com/@kevensantos/a-mudança-de-consciência-começa-nos-hábitos-10b9b726207b',
    link: '#',
  },
  {
    type: 'video',
    title: 'A Melhor Fossa Ecológica TEVAP, veja e aprenda para fazer em sua casa',
    src: 'https://youtu.be/q3ORMvgqaaY?si=ewfPvVKEqctw0oDh',
  },
  {
    type: 'article',
    title: 'Reimagining the Materials Tetrahedron',
    image: '/images/donahue-2019-reimagining-the-materials-tetrahedron-1.pdf',
    link: '#',
  },
]

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email inscrito:', email)
    setEmail('')
  }

  return (
    <section id="newsletter" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Fique por dentro</h2>
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-12">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    {item.type === 'video' ? (
                      <div className="w-full aspect-video mb-4">
                        <iframe
                          src={item.src}
                          title={item.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="mb-4 rounded-lg"
                      />
                    )}
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    {item.type !== 'video' && (
                      <Button asChild variant="link">
                        <a href={item.link}>Leia mais</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2" />
              Inscreva-se na nossa Newsletter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit">Inscrever-se</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}