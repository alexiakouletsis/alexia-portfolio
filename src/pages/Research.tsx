export default function Research() {
  return (
    <main className="w-full max-w-[1200px] mx-auto px-6 md:px-16 py-12">

      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(45px, 8vw, 100px)',
          color: '#111E33',
          lineHeight: '1',
          marginBottom: '60px',
          textAlign: 'center',
        }}
      >
        RESEARCH
      </h1>

      {/* Design in Education Research */}
      <h2
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(18px, 2.5vw, 38px)',
          fontWeight: 'bold',
          color: '#111E33',
          marginBottom: '16px',
        }}
      >
        Design in Education Research
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
        Designing the Thinkers of Tomorrow is a research dossier that traces American public education from its Puritan roots to its Prussian-modeled present. It analyses how the physical and technological design of schools reflect opportunity and educational disparities in society. Pulling from theorists like Don Norman, Arturo Escobar, and Donna Haraway, it looks at how today's classrooms, devices, and AI tools either build or kill the capacity for curiosity and critical thought. It closes with a speculative question: if public education was designed, it can be redesigned.
      </p>
      <div className="flex justify-center mb-8">
        <a
          href="/assets/images/Designing_the_Thinkers_of_Tomorrow.pdf"
          download
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.5vw, 22px)',
            color: '#1D7194',
            textDecoration: 'underline',
          }}
        >
          Click to download
        </a>
      </div>
      <iframe
        src="/assets/images/Designing_the_Thinkers_of_Tomorrow.pdf"
        className="w-full mb-16"
        style={{ height: '800px', border: 'none' }}
        title="Designing the Thinkers of Tomorrow"
      />

      {/* My Favorite Thing */}
      <h2
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(18px, 2.5vw, 38px)',
          fontWeight: 'bold',
          color: '#111E33',
          marginBottom: '16px',
        }}
      >
        My Favorite Thing
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
        When I studied abroad in Rome, Italy, my roommates knew about my coffee addiction and got me a Bialetti Moka Express for my birthday. That little stovetop pot benefitted not only my finances while I was abroad, but also all of coffee-making history. This dossier traces the Moka Express from Alfonso Bialetti's laundry-inspired cast-aluminum invention in 1933 to its status as a global kitchen staple, and explores the design details that make it so intuitive to use. Writing it felt like encapsulating my memories of Rome into applicable design theory. I now look at my moka pot with love for my friends and admiration for its complexity turned simple.
      </p>
      <div className="flex justify-center mb-8">
        <a
          href="/assets/images/Favorite_Things_Bialetti.pdf"
          download
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.5vw, 22px)',
            color: '#1D7194',
            textDecoration: 'underline',
          }}
        >
          Click to download
        </a>
      </div>
      <iframe
        src="/assets/images/Favorite_Things_Bialetti.pdf"
        className="w-full mb-16"
        style={{ height: '800px', border: 'none' }}
        title="Favorite Things Bialetti"
      />

    </main>
  )
}