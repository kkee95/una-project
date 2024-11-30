'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import EducationSection from '@/components/EducationSection'
import GamificationSection from '@/components/GamificationSection'
import WasteManagementSection from '@/components/WasteManagementSection'
import PartnersSection from '@/components/PartnersSection'
import ScreenFlowchart from '@/components/ScreenFlowchart'

export default function Home() {
  const [isMobileView, setIsMobileView] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header isMobileView={isMobileView} setIsMobileView={setIsMobileView} />
      <main className="flex-grow">
        <HeroSection />
        <ScreenFlowchart />
        <EducationSection />
        <GamificationSection />
        <WasteManagementSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}