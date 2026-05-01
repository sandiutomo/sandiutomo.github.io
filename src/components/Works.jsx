/* Done when: 3 project cards, 2-col ≥768px, hover lift, tags visible */
export default function Works({ projects }) {
  return (
    <section id="works" className="works" aria-labelledby="works-heading">
      <div className="works__inner">
        <h2 id="works-heading" className="section-heading">Works</h2>
        <div className="works__grid">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              {/* Image: replace with <img src={p.image} alt={p.title} loading="lazy" /> */}
              <div className="project-card__image" aria-hidden="true">
                Project Image
              </div>

              <div className="project-card__body">
                {p.year && <p className="project-card__meta">{p.year}</p>}
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>

                {p.tags.length > 0 && (
                  <ul className="project-card__tags" aria-label="Tags">
                    {p.tags.map(t => <li key={t} className="tag">{t}</li>)}
                  </ul>
                )}

                <a
                  href={p.link}
                  className="project-card__link"
                  aria-label={`View case study: ${p.title}`}
                  {...(p.link !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
