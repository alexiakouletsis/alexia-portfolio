import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = React.useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function Semester01() {
  const [backHovered, setBackHovered] = useState(false)

  return (
    <main className="w-full">

      <img src="/assets/images/sem01-hero.png" alt="Semester 01 hero" className="hidden md:block w-full" style={{ objectFit: 'cover', maxHeight: '600px' }} />
      <img src="/assets/images/sem01-hero-mobile.png" alt="Semester 01 hero" className="md:hidden w-full" style={{ marginTop: '20px' }} />

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 py-12">

        <FadeIn>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 100px)', color: '#111E33', lineHeight: '1', marginBottom: '8px' }}>SEMESTER 01</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 20px)', color: '#111E33', marginBottom: '60px' }}>Digital Design, Creative Software Usage, Abstract Visual Concepts</p>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '24px' }}>Overview</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6', marginBottom: '32px' }}>
            Through Northeastern's{' '}
            <a href="https://nuin.northeastern.edu/italy/" target="_blank" rel="noopener noreferrer" style={{ color: '#1D7194', textDecoration: 'underline' }}>NU.in program</a>
            ,  my first semester of college was spent studying abroad in Rome, Italy. The PDF bellow encapsulates all of the design work I learned and accomplished under the guidance of Italian expertise. Some of the work includes playing with visual weight, color theory, image abstraction, pattern association, and patter creation. Flip through and enjoy!
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-16">
            <a href="/assets/images/Alexia-Kouletsis-Semester-1-Final_compressed.pdf" download style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 22px)', color: '#1D7194', textDecoration: 'underline' }}>
              Download the PDF
            </a>
          </div>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <iframe src="/assets/images/Alexia-Kouletsis-Semester-1-Final_compressed.pdf" className="w-full mb-16" style={{ height: '800px', border: 'none' }} title="Semester 01 PDF" />
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-12" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-6" />

        <FadeIn>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3"
            onMouseEnter={() => setBackHovered(true)}
            onMouseLeave={() => setBackHovered(false)}
            style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 22px)', color: '#111E33', textDecoration: backHovered ? 'underline' : 'none' }}
          >
            <img src="/assets/images/right-to-left-arrow.svg" alt="" style={{ width: backHovered ? '48px' : '40px', transition: 'width 300ms ease' }} />
            Click to go back to Projects
          </Link>
        </FadeIn>

      </div>
    </main>
  )
}