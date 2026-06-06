import { arrow5 } from '../../assets/images'

export default function ReadMoreLink({ label = 'Read more' }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-body text-[20px] font-medium leading-[24px] text-black">
        {label}
      </span>
      <img src={arrow5} alt="" className="h-[2px] w-[144px]" aria-hidden="true" />
    </div>
  )
}
