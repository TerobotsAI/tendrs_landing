import clsx from 'clsx'
import React from 'react'

const DifferenceCard = ({
  id,
  icon,
  title,
  content
}: {
  id: number
  icon: React.ReactNode
  title: string
  content: string
}) => {
  return (
    <>
      <div className="flex-1 group p-5 xl:p-6 transition ease-out duration-200 rounded-2xl text-center hover:bg-purple-50 dark:hover:bg-purple-800/25 backdrop-blur-xl ">
        <div className="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
          <div className="absolute inset-0 rounded-3xl -m-5 rotate-3 bg-purple-800/40 backdrop-blur-sm transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
          <div
            className={clsx(
              'absolute inset-0 rounded-2xl -m-2 -rotate-3 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105',
              id % 2 == 0
                ? 'ring-2 ring-purple-400 bg-white/10'
                : 'bg-purple-700'
            )}
          />

          <div className="inline-block w-8 h-8 relative transition ease-out duration-200 group-hover:scale-110 text-white">
            {icon}
          </div>
        </div>
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-center leading-relaxed group-hover:text-gray-800 text-white/70 dark:group-hover:text-gray-200">
          {content}
        </p>
      </div>
    </>
  )
}

export default DifferenceCard
