import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

interface SkillCardProps {
  logo: string
  name: string
  description: string
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

export function SkillCard({ logo, name, description, index }: SkillCardProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <motion.div
          variants={cardsAnimation}
          initial="initial"
          whileInView="animate"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 1 }}
          transition={{ type: 'just', stiffness: 10 }}
          viewport={{
            once: true,
          }}
          custom={index}
          className="flex items-center justify-center gap-5 rounded-2xl border border-zinc-700 bg-zinc-800 px-20 py-4 hover:border-zinc-500 max-x1:w-full max-x1:px-0 max-md:gap-3"
        >
          <div className="relative h-11 w-11 max-md:h-6 max-md:w-6">
            <Image src={logo} fill alt={name} />
          </div>
          <span className=" text-normal text-center font-medium text-white  max-md:block max-md:text-sm max-sm:bottom-10 max-sm:text-xs">
            {name}
          </span>
        </motion.div>
      </SheetTrigger>
      <SheetContent className="flex w-full max-w-[25rem] flex-col gap-5 border-zinc-800 bg-base">
        <div className="flex items-center gap-3">
          <Image width={30} height={30} src={logo} alt={name} />
          <span className="text-2xl font-semibold text-white max-md:text-xl">
            O que é {name}?
          </span>
        </div>
        <span className="text-sm leading-7 text-white">{description}</span>
      </SheetContent>
    </Sheet>
  )
}
