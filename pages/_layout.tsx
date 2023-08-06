import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import AOS from 'aos'
import Head from 'next/head'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])
  return <>
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Tendrs.AI - AI-driven meetings with prospective clients & vendors!</title>
      <link rel="icon" type="image/x-icon" href="/LogoIcon.svg" />
      <link rel="apple-touch-icon" href="/LogoIcon.svg" />
      <meta name="title" content="Tendrs.AI - AI-driven meetings with prospective clients & vendors!" />
      <meta name="description" content="Effortlessly Grow Your Business with AI! Enter requirements once, and let AI handle the rest. AI seamlessly arranges meetings with clients & vendors 24/7, 365 days. Say goodbye to missed opportunities and scheduling hassles. Embrace success with AI-facilitated meetings!" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tendrs.ai" />
      <meta property="og:title" content="Tendrs.AI - AI-driven meetings with prospective clients & vendors!" />
      <meta property="og:description" content="Effortlessly Grow Your Business with AI! Enter requirements once, and let AI handle the rest. AI seamlessly arranges meetings with clients & vendors 24/7, 365 days. Say goodbye to missed opportunities and scheduling hassles. Embrace success with AI-facilitated meetings!" />
      <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tendrs.ai" />
      <meta property="twitter:title" content="Tendrs.AI - AI-driven meetings with prospective clients & vendors!" />
      <meta property="twitter:description" content="Effortlessly Grow Your Business with AI! Enter requirements once, and let AI handle the rest. AI seamlessly arranges meetings with clients & vendors 24/7, 365 days. Say goodbye to missed opportunities and scheduling hassles. Embrace success with AI-facilitated meetings!" />
      <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

      {/* <!-- Meta Tags Generated with https://metatags.io --> */}
    </Head>
    <main
      id='main'
      className={
        plus_jakarta_sans.className + ' bg-slate-950 text-white/90 dark'
      }>
      {children}
    </main>

  </>
}

export default Layout
