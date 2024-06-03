'use client'
import { Mail } from 'lucide-react'
import { FaRegFilePdf } from 'react-icons/fa'
import { GrPersonalComputer } from 'react-icons/gr'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'

export function Header() {
  return (
    <header className="flex w-full justify-center border-b border-zinc-800 bg-base py-5 max-sm:py-4">
      <div className="flex w-full max-w-[75rem] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-white">MateusDev</span>
        </div>
        <div className="hidden max-x1:block">
          <MobileMenu />
        </div>
        <div className="flex gap-2 max-x1:hidden">
          <Link
            href="#contact"
            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm uppercase text-white transition duration-300 hover:bg-zinc-800"
          >
            <Mail size={18} />
            CONTATO
          </Link>
          <Link
            href="#projects"
            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm uppercase text-white transition duration-300 hover:bg-zinc-800"
          >
            <GrPersonalComputer size={18} />
            Projetos
          </Link>
          <a
            href={process.env.NEXT_PUBLIC_RESUME}
            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm uppercase text-white transition duration-300 hover:bg-zinc-800"
          >
            <FaRegFilePdf size={18} />
            Currículo
          </a>
        </div>
      </div>
    </header>
  )
}
