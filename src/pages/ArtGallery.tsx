import { useEffect, useState } from 'react'

export default function ArtGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }, 1000)

    return () => {
      clearTimeout(timer)
      const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
      if (existing) document.body.removeChild(existing)
    }
  }, [])

  const Painting = ({ src, alt, style = {}, loading = 'lazy' }: {
    src: string
    alt: string
    style?: React.CSSProperties
    loading?: 'lazy' | 'eager'
  }) => (
    <img
      src={src}
      alt={alt}
      onClick={() => setLightbox(src)}
      loading={loading}
      style={{
        width: '100%',
        display: 'block',
        cursor: 'zoom-in',
        ...style,
      }}
    />
  )

  return (
    <>
      {/* Lightbox overlay */}
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

      {/* Title + subtitle inside padded container */}
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

      {/* Exhibit hero photo — full bleed */}
      <img
        src="/assets/images/all-paintings.png"
        alt="Art exhibit display"
        className="w-full"
        style={{ display: 'block', marginBottom: '64px' }}
      />

      <main className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pb-12">

        {/* Instagram embeds */}
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

        {/* Gallery grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>

          {/* Row 1: 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Painting src="/assets/images/madame-x-portrait.png" alt="Madame X portrait" loading="eager" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            <Painting src="/assets/images/club-dj.png" alt="Club DJ painting" loading="eager" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
          </div>

          {/* Row 2: 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Painting src="/assets/images/people-screaming-painting.png" alt="People screaming painting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            <Painting src="/assets/images/turtle-painting.png" alt="Turtle painting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
          </div>

          {/* Row 3: full width */}
          <Painting src="/assets/images/typing-painting.png" alt="Typing painting" />

          {/* Row 4: full width */}
          <Painting src="/assets/images/saw-painting.png" alt="Saw painting" />

          {/* Row 5: 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Painting src="/assets/images/self-portrait-melting.png" alt="Self portrait melting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            <Painting src="/assets/images/self-portrait-embroidery.png" alt="Self portrait embroidery" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
          </div>

          {/* Row 6: 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Painting src="/assets/images/redbull-painting.png" alt="Red Bull painting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            <Painting src="/assets/images/hoco-painting.png" alt="Hoco painting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
          </div>

          {/* Row 7: 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Painting src="/assets/images/mirror-melting.png" alt="Mirror melting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            <Painting src="/assets/images/capitol-painting.png" alt="Capitol painting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
          </div>

          {/* Row 8: 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Painting src="/assets/images/self-portrait-embroidery.png" alt="Self portrait embroidery 2" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            <Painting src="/assets/images/time-desert-painting.png" alt="Time desert painting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
          </div>

          {/* Row 9: full width */}
          <Painting src="/assets/images/beach-painting.png" alt="Beach painting" />

          {/* Row 10: 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Painting src="/assets/images/hexagon-painting.png" alt="Hexagon painting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            <Painting src="/assets/images/guts-corset-painting.png" alt="Guts corset painting" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
          </div>

        </div>

        {/* Thanks text */}
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

      </main>
    </>
  )
}