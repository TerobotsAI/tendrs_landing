import Chip from '@/components/Base/Chip'
import Feature from '../Features/Feature'
import { IconClock, IconPointerStar } from '@tabler/icons-react'
import clsx from 'clsx'

interface Props {
    id: number,
    image: any,
    caption: string,
    title: string,
    desp: string,
    features: {
        id: number,
        name: string,
        description: string,
        icon: any
    }[]
}

const DetailedFeature = ({
    id,
    image,
    caption,
    title,
    desp,
    features
}: Props) => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className='grid grid-cols-1 items-center gap-x-10 gap-y-16 sm:gap-y-20 lg:grid-cols-2'>
                    <div className={
                        clsx(
                            "px-6 lg:px-0 lg:pr-4 lg:pt-4",
                            id % 2 !== 0 ? 'lg:order-first' : 'lg:order-last'
                        )
                    }>
                        <div className="mx-auto lg:mx-0">
                            <div className="mx-auto w-full">
                                <Chip title={caption} className='mb-4' />
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4.5xl">
                                    {title}
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    {desp}
                                </p>
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
                            src={image}
                            alt="Product screenshot"
                            loading='lazy'
                            className="w-full h-full max-h-[750px] object-cover"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailedFeature