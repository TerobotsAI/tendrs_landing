import Benefits from '@/components/Home/Benefits'
import CTA from '@/components/Home/CTA'
import Comparision from '@/components/Home/Comparision'
import DetailedFeatures from '@/components/Home/DetailedFeatures'
import FAQs from '@/components/Home/FAQs'
import Hero from '@/components/Home/Hero'
import UnifiedPlatform from '@/components/Home/UnifiedPlatform'
import UseCases from '@/components/Home/Use-cases'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UseCases />
      <DetailedFeatures />
      <Comparision />
      <Benefits />
      <UnifiedPlatform />
      {/* <HowItWorks /> */}
      <CTA />
      <FAQs />
      <Footer />
    </>
  )
}

export default Page
