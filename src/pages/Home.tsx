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
        <img
          src="/src/assets/images/standing-portrait-sketch.svg"
          alt=""
          style={{ position: 'absolute', left: '930px', top: '74px', width: '471px', height: '863px' }}
        />
        <img
          src="/src/assets/images/strawberry-sketch.svg"
          alt=""
          style={{ position: 'absolute', left: '320px', top: '523px', width: '187px', height: '186px' }}
        />
        <img
          src="/src/assets/images/9-cake-sketch.svg"
          alt=""
          style={{ position: 'absolute', left: '-13px', top: '533px', width: '334px', height: '384.01px' }}
        />
        <img
          src="/src/assets/images/with-pap-sketch.svg"
          alt=""
          style={{ position: 'absolute', left: '563px', top: '485px', width: '353px', height: '559px' }}
        />
        <img
          src="/src/assets/images/with-dad-sketch.svg"
          alt=""
          style={{ position: 'absolute', left: '-2px', top: '921px', width: '632px', height: '538px' }}
        />
        <img
          src="/src/assets/images/ak-logo-sketch.svg"
          alt=""
          style={{ position: 'absolute', left: '660px', top: '1089px', width: '189px', height: '176px' }}
        />
        <img
          src="/src/assets/images/dragonfly-sketch.svg"
          alt=""
          style={{ position: 'absolute', left: '1129px', top: '945px', width: '297px', height: '236px', transform: 'rotate(0deg)' }}
        />
        <img
          src="/src/assets/images/carnation-sketch.svg"
          alt=""
          style={{ position: 'absolute', left: '29px', top: '1498px', width: '504.33px', height: '249.15px', transform: 'rotate(10deg)' }}
        />
        <img
          src="/src/assets/images/with-mom-sketch.svg"
          alt=""
          style={{ position: 'absolute', left: '629px', top: '1094px', width: '831px', height: '718px' }}
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
            style={{
              position: 'absolute',
              left: '6.67%',
              top: '3.76%',
              width: '94.91%',
              height: '18.61%',
            }}
          />
          <img
            src="/src/assets/images/standing-portrait-sketch.svg"
            alt=""
            style={{
              position: 'absolute',
              left: '43.59%',
              top: '18.99%',
              width: '59.74%',
              height: '41.27%',
            }}
          />
          <img
            src="/src/assets/images/strawberry-sketch.svg"
            alt=""
            style={{
              position: 'absolute',
              left: '37.44%',
              top: '19.38%',
              width: '23.59%',
              height: '8.78%',
            }}
          />
          <img
            src="/src/assets/images/9-cake-sketch.svg"
            alt=""
            style={{
              position: 'absolute',
              left: '-3.08%',
              top: '19.86%',
              width: '43.85%',
              height: '19.0%',
            }}
          />
          <img
            src="/src/assets/images/ak-logo-sketch.svg"
            alt=""
            style={{
              position: 'absolute',
              left: '22.31%',
              top: '39.63%',
              width: '17.69%',
              height: '6.17%',
            }}
          />
          <img
            src="/src/assets/images/with-pap-sketch.svg"
            alt=""
            style={{
              position: 'absolute',
              left: '-7.18%',
              top: '46.19%',
              width: '52.56%',
              height: '31.24%',
            }}
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
            style={{
              position: 'absolute',
              left: '-1.52%',
              top: '79.36%',
              width: '30.62%',
              height: '9.16%',
              transform: 'rotate(0deg)',
            }}
          />
          <img
            src="/src/assets/images/with-mom-sketch-mobile.svg"
            alt=""
            style={{
              position: 'absolute',
              left: '32.31%',
              top: '72.61%',
              width: '67.69%',
              height: '27.48%',
            }}
          />
        </div>
      </section>
    </main>
  )
}