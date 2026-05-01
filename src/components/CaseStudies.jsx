export default function CaseStudies({ studies }) {
  return (
    <section id="case-studies" className="case-studies" aria-labelledby="case-studies-heading">
      <div className="case-studies__inner">
        <h2 id="case-studies-heading" className="section-heading">Case Studies</h2>
        <div className="case-studies__grid">
          {studies.map((s, i) => (
            <article key={i} className="project-card">
              <div className="project-card__image" aria-hidden="true">
                Case Study Image
              </div>
              <div className="project-card__body">
                {s.year && <p className="project-card__meta">{s.year}</p>}
                <h3 className="project-card__title">{s.title}</h3>
                <p className="project-card__desc">{s.desc}</p>
                {s.tags.length > 0 && (
                  <ul className="project-card__tags" aria-label="Tags">
                    {s.tags.map(t => <li key={t} className="tag">{t}</li>)}
                  </ul>
                )}
                <a
                  href={s.link}
                  className="project-card__link"
                  aria-label={`View case study: ${s.title}`}
                  {...(s.link !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  View case study →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
