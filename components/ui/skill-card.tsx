import Image from 'next/image'

interface SkillCardProps {
  image: string
  name: string
}

export function SkillCard({ image, name }: SkillCardProps) {
  return (
    <div className="max-xs:shrink-0 group relative flex h-[8.75rem] w-[8.75rem] items-center justify-center overflow-hidden rounded-lg border border-gray-500 bg-zinc-800 max-sm:h-[7rem] max-sm:w-[7rem]">
      <div className="relative h-16 w-16 max-sm:h-12 max-sm:w-12">
        <Image src={image} fill alt={name} />
      </div>
      <div className="absolute hidden h-[10rem] w-[10rem] bg-gradient-to-b from-slate-700/20 to-black group-hover:block">
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-poppins text-sm text-white max-sm:bottom-10 max-sm:text-xs">
          {name}
        </span>
      </div>
    </div>
  )
}
