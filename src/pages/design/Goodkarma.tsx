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

export default function Goodkarma() {
  const [backHovered, setBackHovered] = useState(false)

  return (
    <main className="w-full">

      <img src="/assets/images/goodkarma-hero.png" alt="Goodkarma hero" className="hidden md:block w-full" style={{ objectFit: 'cover', maxHeight: '600px' }} />
      <img src="/assets/images/goodkarma-hero-mobile.png" alt="Goodkarma hero" className="md:hidden w-full" style={{ marginTop: '20px' }} />

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 py-12">

        <FadeIn>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 100px)', color: '#111E33', lineHeight: '1', marginBottom: '8px' }}>GOODKARMA</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 20px)', color: '#111E33', marginBottom: '60px' }}>Web Development, Web Design, Prototyping, Client Collaboration</p>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '24px' }}>Overview- who is Goodkarma?</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6', marginBottom: '60px' }}>
            As a member of{' '}
            <a href="https://scout.camd.northeastern.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#1D7194', textDecoration: 'underline' }}>Scout</a>
            , I had the pleasure of working on a team of fellow designers and developers to create a website for a local punk-rock band in Boston called Goodkarma. This band already had thorough branding and social media presence, so our job for making their website was to expand on this and further solidify brand identity. Goodkarma put extra emphasis on keeping their image fun, vibrant, and vintage, as they believed that punk-rock did not always have to be grungy. Keeping their wants in mind, my team created a unique website that embodies a living digital poster and information hub for the band.
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-16">
          <FadeIn>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '8px' }}>Role</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 22px)', fontStyle: 'italic', color: '#111E33', marginBottom: '16px' }}>Designer + Developer</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6' }}>
                As the only member of my team who did both design and development work, I focussed on completely tackling one of the individual webpages myself. For this I chose to do the About page, as the opportunity to describe and visualize the four members at the heart of the band excited me. I also facilitated communication between our design and development teams, as I consistently worked between them and kept each updated on the other's progress.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '24px' }}>Team</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px 24px', fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.5vw, 20px)', color: '#111E33' }}>
                <p>Project Lead:</p><p>Designers:</p><p>Developers:</p>
                <p>Rachel Yan</p><p>Sammi Chen</p><p>Melanie Hammond</p>
                <p></p><p>Naomi Osman</p><p>Meredith Scott</p>
                <p>Design Lead:</p><p>Alexia Kouletsis</p><p>Alexia Kouletsis</p>
                <p>Neha Chandran</p><p></p><p></p>
                <p>Developer Leads:</p><p></p><p></p>
                <p>London Jones</p><p></p><p></p>
                <p>Arshia Verma</p><p></p><p></p>
              </div>
            </div>
          </FadeIn>
        </div>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '40px' }}>Step 1 | Moodboarding</h2>
        </FadeIn>

        {/* Desktop moodboard */}
        <div className="hidden md:block mb-16">
          <FadeIn>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center mb-8">
              <img src="/assets/images/moodboard-1.png" alt="Moodboard 1" className="w-full" />
              <img src="/assets/images/left-to-right-arrow.svg" alt="" style={{ width: '60px' }} />
              <img src="/assets/images/moodboard-2.png" alt="Moodboard 2" className="w-full" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6' }}>
                This was my first impression of the band. I gathered visuals that matched the company's current logo and{' '}
                <a href="https://www.instagram.com/goodkarma.wav/" target="_blank" rel="noopener noreferrer" style={{ color: '#1D7194', textDecoration: 'underline' }}>Instagram</a>.
              </p>
              <div className="flex flex-col gap-4">
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6' }}>
                  Upon our first client meeting, I realized my initial impression of the band wrong. They wanted a website that looked straight out of a 70's poster, not the modern-grunge aesthetic that I originally assumed. This is the mood board that they made.
                </p>
                <img src="/assets/images/down-arrow.svg" alt="" style={{ width: '40px' }} />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-8">
              <img src="/assets/images/moodboard-3.png" alt="Moodboard 3" className="w-full" />
              <div className="flex flex-col gap-6">
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6' }}>
                  With this in mind, Naomi and I worked together to create a new mood board that combined all ideas. After gaining our client's approval, we extracted colors and visual ideas from this board to use for the website.
                </p>
                <img src="/assets/images/down-arrow.svg" alt="" style={{ width: '40px' }} />
                <img src="/assets/images/colorpalette.png" alt="Color palette" className="w-full" />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Mobile moodboard */}
        <div className="md:hidden flex flex-col gap-8 mb-16">
          <img src="/assets/images/moodboard-1.png" alt="Moodboard 1" className="w-full" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
            This was my first impression of the band. I gathered visuals that matched the company's current logo and{' '}
            <a href="https://www.instagram.com/goodkarma.wav/" target="_blank" rel="noopener noreferrer" style={{ color: '#1D7194', textDecoration: 'underline' }}>Instagram</a>.
          </p>
          <img src="/assets/images/moodboard-2.png" alt="Moodboard 2" className="w-full" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
            Upon our first client meeting, I realized my initial impression of the band wrong. They wanted a website that looked straight out of a 70's poster, not the modern-grunge aesthetic that I originally assumed. This is the mood board that they made.
          </p>
          <img src="/assets/images/moodboard-3.png" alt="Moodboard 3" className="w-full" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
            With this in mind, Naomi and I worked together to create a new mood board that combined all ideas. After gaining our client's approval, we extracted colors and visual ideas from this board to use for the website.
          </p>
          <img src="/assets/images/colorpalette.png" alt="Color palette" className="w-full" />
        </div>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '40px' }}>Step 2 | Low-Fidelity Wireframes</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="hidden md:grid grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center gap-4">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '22px', fontWeight: 'bold', color: '#111E33' }}>Home</p>
              <img src="/assets/images/gk-home-lofi.png" alt="Home lofi" className="w-full" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '22px', fontWeight: 'bold', color: '#111E33' }}>About</p>
              <img src="/assets/images/gk-about-lofi.png" alt="About lofi" className="w-full" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '22px', fontWeight: 'bold', color: '#111E33' }}>Gallery</p>
              <img src="/assets/images/gk-gallery-lofi.png" alt="Gallery lofi" className="w-full" />
            </div>
          </div>
          <div className="md:hidden mb-10">
            <img src="/assets/images/gk-all-three-mobile-lofis.png" alt="Mobile lofi wireframes" className="w-full" />
          </div>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '40px' }}>Step 3 | High-Fidelity Wireframes</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="hidden md:grid grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-4">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '22px', fontWeight: 'bold', color: '#111E33' }}>Home</p>
              <img src="/assets/images/gk-home-hifi.png" alt="Home hifi" className="w-full" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '22px', fontWeight: 'bold', color: '#111E33' }}>About</p>
              <img src="/assets/images/gk-about-hifi.png" alt="About hifi" className="w-full" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '22px', fontWeight: 'bold', color: '#111E33' }}>Gallery</p>
              <img src="/assets/images/gk-gallery-hifi.png" alt="Gallery hifi" className="w-full" />
            </div>
          </div>
          <div className="md:hidden mb-10">
            <img src="/assets/images/gk-all-three-mobile-hifis.png" alt="Mobile hifi wireframes" className="w-full" />
          </div>
        </FadeIn>

        <FadeIn>
          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(18px, 2.5vw, 38px)', fontWeight: 'bold', color: '#111E33', marginBottom: '24px' }}>Mobile Renditions Too!</h3>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="hidden md:flex gap-8 mb-16 overflow-x-auto">
            <img src="/assets/images/gk-all-three-mobile-lofis.png" alt="Mobile lofis" style={{ height: '500px', width: 'auto' }} />
            <img src="/assets/images/gk-all-three-mobile-hifis.png" alt="Mobile hifis" style={{ height: '500px', width: 'auto' }} />
          </div>
          <div className="md:hidden mb-10">
            <img src="/assets/images/gk-all-three-mobile-lofis.png" alt="Mobile lofis" className="w-full mb-6" />
            <img src="/assets/images/gk-all-three-mobile-hifis.png" alt="Mobile hifis" className="w-full" />
          </div>
        </FadeIn>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        <FadeIn>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(22px, 3vw, 45px)', fontWeight: 'bold', color: '#111E33', marginBottom: '24px' }}>Step 4 | Presentation</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 28px)', color: '#111E33', lineHeight: '1.6', marginBottom: '40px' }}>
            Unfortunately, Goodkarma's website is not yet live and on the web. However, I have uploaded the source code of the About page to my{' '}
            <a href="https://github.com/alexiakouletsis/Goodkarma_About_Page" target="_blank" rel="noopener noreferrer" style={{ color: '#1D7194', textDecoration: 'underline' }}>Github</a>
            {' '}for public viewing. Out of respect for the band's privacy, the uploaded code only contains code, no photos/assets that would be shown in the real thing. However, bellow is a screen recording of what my code looks like when utilizing a local host on my laptop. Enjoy!
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-16">
            <video controls className="w-full md:w-1/2 rounded-lg" style={{ maxHeight: '500px' }}>
              <source src="/assets/images/gk-desktop-screen-recording.mov" type="video/mp4" />
            </video>
            <video controls className="w-full md:w-1/2 rounded-lg" style={{ maxHeight: '500px' }}>
              <source src="/assets/images/gk-mobile-screen-recording.mov" type="video/mp4" />
            </video>
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