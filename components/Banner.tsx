import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Chip from './Base/Chip'

export default function Banner() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden bg-gradient-to-b from-purple-950/50 to-slate-950 dark:text-gray-100'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <Chip
                icon={<CheckCircleIcon className='w-5 h-5 text-white' />}
                title='Market Trust'
              />

              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                30k+ are witnessing the magic everyday with tendrs AI
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
