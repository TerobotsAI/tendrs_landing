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
    question: 'Which teams & businesses can use it?',
    answer:
      'Every business can use Tendrs, no need to spend a high price for purchasing Sales tools, CRM, or having a big sales team to start a Business. If you have a company registered you can start using Tendrs to identify clients and start sending your proposals instantly. This platform is for every B2B businesses.',
  },
  {
    question:
      'Can startups & investors also be part of this Tendr platform?',
    answer:
      "Yes, everyone can be part of this platform. We haven't built the models to match investors &amp;amp; startups yet. Soon we will be launching the same.",
  }
]


export default function FAQs() {
  return (
    <>
      {/* FAQ Section: To The Side */}
      <div id='faqs' className='relative py-10'>
        <div className='lg:flex space-y-16 lg:justify-between lg:space-x-8 lg:space-y-0 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          {/* Heading */}
          <div className='flex-1 prose'>
            <h1>
              Frequently Asked Questions
            </h1>
            <p>
              Join us to transform your networking experience. Revolutionize how you connect and grow.
            </p>
          </div>
          {/* END Heading */}

          {/* FAQ */}
          <dl className="space-y-6 divide-y flex-[2] divide-gray-300">
            {faqs.map((faq, idx) => (
              <FAQ key={idx} faq={faq} />
            ))}
          </dl>
          {/* END FAQ */}
        </div>
      </div>
      {/* END FAQ Section: To The Side */}
    </>
  )
}

