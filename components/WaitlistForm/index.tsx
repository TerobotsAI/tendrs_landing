import { SparklesIcon } from '@heroicons/react/24/solid'
import Button from '../Base/Button'
import Chip from '../Base/Chip'
import FormModal from './FormModal'
import { WaitlistFormAtom } from './FormModal'
import { useSetAtom } from 'jotai'
import clsx from 'clsx'

export default function WaitlistForm() {
  const setWaitlistForm = useSetAtom(WaitlistFormAtom)

  return (
    <>
      <FormModal />
      <div className='dark' id='waitlist-form'>
        <div className='relative overflow-hidden bg-purple-800 dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          <div className='absolute inset-0'>
            <div className='relative bg-grid w-full h-full after:absolute after:inset-0 after:bg-radial-gradient after:from-purple-900 after:via-slate-950/80 after:to-slate-950 after:mix-blend-multiply'></div>
          </div>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-40 pb-10'>
            <div
              data-aos='fade-up'
              data-aos-delay='100'
              className='text-center z-100'>
              <div
                className={clsx(
                  'text-2xl italic mb-5 rounded-full mx-auto flex justify-center items-center gap-2  leading-4 w-fit'
                )}>
                It's Finally Here!
              </div>
              <h1
                data-aos='fade-up'
                data-aos-delay='200'
                className='text-4xl lg:text-5xl my-9 leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                30,000+ businesses unlocked the power of AI automation for
                seamless business matchmaking
              </h1>
              <h2
                data-aos='fade-up'
                data-aos-delay='300'
                className='text-lg font-medium max-w-4xl mx-auto text-white/70 my-5'>
                With our cutting-edge AI algorithms, finding your ideal business
                match is now faster than ever. Say goodbye to tedious manual
                searches and let our AI-powered platform deliver instant matches
                at the tap of a button.
              </h2>
            </div>
            <div className='flex flex-col text-center max-w-sm mx-auto sm:items-center sm:justify-stretch gap-3 py-8'>
              <Button
                data-aos='fade-up'
                data-aos-delay='400'
                className='w-full mt-5 bg-[#2b0653]'
                size='lg'
                variant='primary'
                title={'Join the Waitlist!'}
                type='submit'
                onClick={() => setWaitlistForm(true)}
              />
              <p
                data-aos='fade-up'
                data-aos-delay='400'
                className='text-sm md:col-span-2 text-white/70'>
                No Spam, No Data Sharing. Your Privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
