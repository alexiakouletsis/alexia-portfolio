import { useEffect, useState, useRef } from 'react'
import React from 'react'

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

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

const Painting = ({ src, alt, style = {}, loading = 'eager', onClickPainting }: {
  src: string
  alt: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
  onClickPainting: (src: string) => void
}) => {
  const [loaded, setLoaded] = React.useState(false)
  const aspectRatio = (style as any).aspectRatio || 'auto'

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio }}>
      {!loaded && <DotLoader />}
      <img
        src={src}
        alt={alt}
        onClick={() => onClickPainting(src)}
        loading={loading}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          cursor: 'zoom-in',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
          ...style,
        }}
      />
    </div>
  )
}

export default function ArtGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    const loadInstagram = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      } else {
        const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
        if (existing) return
        const script = document.createElement('script')
        script.src = 'https://www.instagram.com/embed.js'
        script.async = true
        document.body.appendChild(script)
      }
    }

    if (document.readyState === 'complete') {
      loadInstagram()
    } else {
      window.addEventListener('load', loadInstagram)
      return () => window.removeEventListener('load', loadInstagram)
    }
  }, [])

  return (
    <>
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.88)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '24px',
          }}
        >
          <img
            src={lightbox}
            alt="Expanded painting"
            style={{
              maxWidth: '100%',
              maxHeight: '100vh',
              objectFit: 'contain',
              borderRadius: '4px',
            }}
          />
        </div>
      )}

      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pt-12">
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(45px, 7vw, 100px)',
            color: '#111E33',
            lineHeight: '1',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          ART<br />GALLERY
        </h1>
        <p
          className="text-[14px] md:text-[20px]"
          style={{
            fontFamily: 'var(--font-body)',
            color: '#111E33',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          No notes. Simply scroll and enjoy! Feel free to{' '}
          <a
            href="mailto:kouletsis.a@northeastern.edu"
            style={{ color: '#1D7194', textDecoration: 'underline' }}
          >
            ask me
          </a>
          {' '}about any of my pieces or exhibits.
        </p>
      </div>

      <img
        src="/assets/images/all-paintings.webp"
        alt="Art exhibit display"
        className="w-full"
        style={{ display: 'block', marginBottom: '64px' }}
      />

      <main className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pb-12">

        <FadeIn>
          <div
            className="flex flex-col md:flex-row justify-center items-start"
            style={{ gap: '32px', marginBottom: '72px' }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DLVrQTzRsiR/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '470px',
                minWidth: '0',
                padding: '0',
                width: '100%',
              }}
            />
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DFsq6XaxLWS/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '470px',
                minWidth: '0',
                padding: '0',
                width: '100%',
              }}
            />
          </div>
        </FadeIn>

        <FadeIn>
          <p
            className="text-[14px] md:text-[20px]"
            style={{
              fontFamily: 'var(--font-body)',
              color: '#111E33',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            Try clicking on a piece!
          </p>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>

          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <Painting src="/assets/images/madame-x-portrait.webp" alt="Madame X portrait" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
              <Painting src="/assets/images/club-dj.webp" alt="Club DJ painting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            </div>
          </FadeIn>

          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <Painting src="/assets/images/people-screaming-painting.webp" alt="People screaming painting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
              <Painting src="/assets/images/turtle-painting.webp" alt="Turtle painting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            </div>
          </FadeIn>

          <FadeIn>
            <Painting src="/assets/images/typing-painting.webp" alt="Typing painting" onClickPainting={setLightbox} />
          </FadeIn>

          <FadeIn>
            <Painting src="/assets/images/saw-painting.webp" alt="Saw painting" onClickPainting={setLightbox} />
          </FadeIn>

          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <Painting src="/assets/images/self-portrait-melting.webp" alt="Self portrait melting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
              <Painting src="/assets/images/self-portrait-embroidery.webp" alt="Self portrait embroidery" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            </div>
          </FadeIn>

          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <Painting src="/assets/images/redbull-painting.webp" alt="Red Bull painting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
              <Painting src="/assets/images/hoco-painting.webp" alt="Hoco painting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            </div>
          </FadeIn>

          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <Painting src="/assets/images/mirror-melting.webp" alt="Mirror melting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
              <Painting src="/assets/images/capitol-painting.webp" alt="Capitol painting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            </div>
          </FadeIn>

          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <Painting src="/assets/images/self-portrait-embroidery.webp" alt="Self portrait embroidery 2" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
              <Painting src="/assets/images/time-desert-painting.webp" alt="Time desert painting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            </div>
          </FadeIn>

          <FadeIn>
            <Painting src="/assets/images/beach-painting.webp" alt="Beach painting" onClickPainting={setLightbox} />
          </FadeIn>

          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <Painting src="/assets/images/hexagon-painting.webp" alt="Hexagon painting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
              <Painting src="/assets/images/guts-corset-painting.webp" alt="Guts corset painting" onClickPainting={setLightbox} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            </div>
          </FadeIn>

        </div>

        <FadeIn>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(12px, 2vw, 25px)',
              color: '#111E33',
              textAlign: 'center',
              marginTop: '64px',
              marginBottom: '16px',
            }}
          >
            Thanks for making it all the way down :)
          </p>
        </FadeIn>

      </main>
    </>
  )
}