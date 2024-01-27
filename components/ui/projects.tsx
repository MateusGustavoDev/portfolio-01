import { ProjectCard } from './project-card'
import { SectionText } from './section-text'

export default function Projects() {
  return (
    <div id="projects" className="py-20">
      <SectionText>Meus projetos</SectionText>
      <div className="flex flex-wrap justify-between gap-16">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
