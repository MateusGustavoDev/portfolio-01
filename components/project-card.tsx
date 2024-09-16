import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  name: string
  image: string
  url: string
  deploy: string
}

export function ProjectCard({ image, deploy }: ProjectCardProps) {
  return (
    <div className="relative aspect-[550/348] h-full w-full max-w-[800px] shrink-0 overflow-hidden rounded-xl border border-zinc-800 duration-200 hover:border-zinc-700">
      <Link href={deploy} target="_blank">
        <Image src={image} alt="screens" fill />
      </Link>
    </div>
  )
}
