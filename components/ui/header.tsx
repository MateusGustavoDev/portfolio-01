'use client'
import { Link } from 'react-scroll'
import { MenuMobile } from './menu-mobile'
import avatar from '@/public/avatar.jpeg'
import Image from 'next/image'

export function Header() {
  return (
    <div className="flex w-full justify-center border-b border-zinc-700 bg-base py-5 max-sm:py-4">
      <div className="flex w-full max-w-[72.5rem] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full border border-green-500 p-1">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src={avatar} fill alt="Mateus Gustavo" />
            </div>
          </div>
          <span className="font-poppins text-white">MateusDev</span>
        </div>
        <div className="hidden max-lg:block">
          <MenuMobile />
        </div>
        <div className="flex gap-10 max-lg:hidden">
          <Link
            to="contact"
            smooth={true}
            className="cursor-pointer font-poppins text-white transition duration-300 hover:text-[#33D2FF]"
          >
            Contato
          </Link>
          <Link
            to="projects"
            smooth={true}
            className="cursor-pointer font-poppins text-white transition duration-300 hover:text-[#33D2FF]"
          >
            Projetos
          </Link>
          <a
            href="/Mateus_Gustavo.pdf"
            className="cursor-pointer font-poppins text-white transition duration-300 hover:text-[#33D2FF]"
          >
            Currículo
          </a>
        </div>
      </div>
    </div>
  )
}
