export default function FooterColumn({ heading, links }) {
  return (
    <div className="flex flex-col">
      <p className="mb-[39px] font-display text-[22px] leading-[30px] text-black">
        {heading}
      </p>
      <ul className="flex flex-col gap-[30px]">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="font-body text-[20px] leading-[30px] text-black"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
