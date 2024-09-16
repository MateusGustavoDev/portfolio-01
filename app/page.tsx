import { Contact } from '@/components/sections/contact'
import { Projects } from '@/components/sections/projects'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Skills } from '@/components/sections/skills'
import { Hello } from '@/components/sections/hello'

export default function Home() {
  return (
    <div className="relative m-auto w-full">
      <div className="relative h-full w-full overflow-auto">
        <Hello />
        <div className="h-[1px] bg-zinc-800" />
        <Projects />
        <div className="h-[1px] bg-zinc-800" />
        <Skills />
        <div className="h-[1px] bg-zinc-800" />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  )
}
