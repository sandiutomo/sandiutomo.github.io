import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

/* ── Placeholder data — replace with your own ── */
const name     = 'Sandi Utomo'
const initials = 'S.U.'
const role     = 'Solutions Architect'
const tagline  = 'I develop product and solutions that people actually want to use.'

const bio = [
  'Solutions Architect based in Jakarta. I thrive at the intersection of Marketing, Data, and Technology.',
  'I bring deep expertise in data-driven strategy, marketing technology, and scalable technical solutions, helping businesses turn complex challenges into practical & impactful outcomes; driving growth, efficiency, and long-term success.',
]

const email    = 'hi.sandiutomo@gmail.com'
const linkedin = 'https://linkedin.com/in/sandiutomo'
const github   = 'https://github.com/sandiutomo'

const skills = [
  'Product Strategy', 'Solutions Design', 'Analytics', 'Martech',
  'Data Analysis', 'Data Visualization', 'Dashboarding',
]

const projects = [
  {
    title: 'Firebraze iOS Swift',
    desc:  'Reference / simulation method on how to implement Braze measurement with Google Tag Manager leveraging Firebase SDK on mobile apps.',
    tags:  ['Martech', 'Mobile', 'Analytics'],
    link:  'https://github.com/sandiutomo/firebraze-ios-swift',
    year:  '2026',
  },
  {
    title: 'MarketApp | Analytics & Martech Sample App',
    desc:  'Sample Android e-commerce app that showcases multiple most popular analytics and martech platforms in action.',
    tags:  ['Martech', 'Mobile', 'Analytics'],
    link:  'https://github.com/sandiutomo/marketapp-suite-android',
    year:  '2026',
  },
  {
    title: 'Marketing Mix Model Studio',
    desc:  'Prototype dashboard and learning reference for Marketing Mix Modeling with Meridian framework.',
    tags:  ['Marketing Mix Modeling', 'Analytics', 'Dashboard'],
    link:  'https://github.com/sandiutomo/marketingmixmodeling-meridian-demo',
    year:  '2026',
  },
]

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Hero name={name} initials={initials} role={role} tagline={tagline} />
        <About bio={bio} skills={skills} />
        <Works projects={projects} />
        <Contact email={email} linkedin={linkedin} github={github} />
      </main>
      <Footer name={name} linkedin={linkedin} github={github} />
    </>
  )
}
