import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={plus_jakarta_sans.className + ' dark bg-slate-950'}>
      <Navbar />
      <Hero />
    </main>
  )
}
