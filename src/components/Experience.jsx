export default function Experience({ jobs }) {
  return (
    <section id="experience" className="experience" aria-labelledby="experience-heading">
      <div className="experience__inner">
        <h2 id="experience-heading" className="section-heading">Experience</h2>
        <ol className="experience__list">
          {jobs.map((job, i) => (
            <li key={i} className="experience__item">
              <span className="experience__dot" aria-hidden="true" />
              <div className="experience__content">
                <p className="experience__period">{job.period}</p>
                <p className="experience__role">{job.role}</p>
                <p className="experience__company">{job.company}</p>
                {job.desc && <p className="experience__desc">{job.desc}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
