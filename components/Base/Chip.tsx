import clsx from "clsx"

interface ChipProps {
  title: string
  className?: string
}


const Chip = ({ title, className }: ChipProps) => {
  return (
    <span className={
      clsx("inline-flex items-center rounded-full bg-accent-500/10 px-4 py-2 text-sm text-accent-500 uppercase font-bold ring-1 ring-inset ring-accent-600/10", className)
    }>
      {title}
    </span>
  )
}

export default Chip
