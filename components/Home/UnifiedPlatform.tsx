import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const points = [
  'Maximize project pipeline and resource planning',
  'Enhance trust with premium profiles',
  'Secure enterprise clients effortlessly',
  'Showcase your success stories effectively',
  'Discover startups with innovative solutions',
  'Unified platform for startups and enterprises',
  'Reduce marketing and sales expenses',
  'Utilize QR codes for seamless contact exchange and networking'
]

export default function UnifiedPlatform() {
  return (
    <>
      <div className="overflow-hidden bg-white">
        <div className="mx-auto px-4 py-16 lg:px-8 lg:py-32 max-w-7xl">
          <div className="flex flex-col space-y-12 lg:flex-row-reverse lg:items-center lg:space-y-0">
            <div className="space-y-10 lg:w-1/2">
              <div>
                <h2 className="mb-4 text-4xl font-bold text-gray-900">
                  Experience the benefits of a revolutionary platform
                </h2>
              </div>

              <ul className="space-y-5">
                {points.map((point, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="inline-block size-6 flex-none text-emerald-500" />
                    <h4 className="font-medium">{point}</h4>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group relative flex-none lg:mr-16 lg:w-1/2 xl:mr-28">
              <Image
                height={500}
                width={500}
                className="relative mx-auto rounded-xl w-full h-full object-cover"
                src="/unified-platform.jpg"
                alt="Preview Feature Image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-700 via-accent-200 to-white rounded-xl mix-blend-color-burn" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
