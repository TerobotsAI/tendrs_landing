interface StatCardProps {
  title: string
  value: number
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className='flex flex-col rounded-lg shadow-sm overflow-hidden text-gray-100 bg-gradient-to-tl from-slate-950 to-slate-950 hover:from-purple-950 transition-all border border-purple-500 '>
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
