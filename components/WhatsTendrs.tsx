import { SparklesIcon } from '@heroicons/react/24/solid'
import Button from './Base/Button'
import Chip from './Base/Chip'

export default function WhatsTendrs() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden dark:text-gray-100'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <Chip title='About Tendrs' />

              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                What is Tendrs Ai?
              </h1>
              <h2 className='text-lg font-medium lg:w-2/3 mx-auto text-white/70'>
                Tendrs Ai is a very simple & intelligent platform using
                cognitive intelligence to help businesses identify their clients
                or vendors with 99.99% accuracy. Its build on 100+ Artificial
                intellligence models to identify the intents of businesses &
                find suitable matches to reduce time, cost & effort of growing
                businesses.
              </h2>
            </div>
            <div className='flex text-center max-w-sm mx-auto sm:items-center sm:justify-center gap-3 pt-10'>
              <Button size='lg' variant='secondary' title='Learn More' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
