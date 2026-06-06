import { cn } from '../../lib/cn'

export default function DecorativeSquiggle({
  src,
  className,
  width,
  height,
  rotation = 0,
  alt = '',
}) {
  return (
    <div
      className={cn('pointer-events-none absolute', className)}
      style={{ transform: rotation ? `rotate(${rotation}deg)` : undefined }}
    >
      <img
        src={src}
        alt={alt}
        aria-hidden="true"
        className="block max-w-none"
        style={{ width, height }}
      />
    </div>
  )
}
