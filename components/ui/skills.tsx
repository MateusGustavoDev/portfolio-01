import { SectionText } from './section-text'
import { SkillCard } from './skill-card'

export function Skills() {
  return (
    <div className="w-full py-20">
      <SectionText>Principais skills</SectionText>
      <div className="max-xs:h-[410px] max-xs:overflow-auto m-auto flex flex-wrap gap-8 1xl:justify-center max-sm:gap-5 [&::-webkit-scrollbar]:hidden">
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          name="Html"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          name="Css"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          name="Javascript"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          name="Typescript"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          name="React"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          name="Next"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          name="Tailwind"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg"
          name="MaterialUI"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          name="Git"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          name="Jest"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          name="Linux"
        />
        <SkillCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          name="Figma"
        />
      </div>
    </div>
  )
}
