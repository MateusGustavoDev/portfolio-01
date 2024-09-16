import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionTextProps = ComponentProps<'h2'> & {
  children: ReactNode
}

export function SectionTitle({ children, className }: SectionTextProps) {
  return (
    <h2
      className={twMerge(
        'max-md:mb-8 mb-12 text-4xl font-bold uppercase text-white',
        className,
      )}
    >
      {children}
    </h2>
  )
}
