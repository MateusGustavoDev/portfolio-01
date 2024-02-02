'use client'
import { InitialSection } from '@/components/ui/InitialSection'
import { Contact } from '@/components/ui/contact'
import { Footer } from '@/components/ui/footer'
import Projects from '@/components/ui/projects'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { Skills } from '@/components/ui/skills'
import { Separator } from '@radix-ui/react-separator'

export default function Home() {
  return (
    <div>
      <div className="m-auto min-h-screen w-full max-w-[72.5rem] px-6">
        <InitialSection />
        <Separator className=" h-[1px] bg-zinc-700 " />
        <Projects />
        <Separator className=" h-[1px] bg-zinc-700 " />
        <Skills />
        <Separator className=" h-[1px] bg-zinc-700 " />
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
