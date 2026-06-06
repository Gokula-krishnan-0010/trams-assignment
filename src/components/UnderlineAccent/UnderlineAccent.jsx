import { cn } from '../../lib/cn'

export default function UnderlineAccent({ src, className, width = 371, height = 30 }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
      style={{ width, height }}
    />
  )
}
