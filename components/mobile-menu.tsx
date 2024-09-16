'use client'
import { AlignJustify, FileText, Laptop, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { Link } from 'react-scroll'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="p-0">
          <AlignJustify color="white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-base flex w-full max-w-[18.75rem] flex-col items-center justify-center gap-10 border-l-zinc-800 bg-background-02/20 backdrop-blur-md">
        <SheetClose asChild>
          <Link
            to="contact"
            smooth={true}
            className="flex cursor-pointer items-center gap-3 text-base text-white hover:text-gray-400"
          >
            <Mail size={20} />
            Contato
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            to="projects"
            smooth={true}
            className="flex cursor-pointer items-center gap-3 text-base text-white hover:text-gray-400"
          >
            <Laptop size={20} />
            Projetos
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <a
            href={process.env.NEXT_PUBLIC_RESUME}
            className="flex cursor-pointer items-center gap-3 text-base text-white hover:text-gray-400"
          >
            <FileText size={20} />
            Currículo
          </a>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}
