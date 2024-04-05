import Image from 'next/image'

interface SkillCardProps {
  image: string
  name: string
}

export function SkillCard({ image, name }: SkillCardProps) {
  return (
    <div className="group relative flex h-[130px] w-[130px] items-center justify-center overflow-hidden rounded-lg border border-gray-500 bg-zinc-800 max-xs:shrink-0 max-sm:h-[7rem] max-sm:w-[7rem]">
      <div className="relative h-14 w-14 max-sm:h-12 max-sm:w-12">
        <Image src={image} fill alt={name} />
      </div>
      <div className="absolute h-[10rem] w-[10rem] bg-gradient-to-b from-slate-700/20 to-black opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center font-poppins text-xs text-white max-sm:bottom-10 max-sm:text-xs">
          {name}
        </span>
      </div>
    </div>
  )
}
