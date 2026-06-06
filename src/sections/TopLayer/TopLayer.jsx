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

export default function TopLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      <DecorativeSquiggle // keep
        src={ellipse736}
        className="left-360 top-120 z-0"
        width={150}
        height={80}
        rotation={-50}
      />
      <DecorativeSquiggle // keep
        src={vector2511}
        className="left-10 top-[602px]"
        width={390}
        height={77}
        rotation={90}
      />
      <DecorativeSquiggle // keep
        src={vector2510}
        className="left-0 top-[600px]"
        width={358}
        height={77}
        rotation={90}
      />
      <DecorativeSquiggle // keep
        src={ellipse734}
        className="left-[500px] top-[1395px] caret-pink-900"
        width={500}
        height={500}
      />
      <DecorativeSquiggle
        src={polygon2}
        className="left-[535px] top-[2780px]"
        width={200}
        height={180}
      />
      <DecorativeSquiggle // keep
        src={vector2519}
        className="left-[750px] top-[4985px]"
        width={164}
        height={150}
      />
      <DecorativeSquiggle // keep
        src={vector2519}
        className="left-[850px] top-[4985px]"
        width={164}
        height={150}
      />
      <DecorativeSquiggle // keep
        src={ellipse739}
        className="left-[1500px] top-[5258px]"
        width={250}
        height={125}
        rotation={115}
      />
    </div>
  )
}
