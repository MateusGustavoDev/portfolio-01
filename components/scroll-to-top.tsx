'use client'
import Link from 'next/link'
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
    <Link
      href="#top"
      data-visible={IsVisible}
      className="group fixed bottom-8 right-5 z-50 hidden rounded-full bg-white p-2 transition duration-300 ease-in-out hover:bg-blue-500 data-[visible=true]:block lg:bottom-8 lg:right-8"
    >
      <BiUpArrowAlt size={30} className="text-black group-hover:text-white" />
    </Link>
  )
}
