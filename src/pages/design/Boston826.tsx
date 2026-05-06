import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Boston826() {
  const [backHovered, setBackHovered] = useState(false)

  return (
    <main className="w-full">

      {/* Hero image */}
      <img
        src="/assets/images/826-hero.png"
        alt="826 Boston hero"
        className="hidden md:block w-full"
        style={{ objectFit: 'cover', maxHeight: '600px' }}
      />
      <img
        src="/assets/images/826-hero-mobile.png"
        alt="826 Boston hero"
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
          826 BOSTON
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.5vw, 20px)',
            color: '#111E33',
            marginBottom: '60px',
          }}
        >
          Branding, Typography, Logo Design
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
            marginBottom: '60px',
          }}
        >
          Through Northeastern's Community Volunteer Program, I have had the privilege of working with a local non-profit afterschool program called{' '}
          <a
            href="https://826boston.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1D7194', textDecoration: 'underline' }}
          >
            826 Boston
          </a>
          . At least once a week I tutor kids one-on-one to help guide them through their homework, offer mentorship, and promote creative exploration. This program exudes warmth and positivity throughout each community member that it reaches. So, in one of my design classes when I got to choose a company to rebrand, I wanted to use my insider knowledge to improve upon this one, matching its branding with that very warmth. While 826 Boston's identity is already thorough, I aimed to expand the company's color palette, typographic systems, and bring in a new clever twist on their logo.
        </p>

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Embedded PDF */}
        <iframe
          src="/assets/images/826-Boston-Rebrand.pdf"
          className="w-full mb-16"
          style={{ height: '800px', border: 'none' }}
          title="826 Boston Rebrand"
        />

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