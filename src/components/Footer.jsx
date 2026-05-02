/* Done when: copyright, social links, back-to-top arrow all visible */
const handleTop = (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {new Date().getFullYear()} {name} · Built with React</p>
        <a href="#" onClick={handleTop} className="footer__link" aria-label="Back to top">↑ Top</a>
      </div>
    </footer>
  )
}
