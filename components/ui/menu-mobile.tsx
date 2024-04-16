'use client'
import { AlignJustify } from 'lucide-react'
import { Button } from './button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './sheet'
import { Link } from 'react-scroll'

export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <AlignJustify color="white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full max-w-[300px] flex-col items-center justify-center gap-16 border-l-gray-800 bg-base">
        <SheetClose asChild>
          <Link
            to="contact"
            smooth={true}
            className="cursor-pointer font-poppins text-2xl text-white hover:text-gray-400"
          >
            Contato
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            to="projects"
            smooth={true}
            className="cursor-pointer font-poppins text-2xl text-white hover:text-gray-400"
          >
            Projetos
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <a
            href="/Mateus_Gustavo.pdf"
            className="cursor-pointer font-poppins text-2xl text-white hover:text-gray-400"
          >
            Currículo
          </a>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}
