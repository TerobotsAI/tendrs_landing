import StatCard from './StatCard'

const nums = [
  {
    title: 'Reduction in sales costs',
    value: '85%',
  },
  {
    title: 'Faster growth in businesses',
    value: '20X',
  },
  {
    title: 'Increase in prospects & client base',
    value: '95%',
  },
  {
    title: 'Accuracy in matchmaking',
    value: '99%',
  },
  {
    title: 'Improvement in confidentiality & deal breaking',
    value: '75%',
  },
  {
    title: 'Reduction of fraud & fake companies',
    value: '100%',
  },
]

export default function Stats() {
  return (
    <>
      <div className='dark'>
        <div className='relative overflow-hidden bg-gradient-to-t from-purple-950/40 via-slate-950 to-slate-950 dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 pb-10'>
            <div className='text-center'>
              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                Benefits of using Tendrs AI
              </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-10'>
              {/* Card */}
              {nums.map((num, index) => (
                <StatCard key={index} title={num.title} value={num.value} />
              ))}
              {/* END Card */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
