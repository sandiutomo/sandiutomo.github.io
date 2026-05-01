const CERT_PLACEHOLDERS = [
  { label: 'Certification 1', issuer: 'Issuer · Year' },
  { label: 'Certification 2', issuer: 'Issuer · Year' },
  { label: 'Certification 3', issuer: 'Issuer · Year' },
  { label: 'Certification 4', issuer: 'Issuer · Year' },
  { label: 'Certification 5', issuer: 'Issuer · Year' },
]

export default function Skills({ categories, certifications = CERT_PLACEHOLDERS }) {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="skills__inner">
        <h2 id="skills-heading" className="section-heading">Skills &amp; Certifications</h2>
        <div className="skills__columns">
          <div>
            <div className="skills__grid">
              {categories.map((cat, i) => (
                <div key={i} className="skills__category">
                  <p className="skills__category-label">{cat.label}</p>
                  <ul className="skills__list">
                    {cat.items.map(item => (
                      <li key={item} className="skills__item">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="skills__category-label">Certifications</p>
            <ul className="skills__certs">
              {certifications.map((c, i) => (
                <li key={i} className="skills__cert-item">
                  <span className="skills__cert-name">{c.label}</span>
                  <span className="skills__cert-issuer">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
