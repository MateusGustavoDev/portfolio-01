import { BsGithub } from 'react-icons/bs'
import { Button } from './button'
import { BiLink } from 'react-icons/bi'

interface ProjectCardProps {
  name: string
  image: string
  topics: string
  github: string
  deploy?: string
}

export function ProjectCard() {
  return (
    <div className="max-x2:w-[25rem] w-[31.25rem]">
      <div className="aspect-[510/338] bg-slate-500"></div>
      <div className="max-x1:mt-4 mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="max-x1:text:xl font-poppins  text-2xl font-semibold text-white">
            Project name
          </span>
          <div className="flex items-center">
            <Button>
              <BsGithub color="white" size={26} />
            </Button>
            <Button>
              <BiLink color="white" size={32} />
            </Button>
          </div>
        </div>
        <span className="max-x1:text-sm font-poppins text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident,
          aliquam a cumque reiciendis fuga quisquam.
        </span>
        <span className="max-x1:text-sm font-poppins lowercase text-blue-500">
          React - Next - Tailwindcss - react-query
        </span>
      </div>
    </div>
  )
}
