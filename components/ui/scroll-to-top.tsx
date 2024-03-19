'use client'
import { useEffect, useState } from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'

export function ScrollToTop() {
  const [IsVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
  }, [])

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }}
      data-visible={IsVisible}
      className="fixed bottom-8 right-5 z-50 hidden rounded-full bg-white p-2 hover:bg-gray-400 data-[visible=true]:block lg:bottom-8 lg:right-8"
    >
      <BiUpArrowAlt size={30} color="black" />
    </button>
  )
}
