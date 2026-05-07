import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RomeBrochure() {
  const [backHovered, setBackHovered] = useState(false)

  return (
    <main className="w-full">

      {/* Hero image */}
      <img
        src="/assets/images/rome-hero.png"
        alt="Rome Brochure hero"
        className="hidden md:block w-full"
        style={{ objectFit: 'cover', maxHeight: '600px' }}
      />
      <img
        src="/assets/images/rome-hero-mobile.png"
        alt="Rome Brochure hero"
        className="md:hidden w-full"
        style={{ marginTop: '20px' }}
      />

      {/* Content */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 py-12">

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 8vw, 100px)',
            color: '#111E33',
            lineHeight: '1',
            marginBottom: '8px',
          }}
        >
          ROME BROCHURE
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.5vw, 20px)',
            color: '#111E33',
            marginBottom: '60px',
          }}
        >
          Digital Design, Creative Software Usage, Typography
        </p>

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Overview */}
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(22px, 3vw, 45px)',
            fontWeight: 'bold',
            color: '#111E33',
            marginBottom: '24px',
          }}
        >
          Overview
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.8vw, 28px)',
            color: '#111E33',
            lineHeight: '1.6',
            marginBottom: '32px',
          }}
        >
          Utilizing softwares like Adobe Illustrator and Adobe InDesign, I drew upon my knowledge as a previous study abroad student to create the ultimate travel brochure for visiting Rome, Italy. My goal while creating this was to cater towards college-aged students who are looking to either travel to or also study abroad in Rome. I experimented with type faces that were elegant and ancient-feeling, yet still easily legible. I also had fun playing with the format of column headers and adjusting my color palette to be both clean and visually engaging. Almost all images used in this project were taken by me during my study abroad experience. I additionally reused elements of my brochure's cover to create a poster that further markets my work.
        </p>

        {/* Download links */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <a
            href="/assets/images/Rome-Brochure.pdf"
            download
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(12px, 1.5vw, 22px)',
              color: '#1D7194',
              textDecoration: 'underline',
            }}
          >
            Download the Brochure
          </a>
          <a
            href="/assets/images/Rome-Poster.pdf"
            download
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(12px, 1.5vw, 22px)',
              color: '#1D7194',
              textDecoration: 'underline',
            }}
          >
            Download the Poster
          </a>
        </div>

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Brochure images - desktop */}
        <div className="hidden md:block mb-16">

          {/* Row 1: outside panels - 3 column with labels */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="grid grid-cols-3 gap-4 w-full">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Inner Right Tab</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Back Cover</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Cover</p>
            </div>
            <img src="/assets/images/rome-brochure-outside.png" alt="Brochure outside" className="w-full" />
          </div>

          {/* Row 2: inside panels - 3 column with labels */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="grid grid-cols-3 gap-4 w-full">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Left</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Middle</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#111E33', textAlign: 'center' }}>Right</p>
            </div>
            <img src="/assets/images/rome-brochure-inside.png" alt="Brochure inside" className="w-full" />
          </div>

          {/* Poster */}
          <div className="flex justify-center">
            <img
              src="/assets/images/rome-poster.png"
              alt="Rome poster"
              style={{ width: '55%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Brochure images - mobile */}
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

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-12" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-6" />

        {/* Back to projects */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-3"
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.5vw, 22px)',
            color: '#111E33',
            textDecoration: backHovered ? 'underline' : 'none',
          }}
        >
          <img
            src="/assets/images/right-to-left-arrow.svg"
            alt=""
            style={{
              width: backHovered ? '48px' : '40px',
              transition: 'width 300ms ease',
            }}
          />
          Click to go back to Projects
        </Link>

      </div>
    </main>
  )
}