
import Link from "next/link"
import Image from "next/image"
import Chip from "../Base/Chip"
// import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas'


export default function Hero() {
  // const { rive, RiveComponent } = useRive({
  //   src: '/hero.riv',
  //   autoplay: true,
  //   layout: Layout.new({
  //     fit: Fit.Cover,
  //     maxY: 900,
  //     maxX: 900,
  //     minX: 0,
  //     minY: 0,
  //   }),
  // })

  return (
    <>
      <div className="relative isolate pt-14">
        <div className="py-14 sm:py-24 overflow-y-hidden lg:pb-40 max-h-[900px] md:max-h-[1200px] bg-gradient-to-t from-accent-500 via-accent-100 to-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Chip title='Beta Release' className="mb-4" important />
              <h1 className="text-4xl font-bold text-slate-800 md:text-5xl">
                Unleash growth with seamless AI-driven B2B matchmaking
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-8 text-gray-600">
                Elevate Your Business Growth with AI-Driven Meetings and Transformative Connections
              </p>
              <div className="mt-14 flex items-center justify-center gap-x-6">
                <Link href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-xl px-6 py-3 leading-6 border-accent-700 bg-accent-500 text-white hover:text-white hover:bg-accent-600 hover:border-accent-600 focus:ring focus:ring-accent-400 focus:ring-opacity-50 active:bgexpoe-700 active:border-accent-700 dark:focus:ring-accent-400 dark:focus:ring-opacity-90">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-3 xl:-m-8">
                {/* <RiveComponent

                  className="w-full -translate-y-11 max-h-screen flex items-start pb-10 rounded-lg md:rounded-xl"
                /> */}
                <Image
                  src="/Default.webp"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-lg md:rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
