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
        <div className="flex flex-col">
          <p className="mb-[39px] font-display text-[22px] leading-[30px] text-black">
            Terms & Policies
          </p>
          <ul className="flex flex-col gap-[3px]">
              <li>
                <a
                  href="#"
                  className="font-body text-[20px] leading-[30px] text-black"
                >
                  1498w Fluton ste, STE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-[20px] leading-[30px] text-black"
                >
                  2D Chicgo, IL 63867.
                </a>
              </li>
          </ul>
          <ul className="flex flex-col gap-[30px] mt-[30px]">
          <li>
            <a
              href="#"
              className="font-body text-[20px] leading-[30px] text-black"
            >
              (123) 456789000
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-body text-[20px] leading-[30px] text-black"
            >
              info@elementum.com
            </a>
          </li>
      </ul>
        </div>
      </div>

      <p className="pb-[60px] pt-[200px] text-center font-body text-[18px] leading-[30px] text-black">
        ©2023 Elementum. All rights reserved
      </p>
    </footer>
  )
}
