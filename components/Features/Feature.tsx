import Image from 'next/image'
import Chip from '../Base/Chip'
import clsx from 'clsx'

interface Props {
  data: any
}

export default function Feature({ data }: Props) {
  return (
    <>
      {/* Logos Section: Boxed with Heading Alternate */}
      <div className='dark:text-gray-100'>
        <div

          className={clsx(
            'py-16 lg:py-32 flex flex-col items-center gap-10 lg:gap-16',
            data.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
          )}>
          {/* Heading */}

          <div className='flex-1 text-center lg:text-left'>
            <Chip
              group
              title={data.chipText}
              className='mb-4 mx-auto lg:mx-0'
              icon={data.icon}
              variant='secondary'
            />
            <h2 className='text-4xl font-black text-black mb-4 dark:text-white'>
              {data.title}
            </h2>
            <div className='w-10 h-1 bg-gray-300 rounded-lg mb-3 mx-auto dark:bg-gray-700/75 lg:mx-0' />
            <h3 className='text-lg leading-relaxed font-medium text-gray-700 mx-auto lg:mx-0 mt-5 dark:text-gray-300'>
              {data.description}
            </h3>
          </div>
          {/* END Heading */}

          {/* Logos */}
          <div
            data-aos={
              data.id % 2 === 0 ? 'fade-up-right' : 'fade-up-left'
            }
            className='h-80 max-w-[600px]'>
            <div className='grow gap-4'>
              <Image height={400} width={800} src={data.image} alt='' />
            </div>
          </div>
          {/* END Logos */}
        </div>
      </div>
      {/* END Logos Section: Boxed with Heading Alternate */}
    </>
  )
}
