/* Done when: copyright, social links, back-to-top arrow all visible */
const handleTop = (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer({ name, email, linkedin, github }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {new Date().getFullYear()} {name}</p>
        <nav className="footer__links" aria-label="Footer navigation">
          <a href={`mailto:${email}`} className="footer__link">Email</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
          <a href="#" onClick={handleTop} className="footer__link" aria-label="Back to top">↑ Top</a>
        </nav>
      </div>
    </footer>
  )
}
