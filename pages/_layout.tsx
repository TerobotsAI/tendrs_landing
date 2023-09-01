import React from 'react'
import { Inter } from 'next/font/google'
import AOS from 'aos'

import { useEffect } from 'react'
import 'aos/dist/aos.css'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])
  return <>
    <main id='main' className={inter.className}>
      {children}
    </main>

  </>
}

export default Layout
