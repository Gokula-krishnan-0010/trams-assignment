import { cn } from '../../lib/cn'

export default function Button({ children, className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'rounded-[100px] bg-black px-[46px] py-[21px] font-body text-[20px] font-bold leading-[30px] text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
