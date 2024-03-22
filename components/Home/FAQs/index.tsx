import FAQ from './FAQ'
import faqs from '@/constants/faqs.json'

export default function FAQs() {
  return (
    <>
      {/* FAQ Section: To The Side */}
      <div id="faqs" className="relative py-10">
        <div className="lg:flex space-y-16 lg:justify-between lg:space-x-8 lg:space-y-0 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="flex-1 prose">
            <h1>Frequently Asked Questions</h1>
            <p>
              Join us to transform your networking experience. Revolutionize how
              you connect and grow.
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
