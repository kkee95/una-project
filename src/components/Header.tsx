'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-emerald-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Una</Link>
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-emerald-600 lg:bg-transparent z-50`}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
            <li><Link href="#educacao" className="hover:underline">Educação</Link></li>
            <li><Link href="#gamificacao" className="hover:underline">Gamificação</Link></li>
            <li><Link href="#gestao-residuos" className="hover:underline">Gestão de Resíduos</Link></li>
            <li><Link href="#parceiros" className="hover:underline">Parceiros</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}