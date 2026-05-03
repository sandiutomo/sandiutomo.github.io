import { useRef } from 'react'

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Carousel({ className, children }) {
  const ref = useRef(null)
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 380, behavior: 'smooth' })

  return (
    <div className="carousel-wrap">
      <div className={className} ref={ref}>
        {children}
      </div>
      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={() => scroll(-1)} aria-label="Previous">
          <ChevronLeft />
        </button>
        <button className="carousel-arrow" onClick={() => scroll(1)} aria-label="Next">
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
