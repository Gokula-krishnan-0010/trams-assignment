import DecorativeSquiggle from '../../components/DecorativeSquiggle/DecorativeSquiggle'
import {
  vector2510,
  vector2511,
  vector2517,
  vector2519,
  polygon2,
  polygon3,
  ellipse734,
  ellipse736,
  ellipse739,
} from '../../assets/images'

export default function DecorativeLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <DecorativeSquiggle
        src={ellipse736}
        className="left-0 top-0"
        width={213}
        height={213}
        rotation={-60}
      />
      <DecorativeSquiggle
        src={vector2511}
        className="left-[53px] top-[602px]"
        width={347}
        height={76}
        rotation={90}
      />
      <DecorativeSquiggle
        src={vector2510}
        className="left-[-8px] top-[600px]"
        width={358}
        height={77}
        rotation={90}
      />
      <DecorativeSquiggle
        src={ellipse734}
        className="left-[877px] top-[1595px]"
        width={166}
        height={166}
      />
      <DecorativeSquiggle
        src={polygon2}
        className="left-[545px] top-[2760px]"
        width={274}
        height={267}
      />
      <DecorativeSquiggle
        src={vector2517}
        className="left-[1069px] top-[2840px]"
        width={1484}
        height={793}
        rotation={3.88}
      />
      <DecorativeSquiggle
        src={polygon2}
        className="left-[121px] top-[2339px]"
        width={274}
        height={267}
      />
      <DecorativeSquiggle
        src={polygon3}
        className="left-[1546px] top-[1541px]"
        width={374}
        height={372}
        rotation={-32}
      />
      <DecorativeSquiggle
        src={vector2519}
        className="left-[671px] top-[5369px]"
        width={164}
        height={122}
      />
      <DecorativeSquiggle
        src={vector2519}
        className="left-[774px] top-[5369px]"
        width={164}
        height={122}
      />
      <DecorativeSquiggle
        src={ellipse739}
        className="left-[1622px] top-[5558px]"
        width={333}
        height={333}
        rotation={120}
      />
    </div>
  )
}
