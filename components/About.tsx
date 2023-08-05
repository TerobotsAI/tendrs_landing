import { SparklesIcon } from '@heroicons/react/24/solid'
import Button from './Base/Button'
import Chip from './Base/Chip'
import { WaitlistFormAtom } from './WaitlistForm/FormModal'
import { useSetAtom } from 'jotai'
export default function About() {
  const setWaitlistForm = useSetAtom(WaitlistFormAtom)

  return (
    <>
      <div className='dark' id="about">
        <div className='relative overflow-hidden dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border '>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <Chip title='About Tendrs' />

              <h1 className='text-3xl lg:text-5xl leading-tight lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                What is Tendrs AI?
              </h1>
              <h2 className='text-base md:text-lg lg:max-w-4xl mx-auto text-white/70'>
                Businesses thrive on their unique offerings and specific
                requirements, employing multiple tools and methods to reach
                their ideal clients and vendors. As a team of engineers, we have
                developed an advanced AI model to bridge this gap, facilitating
                meaningful connections between businesses and the right vendors
                or clients, resulting in significant business growth
              </h2>
            </div>
            <div className='flex text-center max-w-sm mx-auto items-center justify-center gap-3 pt-10'>
              <Button
                size='lg'
                variant='primary'
                title='Join the waitlist'
                onClick={() => setWaitlistForm(1)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
