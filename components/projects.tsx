'use client'
import { ProjectCard } from './project-card'
import { SectionText } from './section-text'
import { motion } from 'framer-motion'
import { projects } from '@/utils/projects'
import { titleAnimation } from '@/utils/animations'
import { useContext } from 'react'
import { ScreenWidthContext } from '@/context/screen-width'

export default function Projects() {
  const width = useContext(ScreenWidthContext)

  const projectsCardAnimation = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 * index,
        duration: 0.4,
      },
    }),
  }

  const projectsCardAnimationMobile = {
    initial: {
      opacity: 0,
      x: -300,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 * index,
        duration: 0.4,
      },
    }),
  }

  return (
    <div className="relative z-50 w-full">
      <div
        id="projects"
        className="m-auto w-full max-w-[87.5rem] px-6 py-20 max-x1:py-14"
      >
        <motion.div
          variants={titleAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div className="m-auto w-max">
            <SectionText>Meus projetos</SectionText>
          </div>
        </motion.div>
        {width && (
          <div className="grid grid-cols-2 gap-10 max-x1:flex max-x1:flex-wrap max-x1:justify-center">
            {projects.map((project, index) => (
              <motion.div
                variants={
                  width < 1090
                    ? projectsCardAnimationMobile
                    : projectsCardAnimation
                }
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index < 2 ? index : index - 2}
                key={project.name}
              >
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  topics={project.topics}
                  url={project.url}
                  deploy={project.deploy}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
