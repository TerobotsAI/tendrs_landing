import { cn } from '@/lib/utils'

interface ChipProps {
  title: string
  className?: string
  important?: boolean
}

const Chip = ({ title, className, important }: ChipProps) => {
  return (
    <span
      className={cn(
        'inline-flex gap-2 items-center rounded-full bg-accent-600/10 px-4 py-2 text-sm text-accent-800/90 uppercase font-bold ring-1 ring-inset ring-accent-700/40',
        className
      )}
    >
      {important && (
        <svg
          className="h-3 w-3 fill-accent animate-pulse"
          viewBox="0 0 6 6"
          aria-hidden="true"
        >
          <circle cx={3} cy={3} r={3} />
        </svg>
      )}
      {title}
    </span>
  )
}

export default Chip
