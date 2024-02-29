import Link from 'next/link'
import Image from 'next/image'
import Chip from '../Base/Chip'

export default function Hero() {
  return (
    <>
      <div className="relative isolate pt-14">
        <div className="py-14 sm:py-24 overflow-y-hidden lg:pb-40 max-h-[900px] md:max-h-[1200px] bg-white ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <Chip title="AI match-making" className="mb-4" />
              <h1 className="text-4xl font-bold text-slate-800 md:text-5xl">
                RFPs Redefined & simplified for next Gen!
              </h1>
              <p className="mt-4 md:text-lg font-bold">
                Let AI discover projects and secure clients across the Globe!
              </p>
              <ul className="mt-3 text-lg md:text-xl leading-8 text-gray-600 list-disc ml-5">
                <li>
                  Find proposals matching your offerings and Bid to win clients
                </li>
                <li>
                  Post your requirements and attract bids to optimize costs
                </li>
                <li>
                  Verify company details seamlessly in one centralized location
                </li>
                <li>Explore top use cases and success stories effortlessly</li>
                <li>Identify startups with innovative solutions easily</li>
              </ul>
              <div className="mt-14 gap-x-6">
                <Link
                  href="https://app.tendrs.ai/"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-xl px-6 py-3 leading-6 border-accent-700 bg-accent-500 text-white hover:text-white hover:bg-accent-600 hover:border-accent-600 focus:ring focus:ring-accent-400 focus:ring-opacity-50 active:bgexpoe-700 active:border-accent-700 dark:focus:ring-accent-400 dark:focus:ring-opacity-90"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-3 xl:-m-8">
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
