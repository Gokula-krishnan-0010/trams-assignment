import HighlightPill from '../../components/HighlightPill/HighlightPill'
import UnderlineAccent from '../../components/UnderlineAccent/UnderlineAccent'
import ReadMoreLink from '../../components/ReadMoreLink/ReadMoreLink'
import CircularImage from '../../components/CircularImage/CircularImage'
import { vector6, image348, image349 } from '../../assets/images'

export default function Features() {
  return (
    <section className="relative w-full px-[160px] py-[170px]">
      <div className="mx-auto flex max-w-[1599px] flex-col gap-[170px]">
        <div className="flex items-center gap-[262px]">
          <div className="relative w-[737px] shrink-0">
            <UnderlineAccent
              src={vector6}
              className="absolute left-[4px] top-[60px]"
              width={285}
              height={30}
            />
            <HighlightPill
              color="mint"
              className="left-[380px] top-[81px] h-[75px] w-[180px]"
            />
            <h2 className="relative z-10 font-display text-[56px] leading-[76px] text-black">
              <span className="block">Tomorrow should</span>
              <span className="block">be better than today</span>
            </h2>
            <p className="relative z-10 mt-[34px] font-body text-[24px] leading-[36px] text-black">
              We are a team of strategists, designers communicators, researchers.
              Togeather, we belive that progress only happens when you refuse
              to play things safe.
            </p>
            <div className="relative z-10 mt-[38px]">
              <ReadMoreLink />
            </div>
          </div>
          <CircularImage
            src={image348}
            alt="Team meeting"
            size={600}
            imgClassName="left-[-25.27%] w-[131.65%]"
          />
        </div>

        <div className="flex items-center gap-[290px]">
          <CircularImage
            src={image349}
            alt="People working on laptop"
            size={600}
            imgClassName="left-[-14.68%] w-[150.04%]"
          />
          <div className="relative w-[706px] shrink-0">
            <UnderlineAccent
              src={vector6}
              className="absolute left-[297px] top-[138px]"
            />
            <HighlightPill
              color="mint"
              className="left-0 top-0 h-[80px] w-[172px]"
            />
            <h2 className="relative z-10 ml-[13px] mt-[7px] font-display text-[56px] leading-[76px] text-black">
              See how we can help you progress
            </h2>
            <p className="relative z-10 ml-[13px] mt-[34px] font-body text-[24px] leading-[36px] text-black">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <div className="relative z-10 ml-[13px] mt-[38px]">
              <ReadMoreLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
