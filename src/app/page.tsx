'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import EducationSection from '@/components/EducationSection'
import GamificationSection from '@/components/GamificationSection'
import WasteManagementSection from '@/components/WasteManagementSection'
import PartnersSection from '@/components/PartnersSection'
import NewsletterSection from '@/components/NewsletterSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <NewsletterSection />
        <EducationSection />
        <GamificationSection />
        <WasteManagementSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}