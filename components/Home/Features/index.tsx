import Chip from '@/components/Base/Chip'
import {
  IconRobot,
  IconClock,
  Icon24Hours,
  IconShieldCheck,
  IconLockAccess,
  IconChartLine,
  IconPointerStar
} from '@tabler/icons-react'
import Feature from './Feature'

// Reduce marketing email expenses
// Acquire clients at minimal cost
// Lower vendor expenses through bids
// Choose high-quality vendors
// Efficiently evaluate bids and proposals
// Prevent inbox spam from multiple vendors
// Discover top solutions and startups

const features = [
  {
    id: 1,
    name: 'Reduce marketing email expenses',
    description:
      'Our AI intelligently pairs you with ideal clients and vendors, eliminating manual searches.',
    icon: IconRobot
  },
  {
    id: 2,
    name: 'Acquire clients at minimal cost',
    description:
      'Meetings are seamlessly scheduled, avoiding clashes and time-consuming emails.',
    icon: IconClock
  },
  {
    id: 3,
    name: 'Lower vendor expenses through bids',
    description:
      "Connect with partners at any time, thanks to our AI's constant availability.",
    icon: IconPointerStar
  },
  {
    id: 4,
    name: 'Choose high-quality vendors',
    description:
      'Poersnalized suggestions align with your industry and goals, enhancing opportunities.',
    icon: IconChartLine
  },
  {
    id: 5,
    name: 'Efficiently evaluate bids and proposals',
    description:
      'Enjoy encrypted communication and secure profiles for utmost data confidentiality.',
    icon: IconShieldCheck
  },
  {
    id: 6,
    name: 'Prevent inbox spam from multiple vendors',
    description:
      'Early waitlisters receive free credits on launch, a head start in AI-driven networking.',
    icon: IconLockAccess
  }
]

export default function Features() {
  return (
    <div id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Chip title="Benefits" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4.5xl">
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
