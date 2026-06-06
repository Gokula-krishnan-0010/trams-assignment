import { line21, line22 } from '../../assets/images'

export default function HamburgerMenu() {
  return (
    <button
      type="button"
      className="relative h-[10.5px] w-[45px]"
      aria-label="Open menu"
    >
      <img src={line21} alt="" className="absolute inset-x-0 top-0 h-[2px] w-full" />
      <img src={line22} alt="" className="absolute inset-x-0 bottom-0 h-[2px] w-full" />
    </button>
  )
}
