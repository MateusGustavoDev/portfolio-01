import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Image from 'next/image'

export function Hello() {
  return (
    <div className="relative m-auto flex h-[900px] w-full flex-col items-center bg-black/20 py-20 backdrop-blur-md desktop:h-max desktop:pt-40">
      <div className="m-auto flex w-full max-w-wrapper flex-wrap px-6 tablet:px-5">
        <div className="flex w-full justify-between desktop:flex-col-reverse desktop:items-center desktop:gap-10">
          <div className="flex flex-col pr-6 desktop:items-center tablet:items-start tablet:pr-0">
            <p className="block w-max text-neutral-400">Opa!👋 Me chamo</p>
            <h1 className="text-[48px] font-bold text-white mobile:text-[40px]">
              Mateus Gustavo
            </h1>
            <p className="max-w-[43.75rem] break-words pr-4 leading-8 text-neutral-400 desktop:text-center tablet:pr-0 tablet:text-start">
              Desenvolvo interfaces modernas e performáticas utilizando as
              tecnologias mais avançadas do mercado, como React, Next.js,
              Tailwind e várias outras, para criar uma UI de alta qualidade.
              Tenho também experiência em integração com APIs REST, GraphQL e
              webhooks. Utilizo técnicas e conceitos para lidar com cache e
              garantir excelente performance, além de possuir boa noção de SEO
              para melhor desempenho em motores de busca, como o Google.
            </p>
          </div>
          <div className="relative h-[21.25rem] w-[18.75rem] overflow-hidden rounded-2xl border border-zinc-700">
            <Image
              src="/foto.jpeg"
              alt="Mateus Gustavo"
              fill
              sizes="340px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="flex w-max max-w-[72.5rem] gap-4 desktop:m-auto desktop:mt-14 tablet:w-full tablet:flex-col tablet:gap-3">
          <Link
            href={process.env.NEXT_PUBLIC_LINKEDIN}
            target="_blank"
            className="w-[16rem] tablet:w-full"
          >
            <div className="group w-full rounded-lg bg-gradient-to-r from-blue-600/40 to-blue-500/60 p-[1px]">
              <div className="w-full rounded-lg bg-black">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600/30 to-blue-800/10 py-4 font-semibold text-blue-400 transition duration-700 ease-in-out hover:to-blue-600/30 hover:text-blue-300">
                  <BsLinkedin size={18} />
                  LINKEDIN
                </button>
              </div>
            </div>
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_GITHUB}
            target="_blank"
            className="w-[16rem] tablet:w-full"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-background-01 to-blue-900/10 py-4 font-semibold text-neutral-300 transition duration-300 ease-in-out hover:bg-zinc-800/50">
              <BsGithub size={18} />
              GITHUB
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
