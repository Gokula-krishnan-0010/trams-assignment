import { arrow4, line65 } from '../../assets/images'

export default function ServiceRow({ label, title, showDivider = true, children }) {
  return (
    <div className="relative w-full">
      {showDivider && (
        <img src={line65} alt="" className="mb-0 h-px w-full" aria-hidden="true" />
      )}
      <div className="relative flex min-h-[180px] items-center py-6">
        <div className="w-[456px] shrink-0 font-body text-[30px] leading-[42px] text-black">
          {label}
        </div>
        <p className="flex-1 font-display text-[56px] leading-[116px] text-black">
          {title}
        </p>
        <img src={arrow4} alt="" className="ml-8 h-[15px] w-[81px] shrink-0" aria-hidden="true" />
        {children}
      </div>
    </div>
  )
}
