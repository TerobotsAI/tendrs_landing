import { IconCheck } from '@tabler/icons-react'

const features = [
  'Simple, easy, and effortless process',
  'Fully flexible to accommodate diverse needs',
  'Centralized company information',
  'Empowers startups to post their requirements',
  'Welcomes tenders of any value',
  'AI-enabled bid mapping for streamlined evaluation',
  'Provides email alerts for bid progress and status changes',
  'Single platform for all tender listings',
  'Offers a complete database of companies'
]

const New = () => {
  return (
    <div className="bg-accent ring-slate-900 rounded-xl p-4 md:p-6 lg:p-8 ring-1 flex flex-col ">
      <h3 className="text-white text-2xl lg:text-3xl font-bold">Tendrs</h3>
      <hr className="border-slate-500 mt-5 w-40" />

      <ul
        role="list"
        className="mt-8 mb-6 space-y-6 text-sm leading-6 xl:mt-10"
      >
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <IconCheck size={20} stroke={3} className="text-emerald-500" />
            <h3 className="text-base lg:text-lg text-white">{feature}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default New
