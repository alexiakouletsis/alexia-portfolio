import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', path: '/', underline: 'home-navbar-underline.svg' },
  { label: 'Projects', path: '/projects', underline: 'projects-navbar-underline.svg' },
  { label: 'Research', path: '/research', underline: 'research-navbar-underline.svg' },
  { label: 'Art Gallery', path: '/art-gallery', underline: 'artgallery-navbar-underline.svg' },
  { label: 'Etc.', path: '/etc', underline: 'etc-navbar-underline.svg' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden md:flex justify-end items-center px-10 pt-6 pb-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="ml-8 text-sm tracking-widest uppercase relative group font-[family-name:var(--font-display)] text-[#111E33]"
          >
            {link.label}
            <span
              className={`
                absolute -bottom-2 left-0 w-full h-[8px]
                transition-opacity duration-[1000ms]
                ${location.pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
              `}
            >
              <img
                src={`/assets/images/${link.underline}`}
                alt=""
                className="w-full h-full"
              />
            </span>
          </Link>
        ))}
      </nav>

      {/* Mobile navbar */}
      <nav className="md:hidden flex justify-end items-center px-6 pt-6">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <img
            src="/assets/images/mobile-navbar-hamburger.svg"
            alt="Open menu"
            className="w-8 h-8"
          />
        </button>
      </nav>

      {/* Full screen overlay menu */}
      <div
        className={`
          fixed inset-0 z-50 flex flex-col items-center justify-center
          transition-opacity duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{ backgroundImage: "url('/assets/images/bg-texture.png')" }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6"
          aria-label="Close menu"
        >
          <img
            src="/assets/images/x-out-navbar-mobile.svg"
            alt="Close menu"
            className="w-8 h-8"
          />
        </button>

        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className="text-4xl tracking-widest uppercase text-[#111E33] my-4 font-[family-name:var(--font-display)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}