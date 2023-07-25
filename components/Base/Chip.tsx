import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface ChipProps {
  title: string
  icon?: React.ReactNode
}

const Chip = ({ title, icon }: ChipProps) => {
  return (
    <div className='text-sm rounded-full flex justify-center items-center gap-2 bg-gradient-to-t from-purple-950 to-slate-950 border border-purple-500 px-4 py-2 leading-4 mb-2 w-fit mx-auto'>
      {icon}
      {title}
    </div>
  )
}

export default Chip
