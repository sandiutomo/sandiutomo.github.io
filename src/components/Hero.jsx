/* Done when: full-height dark, name/role/tagline visible, 2 CTAs, avatar placeholder */
export default function Hero({ name, initials, role, tagline }) {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-name">
      <div className="hero__inner">
        {/* Avatar: replace aria-label text with img tag when you have a photo */}
        <div className="hero__avatar" aria-hidden="true">
          {initials}
        </div>

        <p className="hero__eyebrow">{role}</p>
        <h1 id="hero-name" className="hero__name">{name}</h1>
        <p className="hero__tagline">{tagline}</p>

        <div className="hero__ctas">
          <a href="#works"   className="btn-pill">View Works →</a>
          <a href="#contact" className="btn-solid">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
