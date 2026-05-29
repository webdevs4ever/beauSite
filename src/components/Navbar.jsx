import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ANCHOR_LINKS = [
  { label: 'What We Do', href: '#services' },
  { label: 'About Us',   href: '#about' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleAnchor = (href) => {
    setMenuOpen(false)
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: href } })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-xl font-bold text-stone-900 leading-tight">
          Zimny McCoy, <span className="text-brand-bronze">PLLC</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {ANCHOR_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleAnchor(href)}
              className="text-sm font-medium text-stone-600 hover:text-brand-bronze transition-colors"
            >
              {label}
            </button>
          ))}
          <Link
            to="/login"
            className="text-sm font-medium text-stone-600 hover:text-brand-bronze transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/special-needs"
            className="bg-brand-bronze hover:bg-brand-bronze-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Schedule Consultation
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-stone-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-cream border-t border-stone-200 px-4 py-4 flex flex-col gap-4">
          {ANCHOR_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleAnchor(href)}
              className="text-left text-sm font-medium text-stone-700 hover:text-brand-bronze transition-colors"
            >
              {label}
            </button>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-stone-700 hover:text-brand-bronze transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/special-needs"
            onClick={() => setMenuOpen(false)}
            className="bg-brand-bronze text-white text-sm font-semibold px-5 py-3 rounded-xl text-center transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
