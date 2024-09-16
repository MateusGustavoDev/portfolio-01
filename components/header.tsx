import { FileText, Laptop, Mail } from 'lucide-react'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'
import { Wrapper } from './wrapper'

export function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full justify-center border-b border-zinc-700 bg-background-02/80 py-5 backdrop-blur-sm">
      <Wrapper>
        <div className="flex w-full items-center justify-between px-6 tablet:px-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold text-white">
              {`<`}Mateus{`>`}
            </span>
          </div>
          <div className="hidden tablet:block">
            <MobileMenu />
          </div>
          <div className="flex gap-2 tablet:hidden">
            <Link
              href="#contact"
              className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm uppercase text-white transition duration-300 hover:bg-zinc-700/50"
            >
              <Mail size={18} />
              CONTATO
            </Link>
            <Link
              href="#projects"
              className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm uppercase text-white transition duration-300 hover:bg-zinc-700/50"
            >
              <Laptop size={18} />
              Projetos
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_RESUME}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm uppercase text-white transition duration-300 hover:bg-zinc-700/50"
            >
              <FileText size={18} />
              Currículo
            </a>
          </div>
        </div>
      </Wrapper>
    </header>
  )
}
