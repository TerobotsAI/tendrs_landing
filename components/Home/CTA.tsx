import Link from 'next/link'

export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-accent ">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Started with Tendrs.ai today
          </h2>
          <p className="mx-auto mt-6 text-lg leading-8 text-white/70">
            Join Tendrs today and start posting your requirements to discover and
            bid on proposals that align with your services.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://app.tendrs.ai/"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
