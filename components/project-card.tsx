import { BsGithub } from 'react-icons/bs'
import { Button } from './ui/button'
import { BiLink } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  name: string
  image: string
  topics: string[]
  url: string
  description: string
  deploy?: string
}

export function ProjectCard({
  name,
  image,
  topics,
  url,
  description,
  deploy,
}: ProjectCardProps) {
  function concatenateWithDash(texts: string[]): string {
    return texts.join(' - ')
  }

  return (
    <div className="h-max w-full max-w-[56.25rem]">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
        transition={{ type: 'just', stiffness: 300 }}
        className="relative aspect-[550/348] h-full w-full  overflow-hidden rounded-md border border-zinc-800 hover:border-zinc-700 max-x1:max-w-[56.25rem]"
      >
        {deploy ? (
          <Link href={deploy} target="_blank">
            <Image src={image} alt="screens" fill />
          </Link>
        ) : (
          <Image src={image} alt="screens" fill />
        )}
      </motion.div>
      <div className="mt-4 flex flex-col gap-2 max-x1:mt-4">
        <div className="flex items-center justify-between">
          <span className="max-x1:text:xl   text-2xl font-semibold text-white">
            {name}
          </span>
          <div className="flex items-center gap-4">
            {deploy ? (
              <Link
                className="mr-2 rounded-md border border-zinc-800  px-4 py-2 text-sm text-white transition duration-300 ease-in-out hover:border-zinc-600 1xl:text-xs"
                href={url}
              >
                Código fonte
              </Link>
            ) : null}
          </div>
        </div>
        <span className=" text-sm leading-7 text-gray-300">{description}</span>
        <span className=" text-sm lowercase leading-7 text-blue-500">
          {concatenateWithDash(topics)}
        </span>
      </div>
    </div>
  )
}
