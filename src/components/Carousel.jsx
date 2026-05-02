import { useRef } from 'react'

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Carousel({ className, children }) {
  const ref = useRef(null)
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 380, behavior: 'smooth' })

  return (
    <div className="carousel-wrap">
      <button className="carousel-arrow carousel-arrow--prev" onClick={() => scroll(-1)} aria-label="Previous">
        <ChevronLeft />
      </button>
      <div className={className} ref={ref}>
        {children}
      </div>
      <button className="carousel-arrow carousel-arrow--next" onClick={() => scroll(1)} aria-label="Next">
        <ChevronRight />
      </button>
    </div>
  )
}
