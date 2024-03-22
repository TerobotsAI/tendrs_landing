import { IconX } from '@tabler/icons-react'

const features = [
  'Lengthy, rigid, and tedious process',
  'Requires extensive documentation',
  'Company information scattered',
  'Startups unable to share their requirements',
  'Limited to high-value tenders',
  'Manual evaluation of bids',
  'Lack of email updates and bid tracking',
  'Multiple sites for tender listings',
  'Absence of a comprehensive company database'
]

const Old = () => {
  return (
    <div className="bg-white ring-slate-200 rounded-xl p-8 ring-1 flex flex-col">
      <h3 className="text-slate-900 text-3xl font-bold tracking-tight">
        Old Tenders
      </h3>
      <hr className="border-slate-600 mt-5 w-40" />

      <ul
        role="list"
        className="text-slate-900 mt-8 mb-6 space-y-6 text-sm leading-6 xl:mt-10"
      >
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <IconX size={20} stroke={2} className="text-red-500" />
            <h3 className="text-lg">{feature}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Old
