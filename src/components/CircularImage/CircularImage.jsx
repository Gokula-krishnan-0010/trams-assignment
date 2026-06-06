import { cn } from '../../lib/cn'

export default function CircularImage({
  src,
  alt = '',
  size = 226,
  className,
  imgClassName,
  objectPosition,
  style,
}) {
  return (
    <div
      className={cn('relative shrink-0 overflow-hidden rounded-full', className)}
      style={{ width: size, height: size, ...style }}
    >
      <img
        src={src}
        alt={alt}
        className={cn('absolute inset-0 size-full object-cover', imgClassName)}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  )
}
