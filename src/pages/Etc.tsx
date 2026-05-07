export default function Etc() {
  return (
    <>
      {/* Hero images — full bleed, outside padded container */}
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
        src="/assets/images/what-else-hero.png"
        alt="Taekwondo and travel hero"
        className="hidden md:block w-full"
        style={{ marginBottom: '64px' }}
      />
      <img
        src="/assets/images/what-else-hero-mobile.png"
        alt="Taekwondo and travel hero"
        className="md:hidden w-full"
        style={{ marginBottom: '48px' }}
      />

      <main className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pb-12">

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Taekwondo section */}
        <section style={{ marginBottom: '64px' }}>
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
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 1.5vw, 22px)',
              color: '#111E33',
              lineHeight: '1.7',
              marginBottom: '40px',
              maxWidth: '820px',
              margin: '0 0 40px 0',
            }}
          >
            Since I was eight years old, Taekwondo has been weaved into my life. I firmly
            believe it has made me who I am, through both the lessons I've learned and the
            people I've met. It truly is a lifelong community that I am proud to be a part of.
            Now at college, I have been continuing Taekwondo as a member of Northeastern's
            Taekwondo Club. It has been such a privilege to learn and train with a team of
            such dedicated and talented people.
          </p>
          <img
            src="/assets/images/all-tkd-images-desktop.png"
            alt="Taekwondo photos"
            className="hidden md:block w-full"
          />
          <img
            src="/assets/images/all-tkd-images-mobile.png"
            alt="Taekwondo photos"
            className="md:hidden w-full"
          />
        </section>

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Brazilian Jiu-Jitsu section */}
        <section style={{ marginBottom: '64px' }}>
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
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 1.5vw, 22px)',
              color: '#111E33',
              lineHeight: '1.7',
              marginBottom: '40px',
              maxWidth: '820px',
              margin: '0 0 40px 0',
            }}
          >
            After pursuing Taekwondo for so long, I wanted to continue challenging myself
            by trying a new martial art. So when I was in high school, I tried a Mixed Martial
            Arts class, and have been training it ever since. I fell especially in love with the
            ground fighting aspect of MMA, leading me to Jiu-Jitsu. So of course, I am also a
            proud member of Northeastern's Brazilian Jiu-Jitsu club. This club has pushed me
            to grow and has given me countless amazing memories, and for that I am
            incredibly grateful.
          </p>
          <img
            src="/assets/images/all-bjj-images-desktop.png"
            alt="Brazilian Jiu-Jitsu photos"
            className="hidden md:block w-full"
          />
          <img
            src="/assets/images/all-bjj-images-mobile.png"
            alt="Brazilian Jiu-Jitsu photos"
            className="md:hidden w-full"
          />
        </section>

        {/* Separator */}
        <img src="/assets/images/line-separator.svg" alt="" className="hidden md:block w-full mb-16" />
        <img src="/assets/images/line-separator-mobile.svg" alt="" className="md:hidden w-full mb-10" />

        {/* Travel section */}
        <section style={{ marginBottom: '64px' }}>
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

          {/* Travel grid — all rows as pre-composited images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>

            {/* Row 1: Baños / Castellammare / Milan */}
            <div>
              <img
                src="/assets/images/travel-images-row1.png"
                alt="Baños Ecuador, Castellammare del Golfo, Milan Italy"
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

            {/* Row 2: Acropolis / Florence */}
            <div>
              <img
                src="/assets/images/travel-images-row2.png"
                alt="Acropolis of Athens, Florence Italy"
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

            {/* Row 3: Rome / Paris */}
            <div>
              <img
                src="/assets/images/travel-images-row3.png"
                alt="Rome Italy, Paris France"
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

            {/* Row 4: Barcelona / Lake Como / Vienna */}
            <div>
              <img
                src="/assets/images/travel-images-row4.png"
                alt="Barcelona Spain, Lake Como Italy, Vienna Austria"
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

          </div>
        </section>
      </main>
    </>
  )
}