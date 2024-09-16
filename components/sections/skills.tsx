import { SectionTitle } from '../section-title'
import { SkillCard } from '../skill-card'
import { skills } from '@/lib/constants'

export function Skills() {
  return (
    <div className="relative w-full bg-background-02 py-20">
      <div className="w-ful m-auto max-w-[1200px] px-6 tablet:px-5">
        <SectionTitle className="tablet:mb-8 tablet:text-2xl">
          Principais habilidades
        </SectionTitle>
        <div className="flex w-full flex-wrap gap-5 desktop:gap-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
