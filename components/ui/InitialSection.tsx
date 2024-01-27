import Link from 'next/link'
import { Button } from './button'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export function InitialSection() {
  return (
    <div className="m-auto mt-36  min-h-[37.5rem] w-full">
      <div className="flex flex-col gap-4">
        <span className="font-poppins text-white">Hello, Im</span>
        <h1 className="bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text font-poppins text-7xl font-semibold text-transparent ">
          Mateus Gustavo
        </h1>
        <p className="max-w-[37.5rem] font-poppins leading-8 text-gray-300">
          Nasci em 2004, e meu interesse pela programação despertou em 2020.
          Decidi embarcar em uma jornada autodidata focada no desenvolvimento
          front-end, dedicando-me ao estudo de tecnologias como React, Next,
          TypeScript, entre outras. Desde então, venho aprimorando minhas
          habilidades para criar as melhores interfaces web.
        </p>
      </div>
      <div className="mt-8 flex gap-4">
        <Link href="https://www.linkedin.com/in/matteus-gustavo/">
          <Button
            className="min-w-[10.625rem] gap-2 border border-gray-500 bg-zinc-900 py-6 font-poppins font-semibold text-white hover:bg-zinc-950"
            variant="secondary"
          >
            <BsLinkedin size={20} />
            LINKEDIN
          </Button>
        </Link>
        <Link href="https://github.com/MateusGustavo22">
          <Button
            className="min-w-[10.625rem] gap-2 border border-gray-500 bg-zinc-900 py-6 font-poppins font-semibold text-white hover:bg-zinc-950"
            variant="secondary"
          >
            <BsGithub size={20} />
            GITHUB
          </Button>
        </Link>
      </div>
    </div>
  )
}
