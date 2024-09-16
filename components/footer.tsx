import Link from 'next/link'
import { Wrapper } from './wrapper'

export function Footer() {
  return (
    <footer className="flex w-full border-t border-zinc-700 bg-background-02 py-12">
      <Wrapper>
        <div className="flex justify-between px-5 mobile:flex-col mobile:items-center mobile:gap-10">
          <div className="flex flex-col gap-2 mobile:items-center">
            <span className="font-semibold uppercase text-white">
              Mateus Gustavo
            </span>
            <span className="text-neutral-400">
              {process.env.NEXT_PUBLIC_EMAIL}
            </span>
          </div>
          <div className="flex gap-5">
            <Link
              href={process.env.NEXT_PUBLIC_LINKEDIN}
              className="text-sm uppercase text-neutral-400 hover:text-white"
            >
              Linkedin
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB}
              className="text-sm uppercase text-neutral-400 hover:text-white"
            >
              Github
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
