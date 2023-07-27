import React from 'react'
import clsx from 'clsx'

interface ChipProps {
  title: string
  icon?: React.ReactNode
  group?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary'
  className?: string
}

function checkVariant(variant: string | undefined) {
  switch (variant) {
    case 'primary':
    default:
      return 'bg-gradient-to-t from-purple-950 to-slate-950'
    case 'secondary':
      return 'bg-purple-500/20'
    case 'tertiary':
      return 'bg-transparent'
  }
}

const Chip = ({ title, icon, group, variant, className }: ChipProps) => {
  return (
    <div
      className={clsx(
        'text-sm rounded-full flex justify-center items-center gap-2 border border-purple-500 px-4 py-2 leading-4 w-fit',
        checkVariant(variant),
        group ? '' : 'mx-auto mb-2',
        className
      )}>
      {icon}
      {title}
    </div>
  )
}

export default Chip
