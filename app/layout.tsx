import { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import './globals.css'
import Script from "next/script"
const dm_sans = DM_Sans({
  weight: ["400", "500", "700", "400", "500", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tendrs.ai/'),
  title: "Tendrs.AI - AI-driven meetings with prospective clients & vendors!",
  description:
    "Effortlessly Grow Your Business with AI! Enter requirements once, and let AI handle the rest. AI seamlessly arranges meetings with clients & vendors 24/7, 365 days. Say goodbye to missed opportunities and scheduling hassles. Embrace success with AI-facilitated meetings!",
  openGraph: {
    type: "website",
    images: [{ url: "/Banner.jpg" }],
  },
  twitter: {
    images: [{ url: "/Banner.jpg" }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });
    `}
      </Script>
      <body className={dm_sans.className}>{children}</body>
    </html>
  )
}
