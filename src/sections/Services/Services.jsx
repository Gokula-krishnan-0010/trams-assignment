import HighlightPill from '../../components/HighlightPill/HighlightPill'
import UnderlineAccent from '../../components/UnderlineAccent/UnderlineAccent'
import ServiceRow from '../../components/ServiceRow/ServiceRow'
import CircularImage from '../../components/CircularImage/CircularImage'
import { vector6, rectangle661 } from '../../assets/images'

const services = [
  {
    label: (
      <>
        <span className="block">Office of multiple</span>
        <span className="block">interest content</span>
      </>
    ),
    title: 'Colaborative & partnership',
  },
  {
    label: (
      <>
        <span className="block">The hanger US Air force</span>
        <span className="block">digital experimental</span>
      </>
    ),
    title: 'We talk about our weight',
  },
  {
    label: (
      <>
        <span className="block">Delta faucet content,</span>
        <span className="block">social, digital</span>
      </>
    ),
    title: 'Piloting digital confidence',
    overlay: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative w-full px-[160px] py-[120px]">
      <div className="relative mb-[82px]">
        <UnderlineAccent src={vector6} className="absolute left-0 top-[204px]" />
        <HighlightPill
          color="mint"
          className="left-[607px] top-[12px] h-[92px] w-[262px]"
        />
        <h2 className="relative z-10 font-display text-[100px] leading-[116px] text-black">
          <span className="block">What we can</span>
          <span className="block">offer you!</span>
        </h2>
      </div>

      <div className="w-full max-w-[1600px]">
        {services.map((service, i) => (
          <ServiceRow
            key={i}
            label={service.label}
            title={service.title}
            showDivider
          >
            {service.overlay && (
              <CircularImage
                src={rectangle661}
                alt=""
                size={160}
                className="absolute left-[1048px] top-1/2 -translate-y-1/2"
                imgClassName="h-[123.75%] left-[-38.95%] w-[165%]"
              />
            )}
          </ServiceRow>
        ))}
      </div>
    </section>
  )
}
