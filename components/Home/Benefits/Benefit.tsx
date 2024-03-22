import React from 'react'
import clsx from 'clsx'
interface BenefitProps {
  id: number
  name: string
  icon: React.ElementType
  description: string
  centered?: boolean
}

const colors = [
  'bg-amber-500',
  'bg-red-500',
  'bg-cyan-500',
  'bg-accent-500',

  'bg-lime-500',
  'bg-emerald-500'
]

const Benefit: React.FC<BenefitProps> = ({
  id,
  name,
  icon,
  description,
  centered = true
}) => {
  return (
    <div key={name} className="flex flex-col flex-1">
      <div
        className={clsx(
          'flex flex-col gap-4 text-gray-900',
          centered ? 'items-center md:gap-8' : 'items-start md:gap-6'
        )}
      >
        <div
          className={clsx(
            'p-3 md:p-4 rounded-xl',
            colors[id - (1 % colors.length)]
          )}
        >
          {React.createElement(icon, {
            className: 'w-6 h-6 aspect-1 flex-none text-white',
            'aria-hidden': true
          })}
        </div>
        {centered ? (
          <hr className="hidden lg:block h-px w-full bg-gray-400" />
        ) : null}
        <div
          className={clsx(
            'mt-4 space-y-4',
            centered ? 'text-center' : 'text-left'
          )}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 ">
            {name}
          </h3>
          <p className="flex-auto text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Benefit
