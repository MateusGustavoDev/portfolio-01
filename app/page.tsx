'use client'
import { InitialSection } from '@/components/InitialSection'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import Projects from '@/components/projects'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Skills } from '@/components/skills'
import { Separator } from '@radix-ui/react-separator'

export default function Home() {
  return (
    <div>
      <div className="m-auto min-h-screen w-full">
        <InitialSection />
        <Separator className=" h-[1px] bg-zinc-800 " />
        <Projects />
        <Separator className=" h-[1px] bg-zinc-800 " />
        <Skills />
        <Separator className=" h-[1px] bg-zinc-800 " />
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
