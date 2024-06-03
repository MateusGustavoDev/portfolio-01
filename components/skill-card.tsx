import Image from 'next/image'
import { motion } from 'framer-motion'

interface SkillCardProps {
  logo: string
  name: string
  index: number
}

export const cardsAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export function SkillCard({ logo, name, index }: SkillCardProps) {
  return (
    <motion.div
      variants={cardsAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="flex  items-center justify-center gap-5 rounded-2xl border border-zinc-700 bg-zinc-800 px-20 py-4 max-x1:w-full max-x1:px-0 max-md:gap-3"
    >
      <div className="relative h-11 w-11 max-md:h-6 max-md:w-6">
        <Image src={logo} fill alt={name} />
      </div>
      <span className=" text-normal text-center font-medium text-white  max-md:block max-md:text-sm max-sm:bottom-10 max-sm:text-xs">
        {name}
      </span>
    </motion.div>
  )
}
