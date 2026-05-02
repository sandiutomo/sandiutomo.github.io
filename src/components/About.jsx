/* Done when: 2-col ≥768px, 1-col mobile, photo placeholder, bio, skill chips */
export default function About({ bio, photo }) {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <div className="about__grid">
          <div className="about__photo-wrap">
            <div className="about__photo about__photo--blob" role="img" aria-label="Profile photo">
              {photo
                ? <img src="/profile-photo.png" alt="Sandi Utomo" className="about__photo-img" />
                : null}
            </div>
          </div>

          <div className="about__content">
            <h2 id="about-heading" className="section-heading">About</h2>
            {bio.map((para, i) => (
              <p key={i} className="about__bio">{para}</p>
            ))}
            <a
  href="https://drive.google.com/file/d/13bsLz8qtZx0iOMk_QDzhXyopSnHtpEKE/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  class="btn-pill-dark about__cv-btn"
>
  Download CV
</a>
          </div>
        </div>
      </div>
    </section>
  )
}
