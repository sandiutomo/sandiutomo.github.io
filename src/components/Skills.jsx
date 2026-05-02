const CERT_PLACEHOLDERS = [
  { label: 'Google Cloud Certified Generative AI Leader', issuer: 'Google Cloud · 2025', image: '/certs/generative-ai-leader-certification.png', link: 'https://www.credly.com/badges/3a461a52-8191-4b0d-92fb-ebf66d2164ee/public_url' },
  { label: 'Braze Certified Technical Marketing Expert', issuer: 'Braze · 2025', image: '/certs/braze-certified-technical-marketing-expert.png', link: 'https://www.credly.com/badges/d4cd02c0-c841-4638-814c-ee6eafe25508/public_url' },
  { label: 'Braze Certified Marketing Strategy Expert', issuer: 'Braze · 2025', image: '/certs/braze-marketing-strategy-expert.png', link: 'https://www.credly.com/badges/ffdd28d9-cdcb-46c8-8cb6-47f4d7f578bd/public_url' },
  { label: 'View other certifications on Credly →', image: '/logo/Credly-by-Pearson-HQ-Logo.png' , link: 'https://www.credly.com/users/sandi-utomo', wallet: true },
  { label: 'View other certifications on Google Drive →', image: '/logo/google-drive-logo.webp' , link: 'https://drive.google.com/drive/folders/1O_fHG8cVSo-iaxTMWez4fA871nr0IsbT?usp=sharing', wallet: true },
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
                c.wallet
                  ? (
                    <li key={i}>
                      <a href={c.link} className="skills__cert-wallet" target="_blank" rel="noopener noreferrer">
                        {c.label}
                        {c.image && <img src={c.image} alt="Credly" className="skills__cert-wallet-logo" loading="lazy" />}
                      </a>
                    </li>
                  ) : (
                    <li key={i} className="skills__cert-item">
                      {c.image && <img src={c.image} alt={c.label} className="skills__cert-badge" loading="lazy" />}
                      <div className="skills__cert-text">
                        {c.link
                          ? <a href={c.link} className="skills__cert-name skills__cert-name--link" target="_blank" rel="noopener noreferrer">{c.label}</a>
                          : <span className="skills__cert-name">{c.label}</span>}
                        {c.issuer && <span className="skills__cert-issuer">{c.issuer}</span>}
                      </div>
                    </li>
                  )
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
