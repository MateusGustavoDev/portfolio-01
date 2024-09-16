import Image from 'next/image'

interface SkillCardProps {
  icon: string
  name: string
  description: string
  index: number
}

export function SkillCard({ icon, name, description }: SkillCardProps) {
  return (
    <div className="flex w-full max-w-[370px] flex-col gap-4 rounded-xl border border-zinc-700 bg-background-01 p-6 desktop:max-w-full">
      <div className="flex items-center gap-3">
        <div className="relative h-7 w-7 tablet:h-6 tablet:w-6">
          <Image src={icon} fill alt={name} />
        </div>
        <span className="text-center text-xl font-semibold text-white tablet:text-lg">
          {name}
        </span>
      </div>
      <span className="max-w-[600px] break-words text-start text-sm leading-6 text-neutral-400">
        {description}
      </span>
    </div>
  )
}
