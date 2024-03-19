import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import foto from '@/public/foto.jpeg'

export function InitialSection() {
  return (
    <div className="m-auto w-full py-20">
      <div className="flex w-full flex-wrap justify-between">
        <div className="max-x1:m-auto flex w-max flex-col gap-4 ">
          <div className="max-x1:pr-0 flex flex-col gap-4 pr-6">
            <span className="block w-max font-poppins text-white">
              Hello, Im
            </span>
            <h1 className="bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text font-poppins text-7xl font-semibold text-transparent">
              Mateus Gustavo
            </h1>
            <p className="max-w-[700px] font-poppins leading-8 text-gray-300 ">
              Nasci em 2004, e meu interesse pela programação despertou em 2020.
              Decidi embarcar em uma jornada autodidata focada no
              desenvolvimento front-end, dedicando-me ao estudo de tecnologias
              como React, Next, TypeScript, entre outras. Desde então, venho
              aprimorando minhas habilidades para criar as melhores interfaces
              web.
            </p>
          </div>
        </div>
        <div className="max-x1:hidden relative h-[460px] w-[300px] overflow-hidden rounded-3xl bg-slate-300">
          <Image src={foto} fill alt="Mateus Gustavo" />
          <div className="absolute h-full w-full bg-black/50" />
        </div>
      </div>
      <div className="max-x1:m-auto max-x1:mt-12 mt-10 flex w-max  gap-4  max-sm:w-full max-sm:flex-col">
        <Link href="https://www.linkedin.com/in/mateusgustavodev/">
          <button className="flex w-[16rem] items-center justify-center gap-2 rounded-md border border-gray-500 bg-zinc-900 py-4 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-950 max-sm:w-full">
            <BsLinkedin size={20} />
            LINKEDIN
          </button>
        </Link>
        <Link href="https://github.com/MateusGustavo22">
          <button className="flex w-[16rem] items-center justify-center gap-2 rounded-md border border-gray-500 bg-zinc-900 py-4 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-950 max-sm:w-full">
            <BsGithub size={20} />
            GITHUB
          </button>
        </Link>
      </div>
    </div>
  )
}
