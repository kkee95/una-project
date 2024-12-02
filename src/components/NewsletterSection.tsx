'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from 'next/image'

const carouselItems = [
  {
    type: 'video',
    title: 'Como reciclar corretamente',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    type: 'article',
    title: 'Impacto da educação ambiental nas escolas',
    image: '/images/article-1.jpg',
    link: '#',
  },
  {
    type: 'news',
    title: 'Nova política de reciclagem implementada na cidade',
    image: '/images/news-1.jpg',
    link: '#',
  },
  {
    type: 'video',
    title: 'Dicas para reduzir o consumo de plástico',
    src: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    type: 'article',
    title: 'Benefícios da compostagem doméstica',
    image: '/images/article-2.jpg',
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
