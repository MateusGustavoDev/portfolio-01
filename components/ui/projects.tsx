import { ProjectCard } from './project-card'
import { SectionText } from './section-text'

export default function Projects() {
  return (
    <div id="projects" className="py-20">
      <SectionText>Meus projetos</SectionText>
      <div className="1xl:justify-center flex flex-wrap gap-14">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
