import { ProjectCard } from '../project-card'
import { SectionTitle } from '../section-title'
import { projects } from '@/lib/constants'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

export function Projects() {
  return (
    <div id="projects" className="w-full bg-background-01">
      <div className="m-auto w-full max-w-[87.5rem] px-6 py-20 tablet:px-5 tablet:py-10">
        <SectionTitle className="tablet:my-0 tablet:mb-8 tablet:text-2xl">
          Meus projetos
        </SectionTitle>
        <Carousel
          opts={{
            align: 'center',
          }}
        >
          <CarouselContent className="flex gap-4 px-4 tablet:m-0 tablet:px-0">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                image={project.image}
                url={project.url}
                deploy={project.deploy}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 rounded-md border-zinc-700 bg-black text-white hover:border-zinc-600 tablet:hidden" />
          <CarouselNext className="-right-4 rounded-md border-zinc-700 bg-black text-white hover:border-zinc-600 desktop:right-0 tablet:hidden" />
        </Carousel>
      </div>
    </div>
  )
}
