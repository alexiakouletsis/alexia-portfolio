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

export default function DesignDossiers() {
  const [backHovered, setBackHovered] = useState(false)

  return (
    <main className="w-full">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 py-12">

        <FadeIn>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 100px)', color: '#111E33', lineHeight: '1', marginBottom: '60px', textAlign: 'center' }}>DESIGN DOSSIERS</h1>
        </FadeIn>

        <FadeIn>
          <h2
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(18px, 2.5vw, 38px)',
              fontWeight: 'bold',
              color: '#111E33',
              marginBottom: '16px',
            }}
          >
            Design in Education Research
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(12px, 1.8vw, 28px)',
              color: '#111E33',
              lineHeight: '1.6',
              marginBottom: '24px',
            }}
          >
            Designing the Thinkers of Tomorrow is a research dossier that traces American public education from its Puritan roots to its Prussian-modeled present. It analyses how the physical and technological design of schools reflect opportunity and educational disparities in society. Pulling from theorists like Don Norman, Arturo Escobar, and Donna Haraway, it looks at how today's classrooms, devices, and AI tools either build or kill the capacity for curiosity and critical thought. It closes with a speculative question: if public education was designed, why can't it can be redesigned?
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-8">
            <a
              href="/assets/images/Designing_the_Thinkers_of_Tomorrow.pdf"
              download
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(12px, 1.5vw, 22px)',
                color: '#1D7194',
                textDecoration: 'underline',
              }}
            >
              Click to download
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <iframe
            src="/assets/images/Designing_the_Thinkers_of_Tomorrow.pdf"
            className="w-full mb-16"
            style={{ height: '800px', border: 'none' }}
            title="Designing the Thinkers of Tomorrow"
          />
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(18px, 2.5vw, 38px)',
              fontWeight: 'bold',
              color: '#111E33',
              marginBottom: '16px',
            }}
          >
            My Favorite Thing
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(12px, 1.8vw, 28px)',
              color: '#111E33',
              lineHeight: '1.6',
              marginBottom: '24px',
            }}
          >
            When I studied abroad in Rome, Italy, my roommates knew about my coffee addiction and got me a Bialetti Moka Express for my birthday. That little stovetop pot benefitted not only my finances while I was abroad, but also all of coffee-making history. This dossier traces the Moka Express from Alfonso Bialetti's laundry-inspired cast-aluminum invention in 1933 to its status as a global kitchen staple, and explores the design details that make it so intuitive to use. Writing this project encapsulated my memories of Rome into applicable design theory. I now look at my moka pot with love for my friends and admiration for its complexity turned simple.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-8">
            <a
              href="/assets/images/Favorite_Things_Bialetti.pdf"
              download
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(12px, 1.5vw, 22px)',
                color: '#1D7194',
                textDecoration: 'underline',
              }}
            >
              Click to download
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <iframe
            src="/assets/images/Favorite_Things_Bialetti.pdf"
            className="w-full mb-16"
            style={{ height: '800px', border: 'none' }}
            title="Favorite Things Bialetti"
          />
        </FadeIn>

        <div style={{ marginTop: '48px' }} />

        <FadeIn>
          <Link
            to="/research"
            className="inline-flex items-center gap-3"
            onMouseEnter={() => setBackHovered(true)}
            onMouseLeave={() => setBackHovered(false)}
            style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 22px)', color: '#111E33', textDecoration: backHovered ? 'underline' : 'none' }}
          >
            <img src="/assets/images/right-to-left-arrow.svg" alt="" style={{ width: backHovered ? '48px' : '40px', transition: 'width 300ms ease' }} />
            Click to go back to Research
          </Link>
        </FadeIn>

      </div>
    </main>
  )
}