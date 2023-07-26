export default function HowItsDifferent() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden dark:text-gray-100 h-screen max-h-[800px] after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          <div className=' bg-radial-back relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-slate-100 mb-4'>
                How it&apos;s{' '}
                <span className='text-white/60 block'>Different</span>
              </h1>
            </div>
            <div className='flex flex-col md:flex-row gap-5 text-center sm:items-center sm:justify-center pt-10 pb-32'>
              <div className='flex-1 p-4 text-left bg-slate-950/40 rounded-xl dark:text-gray-100/70 dark:bg-slate-950 dark:bg-opacity-20 backdrop-blur-xl border border-slate-700'>
                <p>
                  So far, businesses are dependent on google Ads, marketing &
                  search engines to understand potential needs of their
                  customers and targetting them, As per recent study only 20% of
                  their entire spend gives them the results.
                </p>
              </div>
              <div className='flex-1 p-4 text-left bg-slate-950/40 rounded-xl dark:text-gray-100/70 dark:bg-slate-950 dark:bg-opacity-20 backdrop-blur-xl border border-slate-700'>
                <p>
                  With Tendrs Ai, Businesses can post their requirements and
                  offerings same at one place and AI will help them fix meetings
                  with clients or vendors without spending any additional
                  efforts which will help every business grow 10X faster &
                  saving 50x of cost spent on Ads.
                </p>
              </div>
            </div>
            <div className='flex justify-around gap-5 mt-10'>
              <div className='relative bg-grid h-[200px] md:h-[400px] w-[200px] md:w-[400px] rotate-45 after:absolute after:inset-0 after:bg-gradient-to-l after:from-purple-950 after:to-transparent after:bg-blend-multiply'></div>
              {/* <div className='bg-circles h-[100px] w-[300px]'></div> */}
              <div className='relative bg-grid h-[200px] md:h-[400px] w-[200px] md:w-[400px] rotate-45 after:absolute after:inset-0 after:bg-gradient-to-l after:from-purple-950 after:to-transparent after:bg-blend-multiply'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
