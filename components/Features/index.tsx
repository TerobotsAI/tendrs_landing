import {
  ArrowTrendingUpIcon,
  ClockIcon,
  SparklesIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import Feature from './Feature'

const data = [
  {
    id: 1,
    title: 'Grow your Business 10x Faster',
    icon: (
      <ArrowTrendingUpIcon className='inline-block w-4 h-4 relative transition ease-out duration-200 group-hover:scale-110 text-white' />
    ),
    chipText : 'Grow Business',
    description:
      'With trusted profile verifications & AI driven client, vendor matchmakings, get automatically connected to the right clients & vendors to grow 10x for your business',
  },
  {
    id: 2,
    title: 'Save time & resource costs',
    icon: (
      <ClockIcon className='inline-block w-4 h-4 relative transition ease-out duration-200 group-hover:scale-110 text-white' />
    ),
    chipText : 'Save Time',
    description:
      'Lead time of finding the leads and contacting them or sending emails can be reduced. You can start a business even with a minimal sales team at hand.',
  },

  {
    id: 3,
    title: 'Reduce Spam & Protect your privacy',
    icon: (
      <XCircleIcon className='inline-block w-4 h-4 relative transition ease-out duration-200 group-hover:scale-110 text-white' />
    ),
    chipText : 'Zero Spam',
    description:
      'No need to look for additional database, cold calling or Spaming inboxes , sending inmails to clients. just add your requirements and AI will do the magic of identifying the suitable matches and sends meeting requests at the time selected by you.',
  },
  {
    id: 4,
    title: 'Turn offline meetings into prospects',
    icon: (
      <SparklesIcon className='inline-block w-4 h-4 relative transition ease-out duration-200 group-hover:scale-110 text-white' />
    ),
    chipText : 'No boundaries',
    description:
      'Instead of sharing visiting cards, use Tendrs.ai to quicky connect and also identify if they are your potential clients or vendors',
  },
]

export default function Features() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden bg-gradient-to-t from-purple-950/40 via-slate-950 to-slate-950 dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                Benefits of using Tendrs AI
              </h1>
              {/* <div className='flex justify-center gap-2 py-5'>
                <Chip
                  group
                  icon={<SparklesIcon className='w-5 h-5 text-white' />}
                  title='Marketing'
                  variant='secondary'
                />
                <Chip
                  group
                  icon={<ArrowTrendingUpIcon className='w-5 h-5 text-white' />}
                  title='Grow Business'
                  variant='secondary'
                />
                <Chip
                  group
                  icon={<XCircleIcon className='w-5 h-5 text-white' />}
                  title='No Span'
                  variant='secondary'
                />
              </div> */}
            </div>
            {data.map((item) => (
              <Feature
                key={item.id}
               data = {item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
