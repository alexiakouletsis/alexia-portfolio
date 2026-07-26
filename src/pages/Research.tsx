import { Link } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'

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

// Triggers a one-shot diagonal "shine" sweep across a tile each time it scrolls into view.
function useShineTrigger() {
  const [shineKey, setShineKey] = React.useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShineKey((k) => k + 1)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, shineKey }
}

// To add a new research project down the line: drop a new entry into this array
// (plus its bg/tile image assets), and it will automatically get its own tile,
// alternating image side, and a divider before it.
interface ResearchProject {
  title: string
  description: string
  path: string
  tileImage: string
  bgDesktop: string
  bgMobile: string
  imagePosition: 'left' | 'right'
}

const researchProjects: ResearchProject[] = [
  {
    title: 'Public School Segregation Research',
    description: "Check out the work I did over Summer 2026 as a Research Assistant for Northeastern's Plural Connections Group lab!",
    path: '/research/IsYourSchoolSegregated',
    tileImage: '/assets/images/isyourschoolsegregated-tile.png',
    bgDesktop: '/assets/images/research-tile-bg-school.png',
    bgMobile: '/assets/images/research-tile-bg-school-mobile.png',
    imagePosition: 'left',
  },
  {
    title: 'Design Research Dossiers',
    description: 'Click here to look at some pieces that I wrote and designed during my Spring 2026 semester at Northeastern.',
    path: '/research/DesignDossiers',
    tileImage: '/assets/images/dossier-tile.png',
    bgDesktop: '/assets/images/research-tile-bg-dossier.png',
    bgMobile: '/assets/images/research-tile-bg-dossier-mobile.png',
    imagePosition: 'right',
  },
]

function ResearchTile({ project }: { project: ResearchProject }) {
  const { title, description, path, tileImage, bgDesktop, bgMobile, imagePosition } = project
  const desktopShine = useShineTrigger()
  const mobileShine = useShineTrigger()

  return (
    <>
      {/* Desktop */}
      <div
        ref={desktopShine.ref}
        className="hidden md:grid w-full"
        style={{
          minHeight: '90vh',
          gridTemplateColumns: '1fr 1fr',
          backgroundImage: `url(${bgDesktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div key={desktopShine.shineKey} className="tile-shine" style={{ gridColumn: '1 / -1' }} />
        {imagePosition === 'left' ? (
          <>
            <div className="flex items-center justify-center" style={{ position: 'relative', zIndex: 2 }}>
              <Link to={path} className="inline-block transition-transform duration-300 hover:scale-105">
                <img
                  src={tileImage}
                  alt={title}
                  style={{
                    width: 'min(460px, 34vw)',
                    height: 'min(460px, 34vw)',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    border: '8px solid #FEFAF3',
                    display: 'block',
                  }}
                />
              </Link>
            </div>
            <div className="flex items-center" style={{ justifyContent: 'flex-start', position: 'relative', zIndex: 2 }}>
              <div style={{ textAlign: 'left', maxWidth: '520px' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 'bold',
                    fontSize: 'clamp(30px, 3.5vw, 50px)',
                    color: '#111E33',
                    lineHeight: '1.15',
                    marginBottom: '18px',
                  }}
                >
                  {title}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(15px, 1.8vw, 25px)',
                    color: '#111E33',
                    lineHeight: '1.6',
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center" style={{ justifyContent: 'flex-end', position: 'relative', zIndex: 2 }}>
              <div style={{ textAlign: 'right', maxWidth: '520px' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 'bold',
                    fontSize: 'clamp(30px, 3.5vw, 50px)',
                    color: '#111E33',
                    lineHeight: '1.15',
                    marginBottom: '18px',
                  }}
                >
                  {title}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(15px, 1.8vw, 25px)',
                    color: '#111E33',
                    lineHeight: '1.6',
                    marginLeft: 'auto',
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center" style={{ position: 'relative', zIndex: 2 }}>
              <Link to={path} className="inline-block transition-transform duration-300 hover:scale-105">
                <img
                  src={tileImage}
                  alt={title}
                  style={{
                    width: 'min(460px, 34vw)',
                    height: 'min(460px, 34vw)',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    border: '8px solid #FEFAF3',
                    display: 'block',
                  }}
                />
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Mobile */}
      <div
        ref={mobileShine.ref}
        className="md:hidden w-full flex flex-col items-center justify-center"
        style={{
          minHeight: '85vh',
          backgroundImage: `url(${bgMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '48px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div key={mobileShine.shineKey} className="tile-shine" />
        <Link to={path} className="inline-block transition-transform duration-300 hover:scale-105" style={{ position: 'relative', zIndex: 2 }}>
          <img
            src={tileImage}
            alt={title}
            style={{
              width: 'min(290px, 70vw)',
              height: 'min(290px, 70vw)',
              objectFit: 'cover',
              borderRadius: '16px',
              border: '5px solid #FEFAF3',
              display: 'block',
            }}
          />
        </Link>
        <div style={{ textAlign: 'center', marginTop: '28px', position: 'relative', zIndex: 2 }}>
          <h2
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'bold',
              fontSize: '27px',
              color: '#111E33',
              lineHeight: '1.2',
              marginBottom: '12px',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#111E33',
              lineHeight: '1.6',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export default function Research() {
  return (
    <main className="w-full">
      <style>{`
        .tile-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }
        .tile-shine::before {
          content: '';
          position: absolute;
          top: -60%;
          left: -60%;
          width: 4%;
          height: 220%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%);
          transform: skewX(-20deg);
          animation: tileShineSweep 3s ease-in-out;
        }
        @keyframes tileShineSweep {
          0% { left: -60%; }
          100% { left: 140%; }
        }
      `}</style>
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pt-12">
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(45px, 7vw, 100px)',
            color: '#111E33',
            lineHeight: '1',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          RESEARCH
        </h1>
      </div>

      <div className="flex flex-col">
        {researchProjects.map((project, index) => (
          <React.Fragment key={project.path}>
            <FadeIn>
              <ResearchTile project={project} />
            </FadeIn>
            {index < researchProjects.length - 1 && (
              <div className="w-full" style={{ margin: '32px auto' }}>
                <img
                  src="/assets/images/research-line-seperator.svg"
                  alt=""
                  className="hidden md:block w-full"
                />
                <img
                  src="/assets/images/research-line-seperator-mobile.svg"
                  alt=""
                  className="md:hidden w-full"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </main>
  )
}