import Navbar from '../../components/Navbar/Navbar'
import HighlightPill from '../../components/HighlightPill/HighlightPill'
import UnderlineAccent from '../../components/UnderlineAccent/UnderlineAccent'
import CircularImage from '../../components/CircularImage/CircularImage'
import {
  vector5,
  ellipse255,
  ellipse256,
  ellipse257,
  ellipse258,
  ellipse259,
  ellipse260,
  ellipse261,
  ellipse262,
} from '../../assets/images'

const heroPortraits = [
  { src: ellipse255, left: 515, top: 0 },
  { src: ellipse256, left: 639, top: 226 },
  { src: ellipse262, left: 0, top: 195 },
  { src: ellipse257, left: 939, top: 55 },
  { src: ellipse258, left: 1106, top: 139 },
  { src: ellipse259, left: 1376, top: 0 },
  { src: ellipse260, left: 1618, top: 159 },
  { src: ellipse261, left: 161, top: 139 },
]

export default function Header() {
  return (
    <header className="relative w-full bg-white pb-[100px]">
      <Navbar />

      <div className="relative mx-auto flex w-full max-w-[1844px] flex-col items-center px-[38px] pt-[143px]">
        <div className="relative w-full max-w-[1332px] text-center">
          <HighlightPill
            color="pink"
            className="left-[76%] top-[144px] h-[127px] w-[355px] -translate-x-1/2"
          />
          <HighlightPill
            color="mint"
            className="left-[40%] top-[275px] h-[99px] w-[325px] -translate-x-1/2"
          />
          <UnderlineAccent
            src={vector5}
            className="absolute left-[31%] top-[100px]"
            width={494}
            height={50}
          />

          <h1 className="relative z-10 font-display text-[100px] leading-[126px] text-black font-Gerbil">
            <span className="block">The thinkers and</span>
            <span className="block">doers were changing</span>
            <span className="block">the status Quo with</span>
          </h1>

          <p className="relative z-10 mx-auto mt-[27px] max-w-[831px] font-body text-[24px] leading-[36px] text-black">
            We are a team of strategists, designers communicators, researchers. Togeather,
            we belive that progress only hghappens when you refuse to play things safe.
          </p>
        </div>

        <div className="relative mt-[80px] h-[453px] w-full max-w-[1844px]">
          {heroPortraits.map((portrait, i) => (
            <CircularImage
              key={i}
              src={portrait.src}
              alt={`Team member ${i + 1}`}
              size={226}
              className="absolute"
              style={{ left: portrait.left, top: portrait.top }}
            />
          ))}
        </div>
      </div>
    </header>
  )
}
