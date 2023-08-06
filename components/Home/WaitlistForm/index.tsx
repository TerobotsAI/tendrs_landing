import Button from '../../Base/Button'
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
          <div
            data-aos='fade-up'
            className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-40 pb-10'>
            <div
              className='md:text-center z-100'>
              <div
                className='text-base md:text-xl md:mx-auto italic mb-5 rounded-full w-fit'
              >
                It&apos;s Finally Here!
              </div>
              <h1

                className='text-3xl lg:text-5xl my-9 leading-tight lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                30,000+ businesses have unleashed their potential: AI-driven meetings with prospective clients & vendors!
              </h1>
              <h2
                className='text-base md:text-lg max-w-4xl mx-auto text-white/70 my-5'>
                Effortlessly Grow Your Business with AI! Enter requirements once, and let AI handle the rest. AI seamlessly arranges meetings with clients & vendors 24/7, 365 days. Say goodbye to missed opportunities and scheduling hassles. Embrace success with AI-facilitated meetings!
              </h2>
            </div>
            <div className='flex flex-col text-center max-w-sm mx-auto sm:items-center sm:justify-stretch gap-3 py-8'>
              <Button
                className='w-full mt-5 bg-[#2b0653]'
                size='lg'
                variant='primary'
                title='Register Now!'
                subtext='and Join 30,000+ Businesses'
                type='submit'
                onClick={() => setWaitlistForm(1)}
              />
              <p
                data-aos='fade-up'
                data-aos-delay='400'
                className='text-sm md:col-span-2 text-white/70'>
                Add your offerings and requirements to get matches to your inbox.
                {/* No Spam, No Data Sharing. Your Privacy is our priority. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
