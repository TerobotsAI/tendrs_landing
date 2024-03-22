import Chip from '@/components/Base/Chip'
import {
  IconPointerStar, IconMailBolt,
  IconMoneybag,
  IconClipboardCheck,
  IconReportAnalytics,
  IconUserSearch
} from '@tabler/icons-react'
import Feature from './Benefit'

const features = [
  {
    id: 1,
    name: 'Reduce marketing email expenses',
    description:
      'Eliminate the need for extensive email marketing campaigns by providing a centralized platform for client acquisition and vendor selection.',
    icon: IconMailBolt
  },
  {
    id: 2,
    name: 'Acquire clients at minimal cost',
    description:
      "Utilize our robust features to attract clients without significant financial investment, leveraging the platform's ability to connect businesses efficiently.",
    icon: IconMoneybag
  },
  {
    id: 3,
    name: 'Lower vendor expenses using bids',
    description:
      'Drive down vendor costs by facilitating competitive bidding, allowing businesses to secure services at competitive rates.',
    icon: IconClipboardCheck
  },
  {
    id: 4,
    name: 'Choose the best vendors',
    description:
      'Access a curated pool of verified vendors, ensuring you partner with reputable and reliable businesses for your projects.',
    icon: IconPointerStar
  },
  {
    id: 5,
    name: 'Efficiently evaluate bids and proposals',
    description:
      "Tendrs' intuitive interface simplifies the process of evaluating bids and proposals, saving time and effort for businesses.",
    icon: IconReportAnalytics
  },
  {
    id: 6,
    name: 'Discover top solutions and startups',
    description:
      'Explore innovative solutions and emerging startups effortlessly through our comprehensive marketplace, unlocking new opportunities for collaboration and growth.',
    icon: IconUserSearch
  }
]

export default function Benefits() {
  return (
    <div id="benefits" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Chip title="Benefits" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Choosing Tendrs offers clear benefits
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Some of the many benefits of using Tendrs for your business. We are
            constantly adding new features and benefits to our platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid mx-auto max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Feature key={feature.name} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
