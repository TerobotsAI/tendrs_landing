import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItsDifferent from '@/components/HowItsDifferent'
import MarketTrust from '@/components/MarketTrust'
import Navbar from '@/components/Navbar'
import SignUpForm from '@/components/SignUpForm'
import Stats from '@/components/Stats'
import WhatCanYouDo from '@/components/WhatCanYouDo'
import WhatsTendrs from '@/components/WhatsTendrs'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  const containerRef = useRef(null)
  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //   }}
    //   containerRef={containerRef}>
    <main
      data-scroll-container
      id='main'
      ref={containerRef}
      className={plus_jakarta_sans.className + ' dark bg-slate-950'}>
      <Navbar />
      <Hero data-scroll-section />
      <MarketTrust data-scroll-section />
      <WhatsTendrs data-scroll-section />
      <HowItsDifferent data-scroll-section />
      <WhatCanYouDo />
      <Stats />
      <FAQs />
      <SignUpForm />
      <Footer />
    </main>
    // </LocomotiveScrollProvider>
  )
}
