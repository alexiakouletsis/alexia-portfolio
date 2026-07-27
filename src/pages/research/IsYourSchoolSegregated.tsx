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

function StickFigure({ src, alt, size }: { src: string; alt: string; size: string }) {
  const [flipping, setFlipping] = useState(false)

  const handleActivate = () => {
    if (flipping) return
    setFlipping(true)
    setTimeout(() => setFlipping(false), 700)
  }

  return (
    <img
      src={src}
      alt={alt}
      onClick={handleActivate}
      className={flipping ? 'stick-figure-backflip' : ''}
      style={{
        width: size,
        height: 'auto',
        cursor: 'pointer',
        display: 'inline-block',
        userSelect: 'none',
      }}
    />
  )
}

export default function IsYourSchoolSegregated() {
  const [backHovered, setBackHovered] = useState(false)

  return (
    <main className="w-full">

      <style>{`
        @keyframes stickFigureBackflip {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .stick-figure-backflip {
          animation: stickFigureBackflip 0.7s cubic-bezier(0.65, 0, 0.35, 1);
        }
      `}</style>

      <img src="/assets/images/isyourschoolsegregated-hero.png" alt="Is Your School Segregated hero" className="hidden md:block w-full" style={{ objectFit: 'cover', objectPosition: 'center bottom', maxHeight: '600px' }} />
      <img src="/assets/images/isyourschoolsegregated-hero-mobile.png" alt="Is Your School Segregated hero" className="md:hidden w-full" style={{ marginTop: '20px' }} />

      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-16 py-12">

        <FadeIn>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 100px)', color: '#111E33', lineHeight: '1.05', marginBottom: '8px' }}>IS YOUR SCHOOL SEGREGATED?</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 20px)', color: '#111E33', marginBottom: '60px' }}>Data Visualization Research, Web Development, Web Design</p>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-24" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '24px' }}>Overview</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6', marginBottom: '60px' }}>
            As a research assistant in Northeastern's{' '}
            <a href="https://www.pluralconnections.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#1D7194', textDecoration: 'underline' }}>Plural Connections Group</a>
            , I worked with K-12 course-sharing network data from North Carolina school districts to study a persistant form of modern segregation. School integration has been proven to help disrupt concentrations of poverty and enhance academic outcomes. Yet diverse schools do not guarantee diverse friendships. A school's overall student body can look diverse on paper while individual students are still sorted into separate course pathways by race and socioeconomic status. To make that pattern seen and felt, I built <em>Is Your School Segregated?</em>, a scrollytelling data visualization that follows two continuing "protagonist" students through real network graphs from kindergarten through 12th grade, watching them slowly get tracked into separate course pathways as the years progress. Rather than a static chart, the piece uses interactive D3 force-directed graphs, animated transitions, and toggleable SES/race views so the reader can explore the actual data behind each grade level, not just read a conclusion about it. I designed and built the full experience, from data processing to the animation system, using React, TypeScript, D3, and Framer Motion, deployed on Vercel.
          </p>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-24" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Step 1 | Modeling the Data */}
        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '40px' }}>Step 1 | Modeling the Data</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="hidden md:grid grid-cols-2 gap-16 mb-24 items-start">
            <div className="flex flex-col gap-8">
              <img src="/assets/images/modeling-the-data-1.png" alt="Gephi network graph, SES coloring" className="w-full" />
              <img src="/assets/images/modeling-the-data-2.png" alt="Gephi network graph, race coloring" className="w-full" />
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6' }}>
              Before illustrating a single vector on Figma, I loaded the raw course-sharing data into Gephi to explore it as a network. Visualizing thousands of student nodes and their shared-class edges let me spot the patterns worth telling a story about: dense, tightly-knit clusters in elementary school gradually pulling apart into visibly separate communities by high school. That early exploration shaped which grade levels, comparisons, and node behaviors the final piece would need to capture.
            </p>
          </div>
          <div className="md:hidden flex flex-col gap-6 mb-10">
            <img src="/assets/images/modeling-the-data-1.png" alt="Gephi network graph, SES coloring" className="w-full" />
            <img src="/assets/images/modeling-the-data-2.png" alt="Gephi network graph, race coloring" className="w-full" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
              Before illustrating a single vector on Figma, I loaded the raw course-sharing data into Gephi to explore it as a network. Visualizing thousands of student nodes and their shared-class edges let me spot the patterns worth telling a story about: dense, tightly-knit clusters in elementary school gradually pulling apart into visibly separate communities by high school. That early exploration shaped which grade levels, comparisons, and node behaviors the final piece would need to capture.
            </p>
          </div>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-24" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Step 2 | Connecting With the Viewer */}
        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '40px' }}>Step 2 | Connecting With the Viewer</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="hidden md:grid grid-cols-2 gap-16 mb-24 items-center">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6' }}>
              A network graph on its own can feel abstract, so I built the piece around two continuing "protagonist" students the reader follows from kindergarten through 12th grade. Giving the data a narrative throughline, rather than presenting isolated charts, turns an abstract statistic into something the reader can actually track and feel: watching two kids drift from best friends into never sharing a class again.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-20">
                <StickFigure src="/assets/images/stick-figure-1.svg" alt="Protagonist one — click for a backflip!" size="170px" />
                <StickFigure src="/assets/images/stick-figure-2.svg" alt="Protagonist two — click for a backflip!" size="170px" />
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '14px', color: '#111E33' }}>try clicking them!</p>
            </div>
          </div>
          <div className="md:hidden flex flex-col gap-4 mb-10 items-center">
            <div className="flex items-center justify-center gap-12" style={{ width: '70%' }}>
              <StickFigure src="/assets/images/stick-figure-1.svg" alt="Protagonist one — tap for a backflip!" size="45%" />
              <StickFigure src="/assets/images/stick-figure-2.svg" alt="Protagonist two — tap for a backflip!" size="45%" />
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '11px', color: '#111E33', marginBottom: '8px' }}>try tapping them!</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
              A network graph on its own can feel abstract, so I built the piece around two continuing "protagonist" students the reader follows from kindergarten through 12th grade. Giving the data a narrative throughline, rather than presenting isolated charts, turns an abstract statistic into something the reader can actually track and feel: watching two kids drift from best friends into never sharing a class again.
            </p>
          </div>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-24" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Step 3 | Design Choices */}
        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '40px' }}>Step 3 | Design Choices</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="hidden md:grid grid-cols-2 gap-16 mb-24 items-center">
            <img src="/assets/images/design-choices.png" alt="Design system mockups for Is Your School Segregated" className="w-full" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6' }}>
              The visual language leans into a warm, hand-drawn feel, Gaegu and Kiwi Maru typefaces, soft sketch illustrations, and a bright, high-contrast color system (pink/green for SES, orange/blue for race) that stays consistent across every graph and transition. The site is built with React, TypeScript, Vite, Tailwind, D3, and Framer Motion, chosen to support smooth scroll-driven storytelling alongside genuinely interactive, force-directed network graphs.
            </p>
          </div>
          <div className="md:hidden flex flex-col gap-6 mb-10">
            <img src="/assets/images/design-choices.png" alt="Design system mockups for Is Your School Segregated" className="w-full" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
              The visual language leans into a warm, hand-drawn feel, Gaegu and Kiwi Maru typefaces, soft sketch illustrations, and a bright, high-contrast color system (pink/green for SES, orange/blue for race) that stays consistent across every graph and transition. The site is built with React, TypeScript, Vite, Tailwind, D3, and Framer Motion, chosen to support smooth scroll-driven storytelling alongside genuinely interactive, force-directed network graphs.
            </p>
          </div>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-24" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Step 4 | Delivering a Website */}
        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '40px' }}>Step 4 | Delivering a Website</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="hidden md:grid grid-cols-2 gap-16 mb-12 items-center">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6' }}>
              From there, it was a matter of turning the design into a real, deployed experience: wiring up scroll-linked animations, building out each grade level's interactive graph, and making sure it held up across desktop and mobile. The site is live at{' '}
              <a href="https://isyourschoolsegregated.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1D7194', textDecoration: 'underline' }}>isyourschoolsegregated.com</a>
              {' '}for both desktop and mobile experience. Click the link (or the image) to see it!
            </p>
            <a
              href="https://isyourschoolsegregated.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/assets/images/isyourschoolsegregated-link-button.png"
                alt="Is Your School Segregated site preview"
                className="w-full"
                style={{ borderRadius: '20px', border: '4px solid #111E33', display: 'block' }}
              />
            </a>
          </div>
          <div className="md:hidden flex flex-col gap-6 mb-8 items-center">
            <a href="https://isyourschoolsegregated.com" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
              <img
                src="/assets/images/isyourschoolsegregated-link-button.png"
                alt="Is Your School Segregated site preview"
                className="w-full"
                style={{ borderRadius: '14px', border: '2px solid #111E33', display: 'block' }}
              />
            </a>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
              From there, it was a matter of turning the design into a real, deployed experience: wiring up scroll-linked animations, building out each grade level's interactive graph, and making sure it held up across desktop and mobile. The site is live at{' '}
              <a href="https://isyourschoolsegregated.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1D7194', textDecoration: 'underline' }}>isyourschoolsegregated.com</a>
              {' '}for both desktop and mobile experience. Click the link (or the image) to see it!
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.6vw, 22px)', fontWeight: 'bold', color: '#B3261E', lineHeight: '1.6', marginBottom: '60px' }}>
            **DISCLAIMER** The website is still undergoing construction and will have a conclusion + a couple more features added to it by the end of the summer. However, whats up there now is still pretty cool, and you should go look regardless! For now, toggle 'R' key on desktop to change modes on the site.
          </p>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-12" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-6" />

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