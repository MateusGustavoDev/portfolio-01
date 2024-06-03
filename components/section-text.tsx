import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionTextProps = ComponentProps<'h2'> & {
  children: ReactNode
}

export function SectionText({ children, className }: SectionTextProps) {
  return (
    <h2
      className={twMerge(
        'mb-12 text-4xl font-semibold text-white max-md:mb-8',
        className,
      )}
    >
      {children}
    </h2>
  )
}
