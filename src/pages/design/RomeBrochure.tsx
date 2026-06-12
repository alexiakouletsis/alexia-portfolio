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

export default function RomeBrochure() {
  const [backHovered, setBackHovered] = useState(false)

  return (
    <main className="w-full">

      <img src="/assets/images/rome-hero.png" alt="Rome Brochure hero" className="hidden md:block w-full" style={{ objectFit: 'cover', maxHeight: '600px' }} />
      <img src="/assets/images/rome-hero-mobile.png" alt="Rome Brochure hero" className="md:hidden w-full" style={{ marginTop: '20px' }} />

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 py-12">

        <FadeIn>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 100px)', color: '#111E33', lineHeight: '1', marginBottom: '8px' }}>ROME BROCHURE</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 20px)', color: '#111E33', marginBottom: '60px' }}>Digital Design, Creative Software Usage, Typography</p>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '24px' }}>Overview</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6', marginBottom: '32px' }}>
            Utilizing softwares like Adobe Illustrator and Adobe InDesign, I drew upon my knowledge as a previous study abroad student to create the ultimate travel brochure for visiting Rome, Italy. My goal while creating this was to cater towards college-aged students who are looking to either travel to or also study abroad in Rome. I experimented with type faces that were elegant and ancient-feeling, yet still easily legible. I also had fun playing with the format of column headers and adjusting my color palette to be both clean and visually engaging. Almost all images used in this project were taken by me during my study abroad experience. I additionally reused elements of my brochure's cover to create a poster that further markets my work.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-4 mb-16">
            <a href="/assets/images/Rome-Brochure.pdf" download style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 22px)', color: '#1D7194', textDecoration: 'underline' }}>Download the Brochure</a>
            <a href="/assets/images/Rome-Poster.pdf" download style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 22px)', color: '#1D7194', textDecoration: 'underline' }}>Download the Poster</a>
          </div>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <div className="hidden md:block mb-16">
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="grid grid-cols-3 gap-4 w-full">
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Inner Right Tab</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Back Cover</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Cover</p>
              </div>
              <img src="/assets/images/rome-brochure-outside.png" alt="Brochure outside" className="w-full" />
            </div>
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="grid grid-cols-3 gap-4 w-full">
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Left</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Middle</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Right</p>
              </div>
              <img src="/assets/images/rome-brochure-inside.png" alt="Brochure inside" className="w-full" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/images/rome-poster.png" alt="Rome poster" style={{ width: '55%', height: 'auto' }} />
            </div>
          </div>
          <div className="md:hidden flex flex-col gap-8 mb-10">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#111E33', textAlign: 'center' }}>Inner Right Tab</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#111E33', textAlign: 'center' }}>Back Cover</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#111E33', textAlign: 'center' }}>Cover</p>
              </div>
              <img src="/assets/images/rome-brochure-outside.png" alt="Brochure outside" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#111E33', textAlign: 'center' }}>Left</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#111E33', textAlign: 'center' }}>Middle</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#111E33', textAlign: 'center' }}>Right</p>
              </div>
              <img src="/assets/images/rome-brochure-inside.png" alt="Brochure inside" className="w-full" />
            </div>
            <img src="/assets/images/rome-poster.png" alt="Rome poster" className="w-full" />
          </div>
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