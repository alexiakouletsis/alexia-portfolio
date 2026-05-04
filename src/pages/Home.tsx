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

  return (
    <div
      style={{ ...style, position: 'absolute' }}
      className="group"
      onMouseEnter={() => animateTo(1)}
      onMouseLeave={() => animateTo(0)}
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
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-[1500ms] opacity-0 group-hover:opacity-100"
        style={{ transform: textRotation ? `rotate(${textRotation})` : undefined }}
      >
        <p style={{ fontSize: '25px', fontFamily: 'var(--font-body)', color: '#111E33', textAlign: 'center' }}>
          {label}
        </p>
      </div>

      <img
        src={src}
        alt={alt}
        className="w-full h-full transition-opacity duration-[1500ms] group-hover:opacity-0"
        style={{ filter: `url(#${filterId})` }}
      />
    </div>
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
          src="/src/assets/images/hero-logo.svg"
          alt="Alexia Rae Kouletsis - Art, Tech, Design, and Optimism"
          style={{ position: 'absolute', left: '70px', top: '37px', width: '965.62px', height: '532px' }}
        />
        <SketchWithReveal
          src="/src/assets/images/standing-portrait-sketch.svg"
          alt=""
          label="Me!"
          style={{ left: '930px', top: '74px', width: '471px', height: '863px' }}
        />
        <SketchWithReveal
          src="/src/assets/images/strawberry-sketch.svg"
          alt=""
          label="Favorite food"
          style={{ left: '320px', top: '523px', width: '187px', height: '186px' }}
        />
        <SketchWithReveal
          src="/src/assets/images/9-cake-sketch.svg"
          alt=""
          label="My 9th birthday"
          style={{ left: '-13px', top: '533px', width: '334px', height: '384.01px' }}
        />
        <SketchWithReveal
          src="/src/assets/images/with-pap-sketch.svg"
          alt=""
          label="My pap hugging me after my first black belt test"
          style={{ left: '563px', top: '485px', width: '353px', height: '559px' }}
        />
        <SketchWithReveal
          src="/src/assets/images/with-dad-sketch.svg"
          alt=""
          label="My dad and I at the beach in 2013"
          style={{ left: '-2px', top: '921px', width: '632px', height: '538px' }}
        />
        <SketchWithReveal
          src="/src/assets/images/ak-logo-sketch.svg"
          alt=""
          label="Logo!"
          style={{ left: '660px', top: '1089px', width: '189px', height: '176px' }}
        />
        <SketchWithReveal
          src="/src/assets/images/dragonfly-sketch.svg"
          alt=""
          label="Favorite animal"
          style={{ left: '1129px', top: '945px', width: '297px', height: '236px' }}
        />
        <SketchWithReveal
          src="/src/assets/images/carnation-sketch.svg"
          alt=""
          label="Favorite flower"
          textRotation="-10deg"
          style={{ left: '29px', top: '1498px', width: '504.33px', height: '249.15px', transform: 'rotate(10deg)' }}
        />
        <SketchWithReveal
          src="/src/assets/images/with-mom-sketch.svg"
          alt=""
          label="My mom, sister, and I hiking in 2015"
          style={{ left: '629px', top: '1094px', width: '831px', height: '718px' }}
        />
      </section>

      {/* MOBILE HERO */}
      <section
        className="md:hidden relative w-full overflow-hidden"
        style={{ paddingBottom: '265.9%' }}
      >
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/hero-logo.svg"
            alt="Alexia Rae Kouletsis - Art, Tech, Design, and Optimism"
            style={{ position: 'absolute', left: '6.67%', top: '3.76%', width: '94.91%', height: '18.61%' }}
          />
          <img
            src="/src/assets/images/standing-portrait-sketch.svg"
            alt=""
            style={{ position: 'absolute', left: '43.59%', top: '18.99%', width: '59.74%', height: '41.27%' }}
          />
          <img
            src="/src/assets/images/strawberry-sketch.svg"
            alt=""
            style={{ position: 'absolute', left: '37.44%', top: '19.38%', width: '23.59%', height: '8.78%' }}
          />
          <img
            src="/src/assets/images/9-cake-sketch.svg"
            alt=""
            style={{ position: 'absolute', left: '-3.08%', top: '19.86%', width: '43.85%', height: '19.0%' }}
          />
          <img
            src="/src/assets/images/ak-logo-sketch.svg"
            alt=""
            style={{ position: 'absolute', left: '22.31%', top: '39.63%', width: '17.69%', height: '6.17%' }}
          />
          <img
            src="/src/assets/images/with-pap-sketch.svg"
            alt=""
            style={{ position: 'absolute', left: '-7.18%', top: '46.19%', width: '52.56%', height: '31.24%' }}
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
          <img
            src="/src/assets/images/dragonfly-sketch-mobile.svg"
            alt=""
            style={{ position: 'absolute', left: '-1.52%', top: '79.36%', width: '30.62%', height: '9.16%' }}
          />
          <img
            src="/src/assets/images/with-mom-sketch-mobile.svg"
            alt=""
            style={{ position: 'absolute', left: '32.31%', top: '72.61%', width: '67.69%', height: '27.48%' }}
          />
        </div>
      </section>
    </main>
  )
}