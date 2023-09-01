
import Link from "next/link"
import Image from "next/image"
export default function Hero() {
  return (
    <>
      <div className="relative isolate pt-14">


        <div className="py-24 sm:py-32 lg:pb-40 max-h-[1100px] bg-gradient-to-t from-accent-500 via-white to-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
                Let your clients and vendors find you faster
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
              <div className="-m-2 lg:-m-4">
                <Image
                  src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
