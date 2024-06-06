'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'

export const ScreenWidthContext = createContext<undefined | number>(undefined)

interface screenWidthProviderProps {
  children: ReactNode
}

export function ScreenWidthProvider({ children }: screenWidthProviderProps) {
  const [screenWidth, setScreenWidth] = useState<undefined | number>(undefined)

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    window.addEventListener('resize', updateScreenSize)
    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [])

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  )
}
