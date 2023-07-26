import { SparklesIcon } from '@heroicons/react/24/solid'
import Button from './Base/Button'
import Chip from './Base/Chip'

export default function Hero() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden bg-gradient-to-t from-purple-950/40 via-slate-950 to-slate-950 dark:text-gray-100 h-screen max-h-[800px] after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <Chip
                icon={<SparklesIcon className='w-5 h-5 text-white' />}
                title='New: B2B AI has just landed'
              />

              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                Bringing B2B community all at one place using AI{' '}
              </h1>
              <h2 className='text-lg font-medium lg:w-2/3 mx-auto text-white/90'>
                Using Tendrs Ai,you can post your requirements & your offerings
                and AI will help you identify suitable clients & vendors and fix
                the meetings instantly.
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 text-center max-w-sm mx-auto sm:items-center sm:justify-center gap-3 pt-10 pb-28'>
              <Button size='lg' title='See the magic' />
              <Button size='lg' variant='secondary' title='Learn More' />
              <p className='text-xs md:col-span-2 text-white/70'>
                <span className='font-bold'>2068</span> People already
                waitlisted, waiting for you{' '}
              </p>
            </div>
          </div>
          <div className='flex justify-around gap-5 pb-10'>
            <div className='relative bg-grid h-[200px] md:h-[400px] w-[200px] md:w-[400px] rotate-45 after:absolute after:inset-0 after:bg-gradient-to-l after:from-purple-950 after:to-transparent after:bg-blend-multiply'></div>
            {/* <div className='bg-circles h-[100px] w-[300px]'></div> */}
            <div className='relative bg-grid h-[200px] md:h-[400px] w-[200px] md:w-[400px] rotate-45 after:absolute after:inset-0 after:bg-gradient-to-l after:from-purple-950 after:to-transparent after:bg-blend-multiply'></div>
          </div>
        </div>
      </div>
    </>
  )
}
