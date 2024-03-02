import AllInOne from '@/components/Home/All-in-one'
import CTA from '@/components/Home/CTA'
import Comparision from '@/components/Home/Comparision'
import DetailedFeatures from '@/components/Home/DetailedFeatures'
import FAQs from '@/components/Home/FAQs'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import HowItWorks from '@/components/Home/HowItWorks'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AllInOne />
      <DetailedFeatures />
      <Comparision />
      <Features />
      <HowItWorks />
      <CTA />
      <FAQs />
      <Footer />
    </>
  )
}

export default Page
