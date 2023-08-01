import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'
import Differences from '@/components/Differences'
import Navbar from '@/components/Navbar'
import WaitlistForm from '@/components/WaitlistForm'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import About from '@/components/About'
import { Plus_Jakarta_Sans } from 'next/font/google'
import HowItWorks from '@/components/HowItWorks'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      id='main'
      className={
        plus_jakarta_sans.className + ' bg-slate-950 text-white/90 dark'
      }>
      <Navbar />
      <WaitlistForm />
      <About />
      <HowItWorks />
      <Differences />
      <Features />
      <Stats />
      <FAQs />
      <Footer />
    </main>
  )
}
