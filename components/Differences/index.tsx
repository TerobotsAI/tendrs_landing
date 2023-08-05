import {
  HandThumbUpIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid'
import DifferenceCard from './DifferenceCard'

const data = [
  {
    "id": 1,
    "title": "Simple & Cool",
    "icon": (
      <>
        <LightBulbIcon className='inline-block w-8 h-8 relative transition ease-out duration-200 group-hover:scale-110 text-white' />
      </>
    ),
    "content": "Businesses depend on Ads & search engines for customer needs. Only 20% results from their spend.",
  },
  {
    "id": 2,
    "title": "People Oriented",
    "icon": (
      <>
        <HandThumbUpIcon className='inline-block w-8 h-8 relative transition ease-out duration-200 group-hover:scale-110 text-white' />
      </>
    ),
    "content": "Tendrs AI helps businesses grow 10X faster & save 50x on Ads by fixing meetings effortlessly.",
  },
  {
    "id": 3,
    "icon": (
      <>
        <ShieldCheckIcon className='inline-block w-8 h-8 relative transition ease-out duration-200 group-hover:scale-110 text-white' />
      </>
    ),
    "title": "Zero Spam",
    "content": "Tendrs AI platform connects businesses with clients & vendors, boosting growth & saving costs.",
  }
];


export default function Differences() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          <div className='bg-radial-back relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black mb-4 text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                How it&apos;s <br />
                <span className='text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-purple-100'>
                  Different
                </span>
              </h1>
            </div>
            <div className='flex flex-col md:flex-row gap-5 text-center sm:items-center sm:justify-center py-10'>
              {data.map((item) => (
                <DifferenceCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  id={item.id}
                  content={item.content}
                />
              ))}
            </div>
            {/* <div className='flex justify-around gap-5 mt-10'>
              <div className='relative bg-grid h-[200px] md:h-[400px] w-[200px] md:w-[400px] rotate-45 after:absolute after:inset-0 after:bg-gradient-to-l after:from-purple-950 after:to-transparent after:bg-blend-multiply'></div>
              <div className='relative bg-grid h-[200px] md:h-[400px] w-[200px] md:w-[400px] rotate-45 after:absolute after:inset-0 after:bg-gradient-to-l after:from-purple-950 after:to-transparent after:bg-blend-multiply'></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
