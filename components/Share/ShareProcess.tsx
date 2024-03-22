const steps = [
  {
    id: '01',
    name: 'Register & Share',
    description:
      'Sign up for our AI-powered platform and share your unique referral link.',
    status: 'current'
  },
  {
    id: '02',
    name: 'Invite Others',
    description:
      'Invite friends, colleagues, and your network to register using your link.',
    status: 'current'
  },
  {
    id: '03',
    name: 'Get Rewarded',
    description:
      'Get exciting rewards and the chance for lifetime free access with each successful referral!',
    status: 'current'
  }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const ShareProcess = () => {
  return (
    <div className="lg:border-b lg:border-t lg:border-gray-200">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Progress"
      >
        <ol
          role="list"
          className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                  stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                  'overflow-hidden'
                )}
              >
                <div aria-current="step">
                  <span
                    className="absolute left-0 top-0 h-full w-1 bg-purple-300 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      stepIdx !== 0 ? 'lg:pl-9' : '',
                      'flex items-start px-6 py-5 text-sm font-medium'
                    )}
                  >
                    <span className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-300">
                        <span className="text-purple-300">{step.id}</span>
                      </span>
                    </span>
                    <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                      <span className="text-sm font-medium text-purple-300">
                        {step.name}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {step.description}
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default ShareProcess
