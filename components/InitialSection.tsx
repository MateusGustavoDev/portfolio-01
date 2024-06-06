'use client'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ScreenWidthContext } from '@/context/screen-width'

export function InitialSection() {
  const width = useContext(ScreenWidthContext)

  return (
    <div className="m-auto w-full bg-zinc-900 py-20 max-x1:py-14">
      <div className="m-auto flex w-full max-w-[75rem] flex-wrap justify-between px-6 max-x1:flex-col-reverse max-x1:items-center max-x1:gap-6">
        <div className="flex w-max flex-col gap-4 max-x1:m-auto max-x1:w-full ">
          <div className="flex flex-col gap-4 pr-6 max-x1:items-center max-x1:pr-0">
            <motion.p
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
              className="block w-max  text-white"
            >
              Opa!👋 Me chamo
            </motion.p>
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
              className="bg-gradient-to-r from-[#33D2FF] via-blue-500 to-[#ff01a2] bg-clip-text text-7xl  font-semibold text-transparent max-x1:text-center"
            >
              Mateus Gustavo
            </motion.h1>
            <motion.p
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
              className="max-w-[43.75rem] leading-8 text-gray-300 max-x1:text-center "
            >
              Nasci em 2004, e meu interesse pela programação despertou em 2020.
              Então decidi embarcar em uma jornada autodidata focada no
              desenvolvimento front-end, estudando tecnologias como React,
              Next.js, TypeScript, entre outras. Sempre gostei de correr atrás
              para aprender por conta própria, utilizando documentação, YouTube,
              blogs e muita prática.
            </motion.p>
          </div>
        </div>
        {width && (
          <motion.div
            initial={{
              x: width < 1093 ? -200 : 300,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
            className="relative h-[21.25rem] w-[18.75rem] overflow-hidden border-4 border-zinc-700 bg-slate-300"
            style={{ borderRadius: '100% 63% 100% 82% / 57% 99% 49% 100%' }}
          >
            <div
              style={{ backgroundImage: `url('/foto.jpeg')` }}
              className="h-full w-full bg-cover"
            />
          </motion.div>
        )}
      </div>
      <div className="m-auto w-full max-w-[75rem] px-6 ">
        <div className="mt-10 flex w-max max-w-[72.5rem] gap-4 max-x1:m-auto max-x1:mt-12 max-sm:w-full max-sm:flex-col">
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
              viewport={{
                once: true,
              }}
              custom={1}
              className="flex w-[16rem] items-center justify-center gap-2 rounded-md border border-zinc-700 py-4  font-semibold text-white transition duration-300 ease-in-out hover:border-zinc-500 max-sm:w-full"
            >
              <BsLinkedin size={20} />
              LINKEDIN
            </motion.button>
          </Link>
          <Link href={process.env.NEXT_PUBLIC_GITHUB}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
              viewport={{
                once: true,
              }}
              custom={2}
              className="flex w-[16rem] items-center justify-center gap-2 rounded-md border border-zinc-700 py-4  font-semibold text-white transition duration-300 ease-in-out hover:border-zinc-500 max-sm:w-full"
            >
              <BsGithub size={20} />
              GITHUB
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  )
}
