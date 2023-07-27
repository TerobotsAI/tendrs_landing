import Image from 'next/image'
import Chip from '../Base/Chip'

export default function Feature2() {
  return (
    <>
      {/* Logos Section: Boxed with Heading Alternate */}
      <div className='dark text-slate-200'>
        <div className='py-16 lg:py-32 flex flex-col lg:flex-row gap-10 lg:gap-16'>
          <div className='flex-1 grid place-items-center bg-white/5 rounded-lg border border-purple-500'>
            <div className='grow gap-4'>
              <Image height={100} width={300} src='/Logo.svg' alt='' />
            </div>
          </div>

          <div className='flex-1 text-center lg:text-left'>
            <Chip
              group
              title='Tendrs for it'
              className='mb-4'
              icon={<Image height={20} width={20} src='/LogoIcon.svg' alt='' />}
              variant='tertiary'
            />
            <h2 className='text-4xl font-black text-black mb-4 dark:text-white'>
              Grow your Business 10x Faster
            </h2>
            <div className='w-10 h-1 bg-gray-300 rounded-lg mb-3 mx-auto dark:bg-gray-700/75 lg:mx-0' />
            <h3 className='text-lg leading-relaxed font-medium text-gray-700 mx-auto lg:mx-0 dark:text-gray-300'>
              With trusted profile verifications & AI driven client, vendor
              Matchmakings Grow your business faster than before even with a
              minimal sales team & tools.
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
