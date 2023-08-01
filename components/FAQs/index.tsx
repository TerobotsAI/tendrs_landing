import Chip from '../Base/Chip'
import FAQ from './FAQ'

const faqs = [
  {
    question:
      'We are using linkedin sales navigator to find our clients, how is Tendrs different than that?',
    answer:
      'In linkedin you need to post inmail messages to random people with or without knowing what they are looking for, in this you are spending more than 80% of cost to identify the right potential lead. With Tendrs, since every profile will have list of requirements &amp;amp; offerings matches made by AI will be 99.99% accurate and chances of closing deals are very high.',
  },
  {
    question: 'How is it different to google search?',
    answer:
      'In google search you will find a list of websites and you have to spend more time in identifying the contact, sending a mail with details &amp;amp; they will take time in researching about your credibility and then reply you to fix a meeting, this takes a lot of time in converting a lead. In Tendrs, you can add all your possible details and AI will help you match with right clients and sets up a meeting where you need to discuss the deals and pricing to close it. Moreover, In tendrs, you will be interacting with People who represent the businesses directly.',
  },
  {
    question: 'Is my personal info safe with Tendrs?',
    answer:
      "It's 100% safe, No contact number or mail id would be shared with anyone, you will be getting only meeting requests which you need to accept or reject. Also, you can keep your profile offline to stop receiving any meeting requests.",
  },
  {
    question: 'Which teams &amp;amp; businesses can use it?',
    answer:
      'Every business can use Tendrs, no need to spend a high price for purchasing Sales tools, CRM, or having a big sales team to start a Business. If you have a company registered you can start using Tendrs to identify clients and start sending your proposals instantly. This platform is for every B2B businesses.',
  },
  {
    question:
      'Can startups &amp;amp; investors also be part of this Tendr platform?',
    answer:
      "Yes, everyone can be part of this platform. We haven't built the models to match investors &amp;amp; startups yet. Soon we will be launching the same.",
  }
]


export default function FAQs() {
  return (
    <>
      {/* FAQ Section: To The Side */}
      <div className='relative py-10 overflow-hidden bg-gradient-to-t from-purple-950/40 via-slate-950 to-slate-950 dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
        <div className='lg:flex space-y-16 lg:justify-between lg:space-x-8 lg:space-y-0 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          {/* Heading */}
          <div className='text-center lg:text-left flex-1'>
            <Chip
              variant='secondary'
              title='We Answer'
              className='mb-4 mx-auto lg:mx-0'
              group
            />
            <h2 className='text-4xl lg:text-5xl font-black text-black mb-4 dark:text-white'>
              FAQs
            </h2>
            <h3 className='text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300'>
              Things we often get asked.
            </h3>
          </div>
          {/* END Heading */}

          {/* FAQ */}
          <dl className="space-y-6 divide-y flex-[2] divide-white/20">
            {faqs.map((faq) => (
              <FAQ faq={faq} />
            ))}
          </dl>
          {/* END FAQ */}
        </div>
      </div>
      {/* END FAQ Section: To The Side */}
    </>
  )
}

