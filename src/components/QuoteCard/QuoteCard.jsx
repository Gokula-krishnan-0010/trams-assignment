import { invertedComma1, invertedComma3 } from '../../assets/images'

const quoteLines = [
  '   Elementum  delivered the site with inthe timeline',
  'as they requested. Inthe end, the client found a 50% ',
  'increase in traffic with in days since its launch. They',
  'also had an impressive ability to use technologies that',
  "the company hasn't used, which have also proved to",
  'be easy to use and reliable      ',
]

export default function QuoteCard() {
  return (
    <div className="relative mx-auto h-[358px] w-[879px] rounded-[60px] bg-mint-30 px-[88px] py-[53px]">
      <div className="absolute left-[50px] top-[37px] flex gap-[5px] opacity-20">
        <img src={invertedComma1} alt="" className="h-[49px] w-[32px]" />
        <img src={invertedComma1} alt="" className="h-[49px] w-[32px]" />
      </div>
      <div className="absolute bottom-[28px] right-[50px] flex rotate-180 gap-[5px] opacity-20">
        <img src={invertedComma3} alt="" className="h-[49px] w-[32px]" />
        <img src={invertedComma3} alt="" className="h-[49px] w-[32px]" />
      </div>
      <blockquote className="text-center font-body text-[30px] leading-[42px] text-black">
        {quoteLines.map((line) => (
          <p key={line} className="whitespace-pre">
            {line}
          </p>
        ))}
      </blockquote>
    </div>
  )
}
