import { SparklesIcon } from '@heroicons/react/24/solid'
import Button from './Base/Button'

export default function Hero() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden bg-gradient-to-t from-purple-950 via-slate-950 to-slate-950 dark:text-gray-100 h-screen max-h-[800px]'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <div className='text-sm rounded-full flex justify-center items-center gap-2 bg-gradient-to-t from-purple-950 to-slate-950 border border-purple-500 px-4 py-2 leading-4 mb-2 w-fit mx-auto'>
                <SparklesIcon className='w-4 h-4 text-white' />
                New: B2B AI has just landed
              </div>

              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                Bringing B2B community all at one place using AI{' '}
              </h1>
              <h2 className='text-lg font-medium lg:w-2/3 mx-auto text-white/50'>
                Using Tendrs Ai,you can post your requirements & your offerings
                and AI will help you identify suitable clients & vendors and fix
                the meetings instantly.
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 text-center max-w-sm mx-auto sm:items-center sm:justify-center gap-3 pt-10 pb-28'>
              <Button size='lg' title='See the magic' />
              <Button size='lg' variant='secondary' title='Learn More' />
              <p className='text-xs md:col-span-2 text-white/40'>
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
