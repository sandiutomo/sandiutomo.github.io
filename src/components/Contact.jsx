const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const UpworkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.5 7a4.5 4.5 0 0 0-4.12 2.7c-.9-1.08-1.6-2.33-2.05-3.7H7.7v6.15c0 1.2-.63 1.85-1.55 1.85s-1.55-.65-1.55-1.85V6H2v6.28C2 15.1 3.72 17 6.15 17s4.15-1.9 4.15-4.72v-.24c.45.58.96 1.12 1.54 1.58L11 18h2.5l.45-2.4c.77.28 1.63.4 2.55.4 3.1 0 5.5-2.05 5.5-4.95S19.6 7 16.5 7zm0 6.5c-1.1 0-2.02-.32-2.76-.84l.1-.54c.18-.95.52-1.78 1-2.37.47-.58 1.05-.85 1.82-.85 1.45 0 2.45.9 2.45 2.3 0 1.38-1 2.3-2.6 2.3z" />
  </svg>

)

export default function Contact({ email, linkedin, github }) {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact__inner">
        <h2 id="contact-heading" className="section-heading">Get in Touch</h2>
        <p className="contact__subtext">
          Open to new opportunities, collaborations, and interesting conversations.
        </p>

        <a href={`mailto:${email}`} className="contact__email">
          {email}
          <svg
            className="contact__plane"
            width="16" height="16" viewBox="0 0 16 16"
            fill="currentColor" aria-hidden="true"
          >
            <path d="M14.854 1.146a.5.5 0 0 0-.525-.116L.49 6.53a.5.5 0 0 0-.026.93L5 9.5l.5 4.5a.5.5 0 0 0 .906.212L8.5 11l4.5 2.5a.5.5 0 0 0 .724-.447l1-12a.5.5 0 0 0-.87-.907z"/>
          </svg>
        </a>

        <div className="contact__social">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-link">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="contact__social-link">
            <GitHubIcon /> GitHub
          </a>
          <a href="https://www.upwork.com/freelancers/~0137e3e0cbaaeb2a46?mp_source=share" target="_blank" rel="noopener noreferrer" className="contact__social-link">
            <UpworkIcon /> Upwork
          </a>
        </div>
      </div>
    </section>
  )
}
