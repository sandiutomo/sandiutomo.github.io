import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Works from './components/Works.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const name     = 'Sandi Utomo'
const initials = 'SU'
const role     = 'Solutions Architect'
const tagline  = 'I develop product and solutions that people actually want to use.'

const bio = [
  'Solutions Architect based in Jakarta. I thrive at the intersection of Marketing, Data, and Technology.',
  'I bring deep expertise in data-driven strategy, marketing technology, and scalable technical solutions, helping businesses turn complex challenges into practical & impactful outcomes; driving growth, efficiency, and long-term success.',
]

const email    = 'hi.sandiutomo@gmail.com'
const linkedin = 'https://linkedin.com/in/sandiutomo'
const github   = 'https://github.com/sandiutomo'

const jobs = [
  {
    period:  '2024 – Present',
    role:    'Solutions Architect',
    company: 'Merkle Indonesia (Part of Dentsu Group)',
    desc:    'Designed scalable enterprise solutions while guiding executive stakeholders on investment priorities, platform choices, and delivery strategy.',
  },
  {
    period:  '2021 – 2024',
    role:    'Lead, Analytics',
    company: 'Merkle Indonesia (Part of Dentsu Group)',
    desc:    'Combined partnership growth, client advisory, and analytics execution to secure 4 new logos, maintain ~85% YoY renewals, mentor 30+ team members, and deliver strong conversion improvements.',
  },
  {
    period:  '2019 – 2021',
    role:    'Analytics Specialist',
    company: 'iProspect Indonesia (Part of Dentsu Group)',
    desc:    'Managed strategic analytics delivery across enterprise accounts, achieving ~95% client retention, strengthening data integrity by 40%, and driving ROI gains through attribution and monetization improvements.',
  },
  {
  period:  '2017 – 2019',
  role:    'Earlier Experience',
  company: 'Various Companies',
  desc:    'Built early career foundation across digital analytics, social media growth, and performance reporting, delivering multi-channel insights, GA implementations, and measurable audience acquisition gains.',
  },
]

const skillCategories = [
  {
    label: 'Strategy & Architecture',
    items: [
      'Solution Architecture',
      'Enterprise Solutions',
      'Technology Strategy',
      'Roadmapping',
      'Stakeholder Management',
    ],
  },
  {
    label: 'Product & Growth',
    items: [
      'Product Strategy',
      'Go-to-Market',
      'Client Consulting',
      'Business Growth',
      'Pre-Sales',
    ],
  },
  {
    label: 'Analytics & Data',
    items: [
      'Digital Analytics',
      'Data Analysis',
      'Dashboarding',
      'Data Visualization',
      'Attribution',
    ],
  },
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

const caseStudies = [
  {
    title: 'Case Study Title',
    desc:  'Placeholder — describe the problem, approach, and outcome. Update manually.',
    tags:  ['Strategy', 'Analytics'],
    link:  '#',
    year:  '20XX',
  },
  {
    title: 'Case Study Title',
    desc:  'Placeholder — describe the problem, approach, and outcome. Update manually.',
    tags:  ['Martech', 'Data'],
    link:  '#',
    year:  '20XX',
  },
]

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Hero name={name} initials={initials} role={role} tagline={tagline} />
        <About bio={bio} />
        <Experience jobs={jobs} />
        <Skills categories={skillCategories} />
        <Works projects={projects} />
        <CaseStudies studies={caseStudies} />
        <Contact email={email} linkedin={linkedin} github={github} />
      </main>
      <Footer name={name} linkedin={linkedin} github={github} />
    </>
  )
}
