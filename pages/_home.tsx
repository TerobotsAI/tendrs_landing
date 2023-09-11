import CTA from '@/components/Home/CTA'
import DetailedFeatures from '@/components/Home/DetailedFeatures'
import FAQs from '@/components/Home/FAQs'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <DetailedFeatures />
            <CTA />
            <FAQs />
            <Footer />
        </>
    )
}

export default HomePage