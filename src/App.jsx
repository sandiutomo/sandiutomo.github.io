import { useEffect } from 'react'
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
const role     = 'Analytics, Strategy & Solutions Leader'
const tagline  = 'I bridge business, data, and technology to build solutions that matter.'

const bio = [
  'Hi, I’m Sandi Utomo, a Solutions Architect based in Jakarta with experience turning business needs into practical, high-impact digital solutions.',
  'I work at the intersection of product, data, and technology, helping organizations design scalable platforms, improve customer experiences, and make smarter decisions through analytics and modern architecture.',
  'With a background spanning solution consulting, marketing technology, and analytics leadership, I bring both strategic thinking and hands-on execution to every project, driving growth, efficiency, and long-term value.',

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
    label: 'Strategy & Growth',
    items: [
      'Product Strategy',
      'Business Consulting',
      'Revenue Growth',
    ],
  },
  {
    label: 'Solutions & Delivery',
    items: [
      'Solution Architecture',
      'Pre-Sales',
      'Project Delivery',
    ],
  },
  {
    label: 'Data & Optimization',
    items: [
      'Digital Analytics',
      'Conversion Optimization',
      'Performance Measurement',
    ],
  },
  {
    label: 'Marketing Technology',
    items: [
      'Martech Platforms',
      'Customer Data Strategy',
      'Solution Implementation',
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
    image: null, // drop file to public/projects/firebraze.jpg then set: '/projects/firebraze.jpg'
  },
  {
    title: 'MarketApp | Analytics & Martech Sample App',
    desc:  'Sample Android e-commerce app that showcases multiple most popular analytics and martech platforms in action.',
    tags:  ['Martech', 'Mobile', 'Analytics'],
    link:  'https://github.com/sandiutomo/marketapp-suite-android',
    year:  '2026',
    image: null, // drop file to public/projects/marketapp.jpg then set: '/projects/marketapp.jpg'
  },
  {
    title: 'Marketing Mix Model Studio',
    desc:  'Prototype dashboard and learning reference for Marketing Mix Modeling with Meridian framework.',
    tags:  ['Marketing Mix Modeling', 'Analytics', 'Dashboard'],
    link:  'https://github.com/sandiutomo/marketingmixmodeling-meridian-demo',
    year:  '2026',
    image: null, // drop file to public/projects/mmm.jpg then set: '/projects/mmm.jpg'
  },
]

const caseStudies = [
  {
    title: 'Case Study Title',
    desc:  'Placeholder — describe the problem, approach, and outcome. Update manually.',
    tags:  ['Strategy', 'Analytics'],
    link:  '#',
    year:  '20XX',
    image: null, // drop file to public/cases/case1.jpg then set: '/cases/case1.jpg'
  },
  {
    title: 'Case Study Title',
    desc:  'Placeholder — describe the problem, approach, and outcome. Update manually.',
    tags:  ['Martech', 'Data'],
    link:  '#',
    year:  '20XX',
    image: null, // drop file to public/cases/case2.jpg then set: '/cases/case2.jpg'
  },
]

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('section:not(.hero)')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.06 })
    els.forEach(el => { el.classList.add('reveal'); io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Hero name={name} initials={initials} role={role} tagline={tagline} />
        <About bio={bio} photo="/profile-photo.png" />{/* drop photo.jpg to public/ then set photo="/photo.jpg" */}
        <Experience jobs={jobs} />
        <Skills categories={skillCategories} />
        <Works projects={projects} />
        <CaseStudies studies={caseStudies} />
        <Contact email={email} linkedin={linkedin} github={github} />
      </main>
      <Footer name={name} />
    </>
  )
}
