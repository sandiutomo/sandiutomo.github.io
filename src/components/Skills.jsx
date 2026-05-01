export default function Skills({ categories }) {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="skills__inner">
        <h2 id="skills-heading" className="section-heading">Skills</h2>
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
    </section>
  )
}
