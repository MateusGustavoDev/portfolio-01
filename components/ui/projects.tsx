import { ProjectCard } from './project-card'
import { SectionText } from './section-text'

export default function Projects() {
  return (
    <div id="projects" className="py-20">
      <SectionText>Meus projetos</SectionText>
      <div className="max-x1:gap-8 flex flex-wrap gap-14 1xl:justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
