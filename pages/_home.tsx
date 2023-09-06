import About from '@/components/Home/About'
import DetailedFeatures from '@/components/Home/DetailedFeatures'
import Differences from '@/components/Home/Differences'
import FAQs from '@/components/Home/FAQs'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import HowItWorks from '@/components/Home/HowItWorks'
import LogoCloud from '@/components/Home/LogoCloud'
import Stats from '@/components/Home/Stats'
import WaitlistForm from '@/components/Home/WaitlistForm'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            {/* <LogoCloud /> */}
            {/* <WaitlistForm /> */}
            {/* <About /> */}
            {/* <HowItWorks /> */}
            {/* <Differences /> */}
            <Features />
            <DetailedFeatures />
            {/* <Stats /> */}
            <FAQs />
            <Footer />
        </>
    )
}

export default HomePage