import {
  ArrowTrendingUpIcon,
  SparklesIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import Chip from './Base/Chip'
import Feature1 from './Features/Feature1'
import Feature2 from './Features/Feature2'
import Feature3 from './Features/Feature3'

export default function WhatCanYouDo() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden bg-gradient-to-t from-purple-950/40 via-slate-950 to-slate-950 dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                What can you do with Tendrs AI?
              </h1>
              <div className='flex justify-center gap-2 py-5'>
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
              </div>
            </div>
            <Feature1 />
            <Feature2 />
            <Feature3 />
          </div>
        </div>
      </div>
    </>
  )
}
