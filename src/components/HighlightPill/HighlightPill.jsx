import { cn } from '../../lib/cn'

export default function HighlightPill({ color = 'mint', className, style }) {
  const bg = color === 'pink' ? 'bg-pink' : 'bg-mint'
  return (
    <span
      className={cn('absolute rounded-[100px]', bg, className)}
      style={style}
      aria-hidden="true"
    />
  )
}
