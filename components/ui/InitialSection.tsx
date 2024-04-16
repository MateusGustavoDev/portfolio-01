import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export function InitialSection() {
  return (
    <div className="m-auto w-full py-20 max-md:py-10">
      <div className="flex w-full flex-wrap justify-between">
        <div className="flex w-max flex-col gap-4 max-x1:m-auto ">
          <div className="flex flex-col gap-4 pr-6 max-x1:pr-0">
            <span className="block w-max font-poppins text-white">
              Hello, Im
            </span>
            <h1 className="bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text font-poppins text-7xl font-semibold text-transparent">
              Mateus Gustavo
            </h1>
            <p className="max-w-[700px] font-poppins leading-8 text-gray-300 ">
              Nasci em 2004, e meu interesse pela programação despertou em 2020.
              Então decidi embarcar em uma jornada autodidata focada no
              desenvolvimento front-end, estudando tecnologias como React,
              Next.js, TypeScript, entre outras. Sempre gostei de correr atrás
              para aprender por conta própria, utilizando documentação, YouTube,
              blogs e muita prática.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] w-[300px] overflow-hidden rounded-3xl bg-slate-300 max-x1:hidden">
          <div className="absolute z-50  h-full w-full bg-black/40" />
          <div
            style={{ backgroundImage: `url('/foto.jpeg')` }}
            className="h-full w-full bg-cover"
          />
        </div>
      </div>
      <div className="mt-10 flex w-max gap-4 max-x1:m-auto  max-x1:mt-12  max-sm:w-full max-sm:flex-col">
        <Link href="https://www.linkedin.com/in/mateusgustavodev/">
          <button className="flex w-[16rem] items-center justify-center gap-2 rounded-md border border-gray-500 bg-zinc-900 py-4 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-950 max-sm:w-full">
            <BsLinkedin size={20} />
            LINKEDIN
          </button>
        </Link>
        <Link href="https://github.com/MateusGustavoDev">
          <button className="flex w-[16rem] items-center justify-center gap-2 rounded-md border border-gray-500 bg-zinc-900 py-4 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-950 max-sm:w-full">
            <BsGithub size={20} />
            GITHUB
          </button>
        </Link>
      </div>
    </div>
  )
}
