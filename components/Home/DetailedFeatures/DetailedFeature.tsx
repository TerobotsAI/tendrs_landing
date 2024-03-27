import Chip from '@/components/Base/Chip'
import { hyphenate } from '@/lib/utils'
import { IconCheck } from '@tabler/icons-react'
import clsx from 'clsx'
import Image from 'next/image'

interface DetailedFeatureProps {
  id: number
  image: any
  caption: string
  title: string
  desp: string
  features: string[]
}

const DetailedFeature = ({
  id,
  // image,
  caption,
  title,
  desp,
  features
}: DetailedFeatureProps) => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <div
            className={clsx(
              'px-6 lg:px-0',
              id % 2 !== 0 ? 'lg:order-first lg:pr-4' : 'lg:order-last lg:pl-4'
            )}
          >
            <div className="mx-auto lg:mx-0">
              <div className="mx-auto w-full">
                <Chip title={caption} className="mb-4" />
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4.5xl">
                  {title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">{desp}</p>
              </div>
              <dl className="mt-10 text-base leading-7 text-gray-600 lg:max-w-none flex flex-col gap-y-5">
                {features.map((feature, key) => (
                  <div key={key} className="flex items-center gap-4">
                    <IconCheck size={20} className="text-secondary-500" />
                    <p className="text-lg leading-8 text-gray-600">{feature}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="relative isolate overflow-hidden bg-accent-500 sm:mx-auto sm:rounded-3xl lg:mx-0 h-full">
            <Image
              height={500}
              width={500}
              alt={title}
              src={`/detailedFeatures/${hyphenate(caption)}.jpg`}
              loading="lazy"
              draggable={false}
              className="w-full h-full max-h-[500px] object-cover object-center pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedFeature
