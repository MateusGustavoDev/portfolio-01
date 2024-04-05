import { BsGithub } from 'react-icons/bs'
import { Button } from './button'
import { BiLink } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  name: string
  image: string
  topics: string
  github: string
  description: string
  deploy?: string
}

export function ProjectCard({
  name,
  image,
  topics,
  github,
  description,
  deploy,
}: ProjectCardProps) {
  return (
    <div className="w-[31.25rem] max-x2:w-[25rem]">
      <div className="relative overflow-hidden rounded-md border border-zinc-700">
        {deploy ? (
          <Link href={deploy} target="_blank">
            <div className="group relative aspect-[510/338] bg-slate-500">
              <Image src={image} alt="screens" fill />
              <div className="absolute z-50 flex h-full w-full items-center justify-center bg-black/50 opacity-0 backdrop-blur-sm transition duration-300 ease-in-out group-hover:opacity-100">
                <span className="font-poppins text-xl font-semibold text-white">
                  ACESSAR
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="relative aspect-[510/338] bg-slate-500">
            <Image src={image} alt="screens" fill />
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-0 max-x1:mt-4">
        <div className="flex items-center justify-between">
          <span className="max-x1:text:xl font-poppins  text-2xl font-semibold text-white">
            {name}
          </span>
          <div className="flex items-center">
            <Link href={github}>
              <Button>
                <BsGithub color="white" size={26} />
              </Button>
            </Link>
            {deploy ? (
              <Link href={deploy}>
                <Button>
                  <BiLink color="white" size={32} />
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
        <span className="min-h-24 font-poppins text-sm leading-7 text-gray-300">
          {description}
        </span>
        <span className="font-poppins text-sm lowercase leading-7 text-blue-500">
          {topics}
        </span>
      </div>
    </div>
  )
}
