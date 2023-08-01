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
import Head from 'next/head'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tendrs.ai | Business matchmaking, automated</title>
        <link rel="icon" type="image/x-icon" href="/LogoIcon.svg" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tendrs.ai is a revolutionary platform for automated business matchmaking. Find your perfect business partner today!" />
        <meta name="keywords" content="Tendrs, Tendrs.ai, business matchmaking, automated, business partner" />
      </Head>
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
    </>
  )
}
