import React from 'react'
import clsx from 'clsx'
// import link from 'next/link'
import Link from 'next/link'
interface ButtonProps {
  title: string
  subtext?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'lg'
  className?: string
  type?: 'submit' | 'button'
  icon?: React.ReactNode
  link?: string
  onClick?: () => void
}

function checkVariant(variant: string | undefined) {
  switch (variant) {
    case 'primary':
    default:
      return 'bg-purple-950/40 border-purple-500 text-white hover:border-purple-950 focus:ring focus:ring-purple-300 focus:ring-opacity-25 active:border-purple-200 active:shadow-none'
    case 'secondary':
      return 'bg-slate-950 text-white border-purple-500/60 hover:border-purple-950 focus:ring focus:ring-purple-300 focus:ring-opacity-25 active:border-purple-200 active:shadow-none'
  }
}

function checkSize(size: string | undefined) {
  switch (size) {
    case 'sm':
    default:
      return 'px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm'
    case 'lg':
      return 'px-8 py-4'
  }
}

const Button = ({
  title,
  subtext,
  variant,
  size,
  className,
  icon,
  link,
  ...props
}: ButtonProps) => {
  const Tag = link ? 'a' : 'button'

  return (
    <Tag
      className={clsx(
        className,
        'inline-flex justify-center items-center gap-2 border font-semibold rounded-md leading-6',
        checkVariant(variant),
        checkSize(size)
      )}
      href={link}
      {...props}>
      {icon}
      <p>{title}
        <span
          className='block text-xs mt-1'
        >{subtext}</span>
      </p>
    </Tag>
  )
}

export default Button
