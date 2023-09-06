import Chip from '@/components/Base/Chip'
import Feature from '../Features/Feature'
import { IconClock, IconPointerStar } from '@tabler/icons-react'

const features = [
    {
        id: 2,
        name: 'Effortless Meeting Arrangements',
        description:
            'Receive personalized recommendations that align precisely with your industry, ensuring every connection holds potential for meaningful collaboration.',
        icon: IconClock,
    },
    {
        id: 3,
        name: 'Get 100% qualified leads.',
        description: "Experience the convenience of connecting with potential partners at any time of the day, any day of the year, thanks to AI",
        icon: IconPointerStar,
    }
]

const DetailedFeature = () => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="mx-auto lg:mx-0">
                            <div className="mx-auto w-full">
                                <Chip title="In-house ai" className='mb-4' />
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4.5xl">
                                    AI-Driven meetings with ideal clients and vendors all over the world                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Elevate your networking capabilities with Tendrs.AI's innovative In-House AI feature. Harness the intelligence of AI to facilitate seamless connections, match partners effortlessly, and optimize your business interactions like never before.                                </p>
                            </div>
                            <dl className="mt-10 text-base leading-7 text-gray-600 lg:max-w-none flex flex-col sm:flex-row gap-x-4 gap-y-14">
                                {features.map((feature) => (
                                    <Feature centered={false} key={feature.name} {...feature} />
                                ))}
                            </dl>
                        </div>
                    </div>

                    <div className="relative isolate overflow-hidden bg-accent-500 sm:mx-auto sm:rounded-3xl lg:mx-0 h-full">


                        <img
                            src="/detailedFeatures/Feature1.jpg"
                            alt="Product screenshot"
                            width={2432}
                            height={1442}
                            className="w-full h-full object-cover"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailedFeature