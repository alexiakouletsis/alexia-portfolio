import { Link } from 'react-router-dom'
import React, { useRef } from 'react'

interface SketchProps {
  src: string
  alt: string
  label: string
  style: React.CSSProperties
  textRotation?: string
}

function SketchWithReveal({ src, alt, label, style, textRotation }: SketchProps) {
  const filterId = React.useId().replace(/:/g, '')
  const turbRef = useRef<SVGFETurbulenceElement>(null)
  const dispRef = useRef<SVGFEDisplacementMapElement>(null)
  const animRef = useRef<number | null>(null)
  const progressRef = useRef(0)
  const [tapped, setTapped] = React.useState(false)

  function animateTo(target: number) {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    const step = () => {
      progressRef.current += (target - progressRef.current) * 0.05
      if (Math.abs(progressRef.current - target) < 0.001) {
        progressRef.current = target
      }
      const freq = progressRef.current * 0.04
      const scale = progressRef.current * 40
      turbRef.current?.setAttribute('baseFrequency', String(freq))
      dispRef.current?.setAttribute('scale', String(scale))
      if (Math.abs(progressRef.current - target) > 0.001) {
        animRef.current = requestAnimationFrame(step)
      }
    }
    animRef.current = requestAnimationFrame(step)
  }

  const handleClick = () => {
    const next = !tapped
    setTapped(next)
    animateTo(next ? 1 : 0)
  }

  return (
    <div
      style={{ ...style, position: 'absolute' }}
      className="group"
      onMouseEnter={() => animateTo(1)}
      onMouseLeave={() => { animateTo(0); setTapped(false) }}
      onClick={handleClick}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbRef}
              type="turbulence"
              baseFrequency="0"
              numOctaves="2"
              result="turbulence"
              seed="1"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="turbulence"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-[1500ms]"
        style={{
          opacity: tapped ? 1 : undefined,
          transform: textRotation ? `rotate(${textRotation})` : undefined,
        }}
      >
        <p
          className="opacity-0 group-hover:opacity-100"
          style={{
            fontSize: '25px',
            fontFamily: 'var(--font-body)',
            color: '#111E33',
            textAlign: 'center',
            opacity: tapped ? 1 : undefined,
            transition: 'opacity 1500ms',
          }}
        >
          {label}
        </p>
      </div>

      <img
        src={src}
        alt={alt}
        className="w-full h-full transition-opacity duration-[1500ms] group-hover:opacity-0"
        style={{
          filter: `url(#${filterId})`,
          opacity: tapped ? 0 : undefined,
        }}
      />
    </div>
  )
}

function MobileTapReveal({ src, alt, label, style }: {
  src: string
  alt: string
  label: string
  style: React.CSSProperties
}) {
  const filterId = React.useId().replace(/:/g, '')
  const turbRef = useRef<SVGFETurbulenceElement>(null)
  const dispRef = useRef<SVGFEDisplacementMapElement>(null)
  const animRef = useRef<number | null>(null)
  const progressRef = useRef(0)
  const [tapped, setTapped] = React.useState(false)

  function animateTo(target: number) {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    const step = () => {
      progressRef.current += (target - progressRef.current) * 0.02
      if (Math.abs(progressRef.current - target) < 0.001) {
        progressRef.current = target
      }
      const freq = progressRef.current * 0.04
      const scale = progressRef.current * 40
      turbRef.current?.setAttribute('baseFrequency', String(freq))
      dispRef.current?.setAttribute('scale', String(scale))
      if (Math.abs(progressRef.current - target) > 0.001) {
        animRef.current = requestAnimationFrame(step)
      }
    }
    animRef.current = requestAnimationFrame(step)
  }

  const handleTap = () => {
    if (tapped) return
    animateTo(1)
    setTimeout(() => {
      setTapped(true)
    }, 800)
    setTimeout(() => {
      setTapped(false)
      animateTo(0)
    }, 2900)
  }

  return (
    <div
      style={{ ...style, position: 'absolute', touchAction: 'manipulation' }}
      onClick={handleTap}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbRef}
              type="turbulence"
              baseFrequency="0"
              numOctaves="2"
              result="turbulence"
              seed="1"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="turbulence"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: tapped ? 1 : 0,
          transition: 'opacity 500ms',
          zIndex: 2,
        }}
      >
        <p style={{
          fontSize: '12px',
          fontFamily: 'var(--font-body)',
          color: '#111E33',
          textAlign: 'center',
          padding: '4px',
        }}>
          {label}
        </p>
      </div>

      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          opacity: tapped ? 0 : 1,
          transition: 'opacity 500ms',
          position: 'relative',
          zIndex: 1,
          filter: `url(#${filterId})`,
        }}
      />
    </div>
  )
}

interface TileProps {
  href: string
  tile: string
  popout1: string
  popout2: string
  label: string
  size: number
  mobileSize: number
}

function Tile({ href, tile, popout1, popout2, label, size, mobileSize }: TileProps) {
  const [hovered, setHovered] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768)

  React.useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  const currentSize = isMobile ? mobileSize : size

  return (
    <Link
      to={href}
      className="flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative"
        style={{ width: `${currentSize}px`, height: `${currentSize}px`, overflow: 'visible' }}
      >
        <img
          src={popout1}
          alt=""
          style={{
            position: 'absolute',
            width: '200px',
            height: 'auto',
            top: hovered ? '-100px' : '0px',
            left: hovered ? '-80px' : '-20px',
            opacity: hovered ? 1 : 0,
            transition: 'top 500ms ease, left 500ms ease, opacity 500ms ease',
            zIndex: 10,
          }}
        />
        <img
          src={popout2}
          alt=""
          style={{
            position: 'absolute',
            width: '200px',
            height: 'auto',
            top: hovered ? '-100px' : '0px',
            right: hovered ? '-80px' : '-20px',
            opacity: hovered ? 1 : 0,
            transition: 'top 500ms ease, right 500ms ease, opacity 500ms ease',
            zIndex: 10,
          }}
        />
        <img
          src={tile}
          alt={label}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'relative',
            zIndex: 20,
            outline: hovered ? '4px solid #111E33' : 'none',
            transition: 'outline 300ms ease',
          }}
        />
      </div>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? '18px' : '26px',
          color: '#111E33',
          marginTop: '16px',
          textDecoration: hovered ? 'underline' : 'none',
        }}
      >
        {label}
      </p>
    </Link>
  )
}

export default function Home() {
  return (
    <main>
      {/* DESKTOP HERO */}
      <section
        className="hidden md:block relative w-full"
        style={{ height: '1812px', maxWidth: '1440px', margin: '0 auto' }}
      >
        <img
          src="/assets/images/hero-logo.svg"
          alt="Alexia Rae Kouletsis - Art, Tech, Design, and Optimism"
          style={{ position: 'absolute', left: '70px', top: '37px', width: '965.62px', height: '532px' }}
        />
        <SketchWithReveal src="/assets/images/standing-portrait-sketch.svg" alt="" label="Me!" style={{ left: '930px', top: '74px', width: '471px', height: '863px' }} />
        <SketchWithReveal src="/assets/images/strawberry-sketch.svg" alt="" label="Favorite food" style={{ left: '320px', top: '523px', width: '187px', height: '186px' }} />
        <SketchWithReveal src="/assets/images/9-cake-sketch.svg" alt="" label="My 9th birthday" style={{ left: '-13px', top: '533px', width: '334px', height: '384.01px' }} />
        <SketchWithReveal src="/assets/images/with-pap-sketch.svg" alt="" label="My Pap hugging me after my first black belt test" style={{ left: '563px', top: '485px', width: '353px', height: '559px' }} />
        <SketchWithReveal src="/assets/images/with-dad-sketch.svg" alt="" label="My dad and I at the beach in 2013" style={{ left: '-2px', top: '921px', width: '632px', height: '538px' }} />
        <SketchWithReveal src="/assets/images/carnation-sketch.svg" alt="" label="Favorite flower" textRotation="-10deg" style={{ left: '29px', top: '1498px', width: '504.33px', height: '249.15px', transform: 'rotate(10deg)' }} />
        <SketchWithReveal src="/assets/images/with-mom-sketch.svg" alt="" label="My mom, sister, and I hiking in 2015" style={{ left: '629px', top: '1094px', width: '831px', height: '718px' }} />
        <SketchWithReveal src="/assets/images/dragonfly-sketch.svg" alt="" label="Favorite animal" style={{ left: '1129px', top: '945px', width: '297px', height: '236px' }} />
        <SketchWithReveal src="/assets/images/ak-logo-sketch.svg" alt="" label="Logo!" style={{ left: '660px', top: '1089px', width: '189px', height: '176px' }} />
      </section>

      {/* MOBILE HERO */}
      <section
        className="md:hidden relative w-full overflow-hidden"
        style={{ paddingBottom: '265.9%' }}
      >
        <div className="absolute inset-0">
          <img
            src="/assets/images/hero-logo.svg"
            alt="Alexia Rae Kouletsis - Art, Tech, Design, and Optimism"
            style={{ position: 'absolute', left: '6.67%', top: '3.76%', width: '94.91%', height: '18.61%' }}
          />
          <MobileTapReveal
            src="/assets/images/standing-portrait-sketch.svg"
            alt=""
            label="Me!"
            style={{ left: '43.59%', top: '18.99%', width: '59.74%', height: '41.27%' }}
          />
          <MobileTapReveal
            src="/assets/images/strawberry-sketch.svg"
            alt=""
            label="Favorite food"
            style={{ left: '37.44%', top: '19.38%', width: '23.59%', height: '8.78%' }}
          />
          <MobileTapReveal
            src="/assets/images/9-cake-sketch.svg"
            alt=""
            label="My 9th birthday"
            style={{ left: '-3.08%', top: '19.86%', width: '43.85%', height: '19.0%' }}
          />
          <MobileTapReveal
            src="/assets/images/ak-logo-sketch.svg"
            alt=""
            label="Logo!"
            style={{ left: '22.31%', top: '39.63%', width: '17.69%', height: '6.17%' }}
          />
          <MobileTapReveal
            src="/assets/images/with-pap-sketch.svg"
            alt=""
            label="Hugging Pap after black belt test"
            style={{ left: '-7.18%', top: '46.19%', width: '52.56%', height: '31.24%' }}
          />
          <p
            style={{
              position: 'absolute',
              left: '54.62%',
              top: '64.03%',
              width: '35.38%',
              fontSize: '14px',
              lineHeight: '20px',
              fontFamily: 'var(--font-body)',
              color: '#111E33',
            }}
          >
            Check my website out on desktop for more sketches + features!
          </p>
          <MobileTapReveal
            src="/assets/images/dragonfly-sketch-mobile.svg"
            alt=""
            label="Favorite animal"
            style={{ left: '-1.52%', top: '79.36%', width: '30.62%', height: '9.16%' }}
          />
          <MobileTapReveal
            src="/assets/images/with-mom-sketch-mobile.svg"
            alt=""
            label="My mom, sister, and I hiking in 2015"
            style={{ left: '32.31%', top: '72.61%', width: '67.69%', height: '27.48%' }}
          />
        </div>
      </section>

      {/* STORY SECTION - DESKTOP */}
      <section className="hidden md:block w-full" style={{ overflow: 'visible', marginTop: '100px' }}>
        <img
          src="/assets/images/above-images-sketch-line.svg"
          alt=""
          style={{ width: '100%', height: '247.31px', display: 'block', position: 'relative', zIndex: 5, marginBottom: '-240px', marginLeft: '-140px' }}
        />
        <div style={{ position: 'relative', width: '100%', zIndex: 1 }}>
          <img src="/assets/images/birthday-image.png" alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <p style={{ position: 'absolute', left: '999px', top: '159px', width: '377px', fontSize: '38px', fontFamily: 'var(--font-body)', color: 'white', lineHeight: '1.3' }}>
            Hello! My name is Alexia Kouletsis. I grew up in Hershey, Pennsylvania. Since I was about nine years old, art has consumed my life. Art has been and will always be my creative outlet, emotional comfort, and method of appreciating the beauty in world around me.
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', zIndex: 2, marginTop: '-250px' }}>
          <img src="/assets/images/me-painting-image.png" alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <p style={{ position: 'absolute', left: '687px', top: '303px', width: '705px', fontSize: '38px', fontFamily: 'var(--font-body)', color: '#111E33', lineHeight: '1.3' }}>
            Somewhere along the way of the previous image to this one, I additionally fell in love with coding. I took my first computer science class as a Sophomore in high school. The act of breaking down problems, building them back up again, and improving upon them evoked the same emotions that putting paint on a blank canvas did—excitement for new opportunities.
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', zIndex: 3, marginTop: '-200px' }}>
          <img src="/assets/images/me-graduating-image.png" alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <p style={{ position: 'absolute', left: '90px', top: '115px', width: '542px', fontSize: '38px', fontFamily: 'var(--font-body)', color: '#111E33', lineHeight: '1.3' }}>
            I now aim to synthesize both art and technology into my life. I believe that disintegrating the boundaries between technology and other academic fields is essential for progression and perspective in any future innovations.
          </p>
          <p style={{ position: 'absolute', left: '877px', top: '690px', width: '468px', fontSize: '38px', fontFamily: 'var(--font-body)', color: '#111E33', lineHeight: '1.3' }}>
            I view myself as an artist who uses technology as my paintbrush. Click anywhere below to see how I apply this philosophy throughout my various works!
          </p>
        </div>
        <img src="/assets/images/bellow-images-sketch-line.svg" alt="" style={{ width: '100%', height: '64.17px', display: 'block', position: 'relative', zIndex: 4, marginTop: '-40px' }} />
      </section>

      {/* STORY SECTION - MOBILE */}
      <section className="md:hidden relative w-full overflow-hidden" style={{ marginTop: '40px' }}>
        <img src="/assets/images/above-images-sketch-line-mobile.svg" alt="" style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 5, marginBottom: '-100px' }} />
        <div style={{ position: 'relative', width: '100%', zIndex: 1 }}>
          <img src="/assets/images/birthday-image-mobile.png" alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <p style={{ position: 'absolute', left: '267px', top: '97px', width: '103px', fontSize: '12px', fontFamily: 'var(--font-body)', color: 'white', lineHeight: '1.4' }}>
            Hello! My name is Alexia Kouletsis. I grew up in Hershey, Pennsylvania. Since I was about this years old, art has consumed my life. Art has been and will always be my creative outlet, emotional comfort, and method of appreciating the beauty in world around me.
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', zIndex: 2, marginTop: '-40px' }}>
          <img src="/assets/images/me-painting-image-mobile.png" alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <p style={{ position: 'absolute', left: '170px', top: '94px', width: '204px', fontSize: '12px', fontFamily: 'var(--font-body)', color: '#111E33', lineHeight: '1.4' }}>
            Somewhere along the way of the previous image to this one, I additionally fell in love with coding. I took my first computer science class as a Sophomore in high school. The act of breaking down problems, building them back up again, and improving upon them evoked the same emotions that putting paint on a blank canvas did—excitement for new opportunities.
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', zIndex: 3, marginTop: '-40px' }}>
          <img src="/assets/images/me-graduating-image-mobile.png" alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <p style={{ position: 'absolute', left: '19px', top: '25px', width: '160px', fontSize: '12px', fontFamily: 'var(--font-body)', color: '#111E33', lineHeight: '1.4' }}>
            I now aim to synthesize both art and technology into my life. I believe that disintegrating the boundaries between technology and other academic fields is essential for progression and perspective in any future innovations.
          </p>
          <p style={{ position: 'absolute', left: '251px', top: '244px', width: '122px', fontSize: '12px', fontFamily: 'var(--font-body)', color: '#111E33', lineHeight: '1.4' }}>
            I view myself as an artist who uses technology as my paintbrush. Click anywhere below to see how I apply this philosophy throughout my various works!
          </p>
        </div>
        <img src="/assets/images/bellow-images-sketch-line-mobile.svg" alt="" style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 4, marginTop: '-15px' }} />
      </section>

      {/* RESUME + TILES SECTION */}
      <section className="w-full px-4 md:px-10 pt-8 pb-0 md:pb-20 max-w-[1440px] mx-auto">
        <a
          href="/assets/Alexia-Kouletsis-Resume.pdf"
          download
          className="flex md:inline-flex items-center gap-3 group mb-12 md:mb-20 justify-center md:justify-start"
        >
          <img
            src="/assets/images/sun-icon.svg"
            alt=""
            className="transition-transform duration-300 group-hover:scale-110 w-[60px] h-[60px] md:w-[168px] md:h-[163px]"
          />
          <span style={{ fontFamily: 'var(--font-display)', color: '#111E33', lineHeight: '1.1' }} className="group-hover:underline text-[18px] md:text-[28px]">
            CLICK TO DOWNLOAD MY RESUME
          </span>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-16 md:gap-y-38 justify-items-center">
          <Tile href="/projects" tile="/assets/images/projects-tile.png" popout1="/assets/images/projects-popout-image-1.png" popout2="/assets/images/projects-popout-image-2.png" label="PROJECTS" size={320} mobileSize={220} />
          <Tile href="/research" tile="/assets/images/research-tile.png" popout1="/assets/images/research-popout-image-1.png" popout2="/assets/images/research-popout-image-2.png" label="RESEARCH" mobileSize={220} size={330} />
          <Tile href="/art-gallery" tile="/assets/images/art-gallery-tile.png" popout1="/assets/images/art-popout-image-1.png" popout2="/assets/images/art-popout-image-2.png" label="ART GALLERY" size={320} mobileSize={220} />
          <Tile href="/etc" tile="/assets/images/more-tile.png" popout1="/assets/images/more-popout-image-1.png" popout2="/assets/images/more-popout-image-2.png" label="& MORE" size={320} mobileSize={220} />
        </div>
      </section>

    </main>
  )
}