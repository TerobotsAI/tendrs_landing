import React from 'react'
import clsx from 'clsx'
interface ButtonProps {
  title: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'lg'
  className?: string
  type?: 'submit' | 'button'
  icon?: React.ReactNode
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
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-8 py-4'
  }
}

const Button = ({
  title,
  variant,
  size,
  className,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        'inline-flex justify-center items-center gap-2 border font-semibold rounded-md leading-6',
        checkVariant(variant),
        checkSize(size)
      )}
      {...props}>
      {title}
      {icon}
    </button>
  )
}

export default Button
