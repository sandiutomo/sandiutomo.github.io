/* Done when: glass blur visible, 3 links scroll sections, hamburger on <768px */
import { useState, useEffect } from 'react'

const links = [
  { label: 'About',   href: '#about' },
  { label: 'Works',   href: '#works' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#" className="nav__brand" aria-label="Back to top">S.U.</a>

        {/* Desktop links */}
        <nav className="nav__links" aria-label="Primary navigation">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className="nav__hamburger"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor" aria-hidden="true">
              <rect y="0"    width="20" height="1.5" rx="0.75"/>
              <rect y="6.25" width="20" height="1.5" rx="0.75"/>
              <rect y="12.5" width="20" height="1.5" rx="0.75"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <nav className="nav__mobile" aria-label="Mobile navigation">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav__mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
