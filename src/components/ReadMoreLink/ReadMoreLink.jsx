import { arrow4 } from '../../assets/images'

export default function ReadMoreLink({ label = 'Read more' }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-body text-[20px] font-medium leading-[24px] text-black">
        {label}
      </span>
      <img src={arrow4} alt="" className="h-[10px] w-[100px] mt-1.5" aria-hidden="true" />
    </div>
  )
}
