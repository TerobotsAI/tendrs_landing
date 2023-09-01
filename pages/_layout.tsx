import React from 'react'
import { DM_Sans } from 'next/font/google'
import AOS from 'aos'

import { useEffect } from 'react'
import 'aos/dist/aos.css'

const dm_sans = DM_Sans({ weight: ["400", "500", "700", "400", "500", "700"], subsets: ['latin'], })

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])
  return <>
    <main id='main' className={dm_sans.className}>
      {children}
    </main>

  </>
}

export default Layout
