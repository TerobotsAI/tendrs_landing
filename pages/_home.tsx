import About from '@/components/Home/About'
import Differences from '@/components/Home/Differences'
import FAQs from '@/components/Home/FAQs'
import Features from '@/components/Home/Features'
import HowItWorks from '@/components/Home/HowItWorks'
import Stats from '@/components/Home/Stats'
import WaitlistForm from '@/components/Home/WaitlistForm'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <WaitlistForm />
            <About />
            <HowItWorks />
            <Differences />
            <Features />
            <Stats />
            <FAQs />
            <Footer />
        </>
    )
}

export default HomePage