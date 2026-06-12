import React, { useEffect, useRef } from 'react'

const DotLoader = () => (
  <div style={{
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(241, 237, 230, 0.8)',
    zIndex: 1,
  }}>
    <div style={{ display: 'flex', gap: '8px' }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#111E33',
            animation: `dot-pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  </div>
)

function FadeImage({ src, alt, className, style, loading }: {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
}) {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <div className={className} style={{ position: 'relative' }}>
      {!loaded && <DotLoader />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
          ...style,
        }}
      />
    </div>
  )
}

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

export default function Etc() {
  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pt-12">
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(45px, 7vw, 100px)',
            color: '#111E33',
            lineHeight: '1.05',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          SO... WHAT ELSE<br />DO YOU DO?
        </h1>
      </div>

      <img
        src="/assets/images/what-else-hero.webp"
        alt="Taekwondo and travel hero"
        className="hidden md:block w-full"
        style={{ marginBottom: '64px' }}
      />
      <img
        src="/assets/images/what-else-hero-mobile.webp"
        alt="Taekwondo and travel hero"
        className="md:hidden w-full"
        style={{ marginBottom: '48px' }}
      />

      <main className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pb-12">

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Taekwondo section */}
        <section style={{ marginBottom: '64px' }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                fontWeight: 'bold',
                color: '#111E33',
                marginBottom: '20px',
                textAlign: 'left',
              }}
            >
              Taekwondo
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(13px, 1.5vw, 22px)',
                color: '#111E33',
                lineHeight: '1.7',
                maxWidth: '770px',
                margin: '0 0 10px 0',
              }}
            >
              Since I was eight years old, Taekwondo has been one of the most defining forces
              in my life. The discipline, the community, the countless hours of training 
              shaped who I am in ways I'm still discovering. There is something truly special 
              about a sport that grows with you, and Taekwondo has seen me through every high 
              and low. Now at Northeastern, I am so proud to carry it forward as a member of 
              the university's Taekwondo Club, training alongside some of the most dedicated 
              and passionate people I've ever met.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <FadeImage
              src="/assets/images/all-tkd-images-desktop.webp"
              alt="Taekwondo photos"
              loading="lazy"
              className="hidden md:block w-full"
              style={{ display: 'block', maxWidth: '99%', margin: '-175px auto 0' }}
            />
            <FadeImage
              src="/assets/images/all-tkd-images-mobile.webp"
              alt="Taekwondo photos"
              loading="lazy"
              className="md:hidden w-full"
            />
          </FadeIn>
        </section>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Brazilian Jiu-Jitsu section */}
        <section style={{ marginBottom: '64px' }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                fontWeight: 'bold',
                color: '#111E33',
                marginBottom: '20px',
                textAlign: 'left',
              }}
            >
              Brazilian Jiu-Jitsu
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(13px, 1.5vw, 22px)',
                color: '#111E33',
                lineHeight: '1.7',
                maxWidth: '820px',
                margin: '0 0 20px 0',
              }}
            >
              After years of Taekwondo, I found myself curious about how else I could grow. 
              I craved being the beginner in a room again. So in high school, I tried a Mixed Martial
              Arts class, and something about the ground fighting just clicked. Jiu-Jitsu became my 
              new obsession. Now, being a member of Northeastern's Brazilian Jiu-Jitsu club 
              has been one of the most rewarding decisions I've made in college. The community, 
              energy, and sheer grit surrounding this sport have built lessons that I carry
              with me far beyond the mat.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <FadeImage
              src="/assets/images/all-bjj-images-desktop.webp"
              alt="Brazilian Jiu-Jitsu photos"
              loading="lazy"
              className="hidden md:block w-full"
              style={{ display: 'block', maxWidth: '99%', margin: '-15px auto 0' }}

            />
            <FadeImage
              src="/assets/images/all-bjj-images-mobile.webp"
              alt="Brazilian Jiu-Jitsu photos"
              loading="lazy"
              className="md:hidden w-full"
            />
          </FadeIn>
        </section>

        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Travel section */}
        <section style={{ marginBottom: '64px' }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                fontWeight: 'bold',
                color: '#111E33',
                marginBottom: '40px',
                textAlign: 'left',
              }}
            >
              Travel
            </h2>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>

            <FadeIn>
              <div>
                <FadeImage
                  src="/assets/images/travel-images-row1.webp"
                  alt="Baños Ecuador, Castellammare del Golfo, Milan Italy"
                  loading="lazy"
                  style={{ width: '100%', display: 'block' }}
                />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(11px, 1.2vw, 18px)',
                    color: '#111E33',
                    textAlign: 'center',
                    marginTop: '8px',
                    marginBottom: '24px',
                  }}
                >
                  <span>Baños, Ecuador</span>
                  <span>Castellammare del Golfo, Sicily, Italy</span>
                  <span>Milan, Italy</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <FadeImage
                  src="/assets/images/travel-images-row2.webp"
                  alt="Acropolis of Athens, Florence Italy"
                  loading="lazy"
                  style={{ width: '100%', display: 'block' }}
                />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(11px, 1.2vw, 18px)',
                    color: '#111E33',
                    textAlign: 'center',
                    marginTop: '8px',
                    marginBottom: '24px',
                  }}
                >
                  <span>Acropolis of Athens, Greece</span>
                  <span>Florence, Italy</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <FadeImage
                  src="/assets/images/travel-images-row3.webp"
                  alt="Rome Italy, Paris France"
                  loading="lazy"
                  style={{ width: '100%', display: 'block' }}
                />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(11px, 1.2vw, 18px)',
                    color: '#111E33',
                    textAlign: 'center',
                    marginTop: '8px',
                    marginBottom: '24px',
                  }}
                >
                  <span>Rome, Italy</span>
                  <span>Paris, France</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <FadeImage
                  src="/assets/images/travel-images-row4.webp"
                  alt="Barcelona Spain, Lake Como Italy, Vienna Austria"
                  loading="lazy"
                  style={{ width: '100%', display: 'block' }}
                />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(11px, 1.2vw, 18px)',
                    color: '#111E33',
                    textAlign: 'center',
                    marginTop: '8px',
                    marginBottom: '8px',
                  }}
                >
                  <span>Barcelona, Spain</span>
                  <span>Lake Como, Italy</span>
                  <span>Vienna, Austria</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>
      </main>
    </>
  )
}