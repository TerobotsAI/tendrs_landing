import React from 'react'
import DetailedFeature from './DetailedFeature'

const features = [
  {
    id: 1,
    image: '/detailedFeatures/feature-1.webp',
    caption: 'Startup Hub',
    title:
      'Centralize Your Startup',
    desp: 'Set up your org details, success stories, client success stories, testimonials all at one place',
    features: [
      'Manage your organizational profile seamlessly',
      'Privately list and share your success stories',
      'Gather user testimonials to boost your bid success rate'
    ]
  },
  {
    id: 2,
    image: '/detailedFeatures/feature-2.webp',
    caption: 'Visibility Boost',
    title:
      'Boost your visibility',
    desp: 'Launch your products, Get upvotes, gain visibility & increase chances of winning clients',
    features: [
      'Post tenders for any requirement you have',
      'Receive bids and assess vendors globally',
      'Find projects and submit your bids to secure contracts'
    ]
  },
  {
    id: 3,
    image: '/detailedFeatures/feature-3.webp',
    caption: 'Proposal Discovery',
    title: 'Discover existing proposals or create your own',
    desp: 'Find proposals that match your requirements or create your own to attract potential clients',
    features: [
      'Post tenders for any requirement you have',
      'Receive bids and assess vendors globally',
      'Find projects and submit your bids to secure contracts'
    ]
  },
  {
    id: 4,
    image: '/detailedFeatures/feature-3.webp',
    caption: 'Bid Evaluation',
    // title: 'Evaluate bids seamlessly, prioritizing value or quality',
    title: 'Choose the Best Bid seamlessly',
    desp: 'Bid evaluation made easy with our AI-powered tools and features. Stay updated on bid status changes and receive email alerts for status updates.',
    features: [
      'Simplify bid evaluation',
      'Stay updated on bid status changes',
      'Receive email alerts for status updates'
    ]
  },
  {
    id: 5,
    image: '/detailedFeatures/feature-3.webp',
    caption: 'AI-Powered Matching',
    title: 'Grow Your Business with AI',
    desp: 'Let AI curate tailored proposals for your offerings and match them with suitable projects. Find projects and submit your bids to secure contracts.',

    features: [
      'Our powerful AI matches your offerings with suitable projects',
      'Submit proposals effortlessly with predefined templates'
    ]
  },
  {
    id: 6,
    image: '/detailedFeatures/feature-3.webp',
    caption: 'Startup Community',
    title:
      'Elevate Your Startup',
    desp: 'Share reviews, upvote startups, write success stories, and more to gain visibility and grow your startup. Discover the top startups across various sectors.',
    features: [
      'Gain high visibility for your startup',
      'Receive positive reviews from satisfied clients and watch your startup grow',
      'Upvote and discover the top startups across various sectors'
    ]
  }
]

const DetailedFeatures = () => {
  return (
    <section className='flex items-center flex-col gap-32 py-24 lg:py32'>
      {features.map((feature) => (
        <DetailedFeature key={feature.id} {...feature} />
      ))}
    </section>
  )
}

export default DetailedFeatures
