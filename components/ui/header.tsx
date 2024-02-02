'use client'
import { Link } from 'react-scroll'
import { MenuMobile } from './menu-mobile'

export function Header() {
  return (
    <div className="max-sm:py-4 flex w-full justify-center border-b border-zinc-700 bg-base py-7">
      <div className="flex w-full max-w-[72.5rem] items-center justify-between px-6">
        <span className="font-poppins text-white">
          {'<'}MateusDev /{'>'}
        </span>
        <div className="hidden lg:block">
          <MenuMobile />
        </div>
        <div className="flex gap-8 lg:hidden">
          <Link
            to="contact"
            smooth={true}
            className="cursor-pointer font-poppins text-white hover:text-gray-400"
          >
            Contato
          </Link>
          <Link
            to="projects"
            smooth={true}
            className="cursor-pointer font-poppins text-white hover:text-gray-400"
          >
            Projetos
          </Link>
          <Link
            to="projects"
            className="cursor-pointer font-poppins text-white hover:text-gray-400"
          >
            Currículo
          </Link>
        </div>
      </div>
    </div>
  )
}
