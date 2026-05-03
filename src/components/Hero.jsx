import SuLogo from './SuLogo.jsx'

export default function Hero({ name, hero_title, role, tagline }) {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-name">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__profile-card">
            <div className="hero__profile-photo" aria-hidden="true">
              <img src="/profile-photo.webp" alt="" />
            </div>
            <div className="hero__profile-meta">
              <span className="hero__profile-name">{name}</span>
              <div className="hero__profile-tags">
                <span className="hero__profile-tag">💼 9+ years</span>
                <span className="hero__profile-tag">🇮🇩 Jakarta</span>
              </div>
            </div>
          </div>
          <h1 id="hero-name" className="hero__name">{hero_title}</h1>
          <p className="hero__eyebrow"></p>
          <p className="hero__tagline">{tagline}</p>
          <div className="hero__ctas">
            <a href="#works" className="btn-pill">View Works →</a>
            <a href="#contact" className="btn-solid">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
