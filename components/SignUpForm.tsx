import { SparklesIcon } from '@heroicons/react/24/solid'
import Button from './Base/Button'
import Chip from './Base/Chip'

export default function SignUpForm() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden bg-radial-gradient from-purple-900 via-purple-950/50  to-slate-950 dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-40 pb-10'>
            <div className='text-center'>
              <Chip
                icon={<SparklesIcon className='w-5 h-5 text-white' />}
                title='New: B2B through AI'
                variant='secondary'
              />

              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                The future of your Businesses starts here!{' '}
              </h1>
            </div>
            <div className='flex flex-col text-center max-w-sm mx-auto sm:items-center sm:justify-stretch gap-3 py-10'>
              <div className='space-y-1 text-left w-full'>
                <label htmlFor='email' className='font-medium text-sm'>
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  className='w-full block border placeholder-slate-500 px-3 py-4 leading-6 rounded-lg border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 dark:bg-white/10 dark:border-purple-500 dark:focus:border-purple-500 dark:placeholder-gray-400'
                />
              </div>
              <Button
                className='w-full mt-5 bg-purple-950'
                size='lg'
                variant='primary'
                title='Join Waitlist!'
              />
              <p className='text-sm md:col-span-2 text-white/70'>
                No Spam, No Data Sharing. Your Privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
