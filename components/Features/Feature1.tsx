import Image from 'next/image'
import Chip from '../Base/Chip'

export default function Feature1() {
  return (
    <>
      {/* Logos Section: Boxed with Heading Alternate */}
      <div className='dark:text-gray-100'>
        <div className='py-16 lg:py-32 flex flex-col lg:flex-row gap-10 lg:gap-16'>
          {/* Heading */}

          <div className='flex-1 text-center lg:text-left'>
            <Chip
              group
              title='Tendrs for it'
              className='mb-4'
              icon={<Image height={20} width={20} src='/LogoIcon.svg' alt='' />}
              variant='tertiary'
            />
            <h2 className='text-4xl font-black text-black mb-4 dark:text-white'>
              To save 75% of Sales & marketing costs
            </h2>
            <div className='w-10 h-1 bg-gray-300 rounded-lg mb-3 mx-auto dark:bg-gray-700/75 lg:mx-0' />
            <h3 className='text-lg leading-relaxed font-medium text-gray-700 mx-auto lg:mx-0 dark:text-gray-300'>
              Whether you are in offline meetups or groups, Share the links to
              grow your network and also AI will help identify if they are your
              potential clients or vendors whom you are looking for.
            </h3>
          </div>
          {/* END Heading */}

          {/* Logos */}
          <div className='flex-1 grid place-items-center bg-white/5 rounded-lg border border-purple-500'>
            <div className='grow gap-4'>
              <Image height={100} width={300} src='/Logo.svg' alt='' />
            </div>
          </div>
          {/* END Logos */}
        </div>
      </div>
      {/* END Logos Section: Boxed with Heading Alternate */}
    </>
  )
}
