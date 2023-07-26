export default function Feature1() {
  return (
    <>
      {/* Logos Section: Boxed with Heading Alternate */}
      <div className='bg-gray-100 dark:text-gray-100 dark:bg-gray-900'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16'>
          {/* Heading */}
          <div className='lg:col-span-5 text-center lg:text-left'>
            <h2 className='text-4xl font-black text-black mb-4 dark:text-white'>
              Trusted by these{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
                world-class companies
              </span>
            </h2>
            <div className='w-10 h-1 bg-gray-300 rounded-lg mb-3 mx-auto dark:bg-gray-700/75 lg:mx-0' />
            <h3 className='text-lg leading-relaxed font-medium text-gray-700 lg:w-2/3 mx-auto lg:w-auto lg:mx-0 dark:text-gray-300'>
              We have been working with the biggest companies and delivered over
              30 high profile projects in the past year. Let&apos;s build
              something together today.
            </h3>
          </div>
          {/* END Heading */}

          {/* Logos */}
          <div className='lg:col-span-7 flex items-center'>
            <div className='grow grid grid-cols-1 sm:grid-cols-12 gap-4'>
              <img src='/images/Logo.svg' alt='' />
            </div>
          </div>
          {/* END Logos */}
        </div>
      </div>
      {/* END Logos Section: Boxed with Heading Alternate */}
    </>
  )
}
