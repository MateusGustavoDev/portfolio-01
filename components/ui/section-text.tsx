import { ReactNode } from 'react'

interface SectionTextProps {
  children: ReactNode
}

export function SectionText({ children }: SectionTextProps) {
  return <h2 className="mb-12 font-poppins text-3xl text-white">{children}</h2>
}
