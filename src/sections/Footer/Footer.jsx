import Button from '../../components/Button/Button'
import FooterColumn from '../../components/FooterColumn/FooterColumn'
import { line67 } from '../../assets/images'

const footerColumns = [
  {
    heading: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accesibility'],
  },
  {
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
  {
    heading: 'Terms & Policies',
    links: [
      '1498w Fluton ste, STE',
      '2D Chicgo, IL 63867.',
      '(123) 456789000',
      'info@elementum.com',
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative w-full bg-mint pt-[140px]">
      <div className="mx-auto max-w-[904px] text-center">
        <h2 className="font-display text-[100px] leading-[116px] text-black">
          <span className="block">Subscribe to</span>
          <span className="block">our newsletter</span>
        </h2>
        <p className="mt-[10px] font-body text-[24px] leading-[36px] text-black">
          To make your stay special and even more memorable
        </p>
        <div className="mt-[38px] flex justify-center">
          <Button>Subscribe Now</Button>
        </div>
      </div>

      <img
        src={line67}
        alt=""
        className="mx-auto mt-[84px] h-px w-full max-w-[1600px] px-[160px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-[1600px] justify-between px-[160px] pt-[100px]">
        {footerColumns.map((col) => (
          <FooterColumn key={col.heading} heading={col.heading} links={col.links} />
        ))}
      </div>

      <p className="pb-[60px] pt-[200px] text-center font-body text-[18px] leading-[30px] text-black">
        ©2023 Elementum. All rights reserved
      </p>
    </footer>
  )
}
