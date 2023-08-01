import React from 'react'
import AOS from 'aos'

import { useEffect } from 'react'
import 'aos/dist/aos.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return <>{children}</>
}

export default Layout
