import { useState, useEffect, useRef, useCallback } from 'react'
import SuLogo from './SuLogo.jsx'

const links = [
  { label: 'About Me',     href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#works' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact',      href: '#contact' },
]

export default function Nav({ name, role }) {
  const [open, setOpen]         = useState(false)
  const [scales, setScales]     = useState(links.map(() => 1))
  const [activeHref, setActiveHref] = useState('')
  const [progress, setProgress] = useState(0)
  const [pastHero, setPastHero] = useState(false)
  const linkRefs = useRef([])

  const handleDockMove = useCallback((e) => {
    setScales(
      linkRefs.current.map(el => {
        if (!el) return 1
        const rect = el.getBoundingClientRect()
        const cx   = rect.left + rect.width / 2
        const dist = Math.abs(e.clientX - cx)
        const range = 88
        if (dist > range) return 1
        return 1 + 0.45 * Math.pow(1 - dist / range, 1.5)
      })
    )
  }, [])

  const handleDockLeave = useCallback(() => {
    setScales(links.map(() => 1))
  }, [])

  /* Scroll progress + past-hero detection (combined for one listener) */
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      setPastHero(window.scrollY > window.innerHeight * 0.85)
      if (max > 0 && window.scrollY >= max - 40) setActiveHref('#contact')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Active section highlight via IntersectionObserver */
  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveHref('#' + entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="nav">
      <div className="nav__progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className="nav__inner">

        {/* Brand: logo always visible; name+role fades in after hero */}
        <a href="#" className="nav__brand" aria-label="Back to top">
          <SuLogo size={28} />
          <span
            className={`nav__identity${pastHero ? ' nav__identity--visible' : ''}`}
            aria-hidden="true"
          >
            <span className="nav__identity-name">{name}</span>
            <span className="nav__identity-sep" />
            <span className="nav__identity-role">{role}</span>
          </span>
        </a>

        {/* Desktop links — dock magnification */}
        <nav
          className="nav__links"
          aria-label="Primary navigation"
          onMouseMove={handleDockMove}
          onMouseLeave={handleDockLeave}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav__link${activeHref === l.href ? ' nav__link--active' : ''}`}
              ref={el => { linkRefs.current[i] = el }}
              style={{ transform: `scale(${scales[i].toFixed(3)})` }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className={`nav__hamburger${open ? ' nav__hamburger--open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="nav__hamburger-icon" aria-hidden="true">
            {open ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
                <rect y="0"    width="18" height="1.5" rx="0.75"/>
                <rect y="5.25" width="13" height="1.5" rx="0.75"/>
                <rect y="10.5" width="18" height="1.5" rx="0.75"/>
              </svg>
            )}
          </span>
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
