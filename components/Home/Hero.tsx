import Link from 'next/link'
// import Image from 'next/image'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <>
      <div className="relative isolate">
        <div className="py-14 sm:py-24 overflow-y-hidden lg:pb-40 h-screen max-h-[900px] md:max-h-[1200px] bg-gradient-to-b from-accent via-accent to-accent-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 grid place-items-center h-full">
            <div className="mx-auto text-center">
              <div className="bg-accent-500 rounded-full w-fit py-1.5 px-3.5 mx-auto">
                <p className="text-sm text-white font-bold uppercase">
                  Break the norm: Join Tendrs today & start posting your
                  requirements
                </p>
              </div>
              <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto">
                RFPs Redefined & simplified for next Generation
              </h1>

              <p className="mt-3 text-lg md:text-xl leading-8 text-white/60 max-w-3xl mx-auto">
                Discover and bid on proposals that align with your services,
                post your needs for competitive bids, verify company details in
                one place, and explore innovative startups and success stories
                easily.
              </p>

              <div className="mt-14 gap-x-6">
                <Button
                  size="lg"
                  className="bg-white text-accent hover:bg-accent-500 hover:text-white"
                  asChild
                >
                  <Link href="https://app.tendrs.ai">Get Started</Link>
                </Button>
              </div>
            </div>
            {/* <div className=" mt-16 sm:mt-20">
              <div>
                <Image
                  src="/Default.webp"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-lg"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
