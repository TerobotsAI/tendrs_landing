import Chip from '@/components/Base/Chip'
import { IconRobot, IconClock, Icon24Hours, IconShieldCheck, IconLockAccess, IconChartLine, IconPointerStar } from '@tabler/icons-react'
import Feature from './Feature'

const features = [
  {
    id: 1,
    name: "AI-Powered Meetings",
    description: "Our AI intelligently pairs you with ideal clients and vendors, eliminating manual searches.",
    icon: IconRobot,
  },
  {
    id: 2,
    name: "Effortless Scheduling",
    description: "Meetings are seamlessly scheduled, avoiding clashes and time-consuming emails.",
    icon: IconClock,
  },
  {
    id: 3,
    name: "Get 100% qualified leads",
    description: "Connect with partners at any time, thanks to our AI's constant availability.",
    icon: IconPointerStar,
  },
  {
    id: 4,
    name: "Find Growing Startups",
    description: "Poersnalized suggestions align with your industry and goals, enhancing opportunities.",
    icon: IconChartLine,
  },
  {
    id: 5,
    name: "Secure and Private",
    description: "Enjoy encrypted communication and secure profiles for utmost data confidentiality.",
    icon: IconShieldCheck,
  },
  {
    id: 6,
    name: "Early Access Rewards",
    description: "Early waitlisters receive free credits on launch, a head start in AI-driven networking.",
    icon: IconLockAccess,
  },
];



export default function Features() {
  return (
    <div id='features' className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Chip title="Features" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4.5xl">
            Explore our amazing features
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us to transform your networking experience. Revolutionize how you connect and grow using AI.
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
