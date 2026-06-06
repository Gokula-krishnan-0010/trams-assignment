import HighlightPill from '../../components/HighlightPill/HighlightPill'
import UnderlineAccent from '../../components/UnderlineAccent/UnderlineAccent'
import QuoteCard from '../../components/QuoteCard/QuoteCard'
import CircularImage from '../../components/CircularImage/CircularImage'
import {
  vector6,
  ellipse263,
  ellipse264,
  ellipse265,
  ellipse266,
  ellipse267,
  ellipse268,
  ellipse269,
  ellipse270,
} from '../../assets/images'

const floatingPortraits = [
  { src: ellipse263, size: 125, left: 123, top: 4, height: 123 },
  { src: ellipse267, size: 123, left: 0, top: 469 },
  { src: ellipse268, size: 216, left: 166, top: 253 },
  { src: ellipse266, size: 74, left: 33, top: 219 },
  { src: ellipse270, size: 146, left: 1605, top: 4 },
  { src: ellipse269, size: 295, left: 1549, top: 358 },
  { src: ellipse264, size: 90, left: 1440, top: 83 },
  { src: ellipse265, size: 112, left: 1462, top: 236 },
]

export default function Testimonials() {
  return (
    <section className="relative w-full px-[38px] py-[120px]">
      <div className="relative mx-auto max-w-[1844px]">
        <div className="relative mb-[45px] text-center">
          <UnderlineAccent
            src={vector6}
            className="absolute left-1/2 top-[119px] -translate-x-1/2"
          />
          <HighlightPill
            color="mint"
            className="left-1/2 top-0 h-[70px] w-[207px] -translate-x-[152px]"
          />
          <h2 className="relative z-10 font-display text-[56px] leading-[66px] tracking-[-1.4px] text-black">
            <span className="block">What our customer</span>
            <span className="block">says About Us</span>
          </h2>
        </div>

        <div className="relative h-[550px]">
          {floatingPortraits.map((portrait, i) => (
            <CircularImage
              key={i}
              src={portrait.src}
              alt={`Customer ${i + 1}`}
              size={portrait.size}
              className="absolute"
              style={{
                left: portrait.left,
                top: portrait.top,
                width: portrait.height || portrait.size,
                height: portrait.height || portrait.size,
              }}
            />
          ))}
          <div className="absolute left-1/2 top-[194px] -translate-x-1/2">
            <QuoteCard />
          </div>
        </div>
      </div>
    </section>
  )
}
