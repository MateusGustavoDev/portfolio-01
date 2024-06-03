'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'

export const ScreenWidthContext = createContext(0)

interface screenWidthProviderProps {
  children: ReactNode
}

export function ScreenWidthProvider({ children }: screenWidthProviderProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
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
