/* Done when: 2-col ≥768px, 1-col mobile, photo placeholder, bio, skill chips */
export default function About({ bio, skills }) {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <div className="about__grid">
          {/* Photo: replace inner div with <img src="..." alt="Sandi Utomo" /> */}
          <div className="about__photo-wrap">
            <div className="about__photo" role="img" aria-label="Profile photo — placeholder">
              Photo
            </div>
          </div>

          <div className="about__content">
            <h2 id="about-heading" className="section-heading">About</h2>
            {bio.map((para, i) => (
              <p key={i} className="about__bio">{para}</p>
            ))}
            <p className="about__skills-label">Expertise</p>
            <ul className="about__skills" aria-label="Skills">
              {skills.map(s => (
                <li key={s} className="skill-chip">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
