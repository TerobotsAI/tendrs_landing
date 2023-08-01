interface StatCardProps {
  id: number
  title: string
  value: string
}

const StatCard = ({ id, title, value }: StatCardProps) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-delay={id * 100}
      className='flex flex-col shadow-sm overflow-hidden border border-purple-800 text-gray-100 bg-gradient-to-tl from-slate-950 to-slate-950 hover:from-purple-950 transition-all '>
      <div className='px-5 py-10 grow'>
        <dl className='space-y-1'>
          <dt className='text-2xl font-bold'>{value}</dt>
          <dd className='text-slate-300'>{title}</dd>
        </dl>
      </div>
    </div>
  )
}

export default StatCard
