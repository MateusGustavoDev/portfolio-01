import Link from 'next/link'
import { Button } from './button'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export function InitialSection() {
  return (
    <div className="m-auto w-full py-20">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:m-auto">
          <span className="block w-max font-poppins text-white">Hello, Im</span>
          <h1 className="bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text font-poppins text-7xl font-semibold text-transparent">
            Mateus Gustavo
          </h1>
          <p className="max-w-[37.5rem]  font-poppins leading-8 text-gray-300 ">
            Nasci em 2004, e meu interesse pela programação despertou em 2020.
            Decidi embarcar em uma jornada autodidata focada no desenvolvimento
            front-end, dedicando-me ao estudo de tecnologias como React, Next,
            TypeScript, entre outras. Desde então, venho aprimorando minhas
            habilidades para criar as melhores interfaces web.
          </p>
        </div>
      </div>
      <div className="max-sm:w-full max-sm:flex-col mt-10 flex w-max gap-4 lg:mx-auto">
        <Link href="https://www.linkedin.com/in/mateusgustavodev/">
          <button className="max-sm:w-full flex w-[13rem] items-center justify-center gap-2 rounded-md border border-gray-500 bg-zinc-900 py-4 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-950">
            <BsLinkedin size={20} />
            LINKEDIN
          </button>
        </Link>
        <Link href="https://github.com/MateusGustavo22">
          <button className="max-sm:w-full flex w-[13rem] items-center justify-center gap-2 rounded-md border border-gray-500 bg-zinc-900 py-4 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-950">
            <BsGithub size={20} />
            GITHUB
          </button>
        </Link>
      </div>
    </div>
  )
}
