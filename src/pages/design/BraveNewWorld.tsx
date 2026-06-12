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

export default function BraveNewWorld() {
  const [backHovered, setBackHovered] = useState(false)

  return (
    <main className="w-full">

      <img src="/assets/images/bnw-hero.png" alt="Brave New World hero" className="hidden md:block w-full" style={{ objectFit: 'cover', maxHeight: '600px' }} />
      <img src="/assets/images/bnw-hero-mobile.png" alt="Brave New World hero" className="md:hidden w-full" style={{ marginTop: '20px' }} />

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 py-12">

        <FadeIn>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 100px)', color: '#111E33', lineHeight: '1', marginBottom: '8px' }}>BRAVE NEW WORLD</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 20px)', color: '#111E33', marginBottom: '60px' }}>Digital Design, Creative Software Usage</p>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '24px' }}>Overview</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6', marginBottom: '60px' }}>
            Before this project, I had only barely used Adobe softwares to digitally design. I have the background of a traditional artists—
            <Link to="/art-gallery" style={{ color: '#1D7194', textDecoration: 'underline' }}>oil pants, acrylics, watercolor, etc</Link>
            . So, when tasked in one of my design classes to redesign a book cover on my laptop, I was intimidated. Through lots of trail, error, and hours on YouTube, I created every element of this cover from scratch, only using Adobe Indesign and Photoshop. As a big fan of Brave New World, my goal was to illustrate the idea of "the man" being part-of, consumed, and controlled by the societal machine described in the book. Accompanying my book cover design, I created a square version for digital audio books and various Photoshop mock-ups with both design variations.
          </p>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <div className="hidden md:block mb-16">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-8">
                <img src="/assets/images/book-cover.png" alt="Book cover" className="w-full h-auto" />
                <img src="/assets/images/tablet-mockup.png" alt="Tablet mockup" className="w-full h-auto" />
              </div>
              <div className="flex flex-col gap-8">
                <img src="/assets/images/audiobook-cover.png" alt="Audiobook cover" className="w-full h-auto" />
                <img src="/assets/images/phone-audiobook-mockup.png" alt="Phone audiobook mockup" className="w-full h-auto" />
              </div>
            </div>
          </div>
          <div className="md:hidden flex flex-col gap-8 mb-10">
            <img src="/assets/images/book-cover.png" alt="Book cover" className="w-full" />
            <img src="/assets/images/audiobook-cover.png" alt="Audiobook cover" className="w-full" />
            <img src="/assets/images/tablet-mockup.png" alt="Tablet mockup" className="w-full" />
            <img src="/assets/images/phone-audiobook-mockup.png" alt="Phone audiobook mockup" className="w-full" />
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