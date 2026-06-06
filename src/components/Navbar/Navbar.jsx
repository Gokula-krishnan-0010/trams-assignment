import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const navLinks = ['Home', 'Studio', 'Services', 'Contact', "FAQ's"]

export default function Navbar() {
  return (
    <nav className="relative flex h-[100px] w-full items-center bg-white px-[160px]">
      <p className="font-bold text-[28px] leading-[46px] text-black">Elementum</p>

      <ul className="absolute left-1/2 flex -translate-x-1/2 gap-[64px]">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(/[^a-z]/g, '')}`}
              className="font-body text-[18px] font-medium leading-[24px] text-black"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="ml-auto">
        <HamburgerMenu />
      </div>
    </nav>
  )
}
