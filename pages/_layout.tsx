import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import AOS from 'aos'

import { useEffect } from 'react'
import 'aos/dist/aos.css'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])
  return <>
    <main
      id='main'
      className={
        plus_jakarta_sans.className + ' bg-slate-950 text-white/90 dark'
      }>
      {children}
    </main>

  </>
}

export default Layout
