'use client'
import { Link } from 'react-scroll'

export function Header() {
  return (
    <div className=" flex w-full justify-center border-b border-zinc-700  bg-base py-7">
      <div className="flex w-full max-w-[67.5rem] justify-between">
        <span className="font-poppins text-white">
          {'<'}MateusDev /{'>'}
        </span>
        <div className="flex gap-8">
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
