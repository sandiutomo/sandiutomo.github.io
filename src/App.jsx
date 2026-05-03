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

const name = 'Sandi Utomo'
const 
hero_title     = ( 
<> Experienced Analytics <br />
  & Solutions Consultant. </>
)
const initials = 'SU'
const role     = 'Experienced Analytics & Solutions Consultant.'
const tagline  = 'I bring together business, product, data, and technology to create practical solutions that scale.'

const bio = [
  <>
    Hi, I am Sandi Utomo! A Solutions Architect based in Jakarta with{' '}
    <strong>
      9+ years of experience helping businesses turn complex challenges into
      practical digital solutions that deliver measurable impact
    </strong>.
  </>,

  <>
    I work at the intersection of product, data, and technology, partnering
    with organizations to design scalable platforms, improve customer
    experiences, and enable smarter decisions through analytics and modern
    architecture.
  </>,

  <>
    My background spans solution consulting, marketing technology, analytics
    leadership, and enterprise delivery across regional and global brands.{' '}
    <strong>
      I bring a rare mix of strategic thinking and hands-on execution
    </strong>, able to move from executive discussions and solution design to implementation and optimization.
  </>,
]

const email    = 'hi.sandiutomo@gmail.com'
const linkedin = 'https://linkedin.com/in/sandiutomo'
const github   = 'https://github.com/sandiutomo'

const jobs = [
  {
    period:  '2024 – Present',
    role:    'Solutions Architect',
    company: 'Merkle Indonesia (Part of Dentsu Group)',
    logo:    '/logo/merkle-logo.webp',
    desc:    'Lead enterprise solution design across data, martech, analytics, and digital transformation initiatives. Partner with executive stakeholders to shape investment priorities, define scalable architecture, evaluate platforms, and align delivery roadmaps that improve efficiency, customer experience, and long-term business growth.',
  },
  {
    period:  '2021 – 2024',
    role:    'Lead, Analytics',
    company: 'Merkle Indonesia (Part of Dentsu Group)',
    logo:    '/logo/merkle-logo.webp',
    desc:    'Led analytics consulting, strategic partnerships, and client growth across major accounts. Secured 4 new client logos, maintained ~85% YoY renewals, mentored 30+ team members, and delivered measurable gains in conversion, reporting maturity, and marketing performance through data-driven optimization.',
  },
  {
    period:  '2019 – 2021',
    role:    'Analytics Specialist',
    company: 'iProspect Indonesia (Part of Dentsu Group)',
    logo:    '/logo/iprospect-logo.webp',
    desc:    'Managed end-to-end analytics delivery for enterprise brands, driving ~95% client retention through trusted advisory and execution excellence. Improved data accuracy by 40%, strengthened measurement frameworks, and increased ROI through attribution modeling, performance insights, and monetization strategies.',
  },
  {
    period:  '2017 – 2019',
    role:    'Earlier Experiences',
    company: 'Various Companies',
    logo:    null,
    desc:    'Built a strong foundation across digital analytics, social media growth, campaign performance, and web measurement. Delivered Google Analytics implementations, multi-channel reporting, audience acquisition strategies, and actionable insights that supported faster growth and smarter decision-making.',
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
    title: 'Firebraze iOS - Swift',
    desc:  'Reference implementation demonstrating how to integrate Braze measurement with Google Tag Manager using Firebase SDK for iOS apps, enabling scalable event tracking and marketing attribution.',
    tags:  ['Martech', 'iOS Swift', 'Analytics'],
    link:  'https://github.com/sandiutomo/firebraze-ios-swift',
    year:  '2026',
    image: null,
  },
  {
    title: 'MarketApp | Analytics & Martech Sample App',
    desc:  'Sample Android e-commerce application showcasing real-world implementation of leading analytics and martech platforms across user journeys, attribution, and customer engagement.',
    tags:  ['Martech', 'Android Kotlin', 'Analytics'],
    link:  'https://github.com/sandiutomo/marketapp-suite-android',
    year:  '2026',
    image: null,
  },
  {
    title: 'Marketing Mix Model Studio',
    desc:  'Interactive prototype dashboard and learning environment for Marketing Mix Modeling built with Google Meridian framework, designed to explore budget allocation and channel performance impact.',
    tags:  ['Marketing Mix Modeling', 'Analytics', 'Dashboard'],
    link:  'https://github.com/sandiutomo/marketingmixmodeling-meridian-demo',
    year:  '2026',
    image: '/projects/MMM-studio-project.webp',
  },
  {
    title: 'Explore More on GitHub →',
    desc:  null,
    tags:  [null, null, null],
    link:  'https://github.com/sandiutomo',
    year:  null,
    image: '/projects/github-placement.webp',
  },
]

const caseStudies = [
  {
    title: 'Enterprise Analytics Transformation',
    desc: 'Unified fragmented reporting into one decision-ready measurement framework.',
    tags: ['Analytics', 'Strategy'],
    link: '#',
    year: '2025',
    image: null
  },
  {
    title: 'Martech Enablement',
    desc: 'Modernized customer data flows and activation processes across channels.',
    tags: ['Martech', 'Data'],
    link: '#',
    year: '2024',
    image: null
  }
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
      <Nav name={name} role={role} />
      <main id="main-content">
        <Hero hero_title={hero_title} name={name} role={role} tagline={tagline} />
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
