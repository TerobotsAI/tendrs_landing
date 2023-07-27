import Image from 'next/image'
import Chip from '../Base/Chip'

export default function Feature3() {
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
              Reduce Spam & sharing your contact details
            </h2>
            <div className='w-10 h-1 bg-gray-300 rounded-lg mb-3 mx-auto dark:bg-gray-700/75 lg:mx-0' />
            <h3 className='text-lg leading-relaxed font-medium text-gray-700 mx-auto lg:mx-0 dark:text-gray-300'>
              No need to look for additional database, cold calling or Spaming
              inboxes , sending inmails to clients. just add your requirements
              and AI will do the magic of identifying the suitable matches and
              sends meeting requests at the time selected by you.
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
