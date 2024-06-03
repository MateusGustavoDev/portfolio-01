'use client'
import { titleAnimation } from '@/utils/animations'
import { SectionText } from './section-text'
import { SkillCard } from './skill-card'
import { skills } from '@/utils/skills'
import { motion } from 'framer-motion'

export function Skills() {
  return (
    <div className="relative z-50 w-full bg-zinc-900 py-20">
      <div className="w-ful m-auto max-w-[75rem] px-6">
        <motion.div
          variants={titleAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <SectionText className="max-md:text-center">
            Principais habilidades
          </SectionText>
        </motion.div>
        <div className="flex w-full flex-wrap justify-center gap-7 max-x1:grid max-x1:grid-cols-2 max-x1:gap-4 max-md:gap-3 ">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              logo={skill.logo}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
