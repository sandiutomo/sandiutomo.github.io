export default function Hero({ name, role, tagline }) {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-name">
      <div className="hero__inner">
        <div className="hero__avatar" aria-hidden="true">
          <img src="/initial-logo-liquid-glass-3.png" alt="" />
        </div>

        <h1 id="hero-name" className="hero__name">{name}</h1>
        <p className="hero__eyebrow">{role}</p>
        <p className="hero__tagline">{tagline}</p>

        <div className="hero__ctas">
          <a href="#works"   className="btn-pill">View Works →</a>
          <a href="#contact" className="btn-solid">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
