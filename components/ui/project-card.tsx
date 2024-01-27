import { BsGithub } from 'react-icons/bs'
import { Button } from './button'
import { BiLink } from 'react-icons/bi'

export function ProjectCard() {
  return (
    <div className="max-w-[31.25rem] ">
      <div className="aspect-[510/338] bg-slate-500"></div>
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-poppins text-2xl font-semibold text-white">
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
        <span className="font-poppins text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident,
          aliquam a cumque reiciendis fuga quisquam.
        </span>
        <span className="font-poppins text-blue-500">
          React - Next - Tailwindcss - react-query
        </span>
      </div>
    </div>
  )
}
