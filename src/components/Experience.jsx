export default function Experience({ jobs }) {
  return (
    <section id="experience" className="experience" aria-labelledby="experience-heading">
      <div className="experience__inner">
        <h2 id="experience-heading" className="section-heading">Work Experience</h2>
        <ol className="experience__list">
          {jobs.map((job, i) => (
            <li key={i} className="experience__item">
              <span className="experience__dot" aria-hidden="true" />
              <div className="experience__content">
                <p className="experience__period">{job.period}</p>
                <p className="experience__role">{job.role}</p>
                <div className="experience__company-row">
                  {job.logo && (
                    <img
                      className="experience__company-logo"
                      src={job.logo}
                      alt=""
                      aria-hidden="true"
                    />
                  )}
                  <span className="experience__company">{job.company}</span>
                </div>
                {job.desc && <p className="experience__desc">{job.desc}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
