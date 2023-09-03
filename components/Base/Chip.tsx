
interface ChipProps {
  title: string
}


const Chip = ({ title }: ChipProps) => {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-500/10 px-4 py-2 text-sm text-accent-500 uppercase font-bold ring-1 ring-inset ring-accent-600/10">
      {title}
    </span>
  )
}

export default Chip
