import React from 'react'
import DetailedFeature from './DetailedFeature'
import { IconClock, IconHeartHandshake, IconPointerStar, IconShieldCheck } from '@tabler/icons-react'

const features = [
    {
        id: 1,
        image: '/detailedFeatures/feature-1.webp',
        caption: 'in-house ai',
        title: ' AI-Driven meetings with ideal clients and vendors all over the world',
        desp: "Elevate your networking capabilities with Tendrs.AI's innovative In-House AI feature. Harness the intelligence of AI to facilitate seamless connections, match partners effortlessly, and optimize your business interactions like never before.",
        features: [
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

    },
    {
        id: 2,
        image: '/detailedFeatures/feature-2.webp',

        caption: 'zero spam',
        title: 'Enhanced Networking with Zero Spam Distractions',
        desp: "Elevate your networking experience with Tendrs.AI's Zero Spam feature. Say goodbye to irrelevant and time-wasting connections, ensuring that your networking interactions remain focused, meaningful, and spam-free.",

        features: [
            {
                id: 4,
                name: 'Shield Against Irrelevant Contacts',
                description: 'Protect your network from irrelevant and spammy connections, allowing you to focus on building meaningful relationships',
                icon: IconShieldCheck
            }, {
                id: 5,
                name: 'Genuine Networking Environment',
                description: 'Create a genuine networking environment where interactions are based on relevance and mutual goals, fostering authenticity.',
                icon: IconHeartHandshake
            }
        ]
    }, {
        id: 3,
        image: '/detailedFeatures/feature-3.webp',

        caption: 'people-focused',
        title: 'Elevate Networking with a People-Centric Approach',
        desp: "Experience networking like never before with Tendrs.AI's People- Oriented feature.Put relationships at the heart of your networking strategy, connecting with like - minded professionals who share your values and objectives.",
        features: [
            {
                id: 5,
                name: 'People-Oriented Networking',
                description: 'Connect with like-minded professionals who share your values and objectives, ensuring that your networking interactions are meaningful and productive.',
                icon: IconHeartHandshake,
            }, {
                id: 6,
                name: 'Build Genuine Relationships',
                description: 'Build genuine relationships with people who share your interests, allowing you to create a network of trusted partners.',
                icon: IconShieldCheck
            }]
    }

]


const DetailedFeatures = () => {
    return (
        <>
            {
                features.map((feature) => (
                    <DetailedFeature key={feature.id} {...feature} />
                ))
            }
        </>
    )
}

export default DetailedFeatures