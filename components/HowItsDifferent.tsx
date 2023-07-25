import Button from './Base/Button'
import Chip from './Base/Chip'

export default function HowItsDifferent() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden dark:text-gray-100'>
          <div className='relative container xl:max-w-7xl bg-radial-back mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-slate-100 mb-4'>
                How it's <span className='text-white/60 block'>Different</span>
              </h1>
            </div>
            <div className='flex flex-col md:flex-row gap-5 text-center sm:items-center sm:justify-center pt-10'>
              <div className='flex-1 p-4 text-left bg-slate-950/40 rounded-xl dark:text-gray-100/50 dark:bg-slate-950 dark:bg-opacity-20 backdrop-blur-xl border border-slate-700'>
                <p>
                  So far, businesses are dependent on google Ads, marketing &
                  search engines to understand potential needs of their
                  customers and targetting them, As per recent study only 20% of
                  their entire spend gives them the results.
                </p>
              </div>
              <div className='flex-1 p-4 text-left bg-slate-950/40 rounded-xl dark:text-gray-100/50 dark:bg-slate-950 dark:bg-opacity-20 backdrop-blur-xl border border-slate-700'>
                <p>
                  With Tendrs Ai, Businesses can post their requirements and
                  offerings same at one place and AI will help them fix meetings
                  with clients or vendors without spending any additional
                  efforts which will help every business grow 10X faster &
                  saving 50x of cost spent on Ads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
