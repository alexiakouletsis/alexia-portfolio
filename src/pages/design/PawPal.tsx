import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PawPal() {
  const [backHovered, setBackHovered] = useState(false)

  const figmaLink = 'https://www.figma.com/proto/IRoRhslxbck256AkLkUH4z/Paw-Pal?page-id=1%3A2&node-id=2-140&viewport=-1253%2C4448%2C0.42&t=koppZnmlM4Av5iBa-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A139'

  return (
    <main className="w-full">

      {/* Hero image */}
      <img
        src="/assets/images/pawpal-hero.png"
        alt="PawPal hero"
        className="hidden md:block w-full"
        style={{ objectFit: 'cover', maxHeight: '600px' }}
      />
      <img
        src="/assets/images/pawpal-hero-mobile.png"
        alt="PawPal hero"
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
          PAWPAL
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.5vw, 20px)',
            color: '#111E33',
            marginBottom: '60px',
          }}
        >
          Mobile App Design, Prototyping, User Interviews, UX Research
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
            marginBottom: '24px',
          }}
        >
          PawPal is a mobile app invented in my Human Computer Interactions class to help tackle the issue of loneliness amongst college students. With rigorous course loads and constant travel here at Northeastern (study abroads, co-ops, international students, etc.), it is not surprising that students struggle with being social. Through various research strategies to isolate key pain points, my team and I landed on creating an app-based solution called PawPal. Unlike other goal-tracking apps, PawPal focusses specially on socialization, pushing users to leave their comfort zones and prioritize friendship-forming habits. Our hope was that by putting a light-hearted reward system behind completing tasks about being social, our users would feel less intimidated by the concept and more optimistic.
        </p>
        <a
          href={figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.5vw, 22px)',
            color: '#1D7194',
            textDecoration: 'underline',
            display: 'block',
            marginBottom: '40px',
          }}
        >
          High-Fidelity Prototype
        </a>

        {/* Team */}
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(22px, 3vw, 45px)',
            fontWeight: 'bold',
            color: '#111E33',
            marginBottom: '16px',
          }}
        >
          Team
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.8vw, 28px)',
            color: '#111E33',
            marginBottom: '60px',
          }}
        >
          MD Sami Zaif, Emily Inga, Anushka Anand, and Alexia Kouletsis
        </p>

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Step 1 | User Research */}
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(22px, 3vw, 45px)',
            fontWeight: 'bold',
            color: '#111E33',
            marginBottom: '40px',
          }}
        >
          Step 1 | User Research
        </h2>

        {/* Interviews subheading */}
        <h3
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(18px, 2.5vw, 38px)',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: '#111E33',
            marginBottom: '32px',
          }}
        >
          Interviews
        </h3>

        {/* Desktop: protocol image left, text right */}
        <div className="hidden md:grid grid-cols-2 gap-12 mb-12 items-start">
          <img src="/assets/images/interview-protocol.png" alt="Interview protocol" className="w-full" />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(12px, 1.8vw, 28px)',
              color: '#111E33',
              lineHeight: '1.6',
            }}
          >
            We began by creating a loose open-ended protocol. Our questions aimed to ease participants from simple to more in-depth ones while leaving wiggle room to explore relevant stories that participants may bring up.
          </p>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-6 mb-10">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: '#111E33',
              lineHeight: '1.6',
            }}
          >
            We began by creating a loose open-ended protocol. Our questions aimed to ease participants from simple to more in-depth ones while leaving wiggle room to explore relevant stories that participants may bring up.
          </p>
          <img src="/assets/images/interview-protocol.png" alt="Interview protocol" className="w-full" />
        </div>

        {/* Interview sample - desktop: text left, image right */}
        <div className="hidden md:grid grid-cols-2 gap-12 mb-16 items-start">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(12px, 1.8vw, 28px)',
              color: '#111E33',
              lineHeight: '1.6',
            }}
          >
            Though more would be preferred, for the sake of time, my team interviewed 8 participants in total. We aimed to collect a broad range of students from different first-year programs and cultural backgrounds. Imaged is a sample of an interview transcript and accompanying code.
          </p>
          <img src="/assets/images/interview-sample.png" alt="Interview sample" className="w-full" />
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-6 mb-10">
          <img src="/assets/images/interview-sample.png" alt="Interview sample" className="w-full" />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: '#111E33',
              lineHeight: '1.6',
            }}
          >
            Though more would be preferred, for the sake of time, my team interviewed 8 participants in total. We aimed to collect a broad range of students from different first-year programs and cultural backgrounds. Imaged is a sample of an interview transcript and accompanying code.
          </p>
        </div>

        {/* Key Interview Quotes */}
        <h3
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(18px, 2.5vw, 38px)',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: '#111E33',
            marginBottom: '32px',
          }}
        >
          Key Interview Quotes
        </h3>

        <div className="hidden md:grid grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-8">
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(12px, 1.8vw, 28px)',
                color: '#111E33',
                lineHeight: '1.6',
              }}
            >
              "It's just the little things that make the biggest difference into being a more social person."
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(12px, 1.8vw, 28px)',
                color: '#111E33',
                lineHeight: '1.6',
              }}
            >
              "If I'm doing too much socially, it doesn't leave room for academics or working out. And then if I'm working out and doing too much schoolwork to the point where I don't give myself time [for socializing], then it's just kind of sad."
            </p>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(12px, 1.8vw, 28px)',
              color: '#111E33',
              lineHeight: '1.6',
            }}
          >
            "I feel like a lot of loneliness has to do with self action. It's less of a fact about 'does Northeast have resources', but more of a fact about, like, how can Northeastern teach you how to reach social interactions as a person by yourself?"
          </p>
        </div>

        {/* Mobile quotes */}
        <div className="md:hidden flex flex-col gap-6 mb-10">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
            "I feel like a lot of loneliness has to do with self action. It's less of a fact about 'does Northeast have resources', but more of a fact about, like, how can Northeastern teach you how to reach social interactions as a person by yourself?"
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
            "It's just the little things that make the biggest difference into being a more social person."
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#111E33', lineHeight: '1.6' }}>
            "If I'm doing too much socially, it doesn't leave room for academics or working out. And then if I'm working out and doing too much schoolwork to the point where I don't give myself time [for socializing], then it's just kind of sad."
          </p>
        </div>

        {/* Affinity Diagramming and User Personas */}
        <h3
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(18px, 2.5vw, 38px)',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: '#111E33',
            marginBottom: '24px',
          }}
        >
          Affinity Diagramming and User Personas
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.8vw, 28px)',
            color: '#111E33',
            lineHeight: '1.6',
            marginBottom: '32px',
          }}
        >
          After collecting interview data, my team put each code on a virtual sticky note and created varying levels of categories to organize information and get to the root of our users' pain points. We then partnered with AI tools to create user personas that might more clearly represent our target users. Of course, with using AI, we maintained a critical eye and critiqued any stereotypes and/or errors generated by the technology.
        </p>

        <div className="hidden md:grid grid-cols-2 gap-12 mb-16 items-start">
          <img src="/assets/images/affinity-diagram.png" alt="Affinity diagram" className="w-full" />
          <img src="/assets/images/user-persona.png" alt="User persona" className="w-full" />
        </div>
        <div className="md:hidden flex flex-col gap-6 mb-10">
          <img src="/assets/images/affinity-diagram.png" alt="Affinity diagram" className="w-full" />
          <img src="/assets/images/user-persona.png" alt="User persona" className="w-full" />
        </div>

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Step 2 | Low-Fidelity Prototype */}
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(22px, 3vw, 45px)',
            fontWeight: 'bold',
            color: '#111E33',
            marginBottom: '24px',
          }}
        >
          Step 2 | Low-Fidelity Prototype
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.8vw, 28px)',
            color: '#111E33',
            lineHeight: '1.6',
            marginBottom: '40px',
          }}
        >
          We utilized drawing paper wire frames for our low-fidelity prototype testing. This allowed our models to be quick, cheap, low-commitment, and easily adjustable. After creating our prototypes, we practiced Wizard of Oz testing in class to acquire valuable feedback.
        </p>

        {/* Desktop: 2x2 grid of lofi images */}
        <div className="hidden md:grid grid-cols-2 gap-8 mb-16">
          <img src="/assets/images/pawpal-lofi-1.png" alt="Lofi prototype 1" className="w-full" />
          <img src="/assets/images/pawpal-lofi-2.png" alt="Lofi prototype 2" className="w-full" />
          <img src="/assets/images/pawpal-lofi-3.png" alt="Lofi prototype 3" className="w-full" />
          <img src="/assets/images/pawpal-lofi-4.png" alt="Lofi prototype 4" className="w-full" />
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-6 mb-10">
          <img src="/assets/images/pawpal-lofi-1.png" alt="Lofi prototype 1" className="w-full" />
          <img src="/assets/images/pawpal-lofi-2.png" alt="Lofi prototype 2" className="w-full" />
          <img src="/assets/images/pawpal-lofi-3.png" alt="Lofi prototype 3" className="w-full" />
          <img src="/assets/images/pawpal-lofi-4.png" alt="Lofi prototype 4" className="w-full" />
        </div>

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Step 3 | High-Fidelity Prototype */}
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(22px, 3vw, 45px)',
            fontWeight: 'bold',
            color: '#111E33',
            marginBottom: '24px',
          }}
        >
          Step 3 | High-Fidelity Prototype
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.8vw, 28px)',
            color: '#111E33',
            lineHeight: '1.6',
            marginBottom: '24px',
          }}
        >
          After gaining peer insight from Wizard of Oz testing on our low-fidelity prototypes, my team confidently dove into our Figma high-fidelity. In correspondence to our feedback, some improvements we made to the hi-fi included adding a navigation bar, fully implementing the shop feature, and adding more clarity to the leaderboard section.
        </p>
        <a
          href={figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.5vw, 22px)',
            color: '#1D7194',
            textDecoration: 'underline',
            display: 'block',
            marginBottom: '24px',
          }}
        >
          Click here to play with the final Figma prototype yourself!
        </a>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.8vw, 28px)',
            color: '#111E33',
            marginBottom: '24px',
          }}
        >
          Video demonstration:
        </p>
        <video
          controls
          className="w-full rounded-lg mb-16"
          style={{ maxHeight: '600px' }}
        >
          <source src="/assets/images/pawpal-demo.mov" type="video/mp4" />
        </video>

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