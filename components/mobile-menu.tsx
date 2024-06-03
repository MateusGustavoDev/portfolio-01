'use client'
import { AlignJustify, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { Link } from 'react-scroll'
import { FaRegFilePdf } from 'react-icons/fa'
import { GrPersonalComputer } from 'react-icons/gr'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <AlignJustify color="white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full max-w-[18.75rem] flex-col items-center justify-center gap-16 border-l-gray-800 bg-base">
        <SheetClose asChild>
          <Link
            to="contact"
            smooth={true}
            className="flex cursor-pointer items-center gap-3  text-2xl text-white hover:text-gray-400"
          >
            <Mail size={22} />
            Contato
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            to="projects"
            smooth={true}
            className="flex cursor-pointer items-center gap-3  text-2xl text-white hover:text-gray-400"
          >
            <GrPersonalComputer size={22} />
            Projetos
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <a
            href={process.env.NEXT_PUBLIC_RESUME}
            className="flex cursor-pointer items-center gap-3  text-2xl text-white hover:text-gray-400"
          >
            <FaRegFilePdf color="white" size={22} />
            Currículo
          </a>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}
