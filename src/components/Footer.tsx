import Link from 'next/link'
import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-emerald-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Una</h2>
            <p className="text-sm">Educação Ambiental e Integrada para um futuro sustentável</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#educacao" className="hover:underline">Educação</Link></li>
              <li><Link href="#gamificacao" className="hover:underline">Gamificação</Link></li>
              <li><Link href="#gestao-residuos" className="hover:underline">Gestão de Resíduos</Link></li>
              <li><Link href="#parceiros" className="hover:underline">Parceiros</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Desenvolvedores</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/dev1" className="flex items-center hover:underline">
                <Github className="w-5 h-5 mr-1" />
                <span>Dev1</span>
              </Link>
              <Link href="https://github.com/dev2" className="flex items-center hover:underline">
                <Github className="w-5 h-5 mr-1" />
                <span>Dev2</span>
              </Link>
              <Link href="https://github.com/dev3" className="flex items-center hover:underline">
                <Github className="w-5 h-5 mr-1" />
                <span>Dev3</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Una. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}