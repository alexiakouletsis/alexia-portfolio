 import { useState } from 'react'
import { Link } from 'react-router-dom'

const designProjects = [
  { label: 'Goodkarma', image: '/assets/images/goodkarma-button.png', path: '/projects/design/Goodkarma' },
  { label: 'PawPal', image: '/assets/images/pawpal-button.png', path: '/projects/design/PawPal' },
  { label: '826 Boston', image: '/assets/images/826-button.png', path: '/projects/design/826Boston' },
  { label: 'Brave New World', image: '/assets/images/brave-new-world-button.png', path: '/projects/design/BraveNewWorld' },
  { label: 'Rome Brochure', image: '/assets/images/rome-button.png', path: '/projects/design/RomeBrochure' },
  { label: 'Semester 01', image: '/assets/images/sem01-button.png', path: '/projects/design/Semester01' },
]

const codeProjects = [
  {
    title: 'Goodkarma',
    tech: 'React, TypeScript, Tailwind, Vite, Git, Intersection Observer API',
    description: 'As a member of Scout, I had the pleasure of working on a team of fellow designers and developers to create a website for a local punk-rock band in Boston called Goodkarma. This band already had thorough branding and social media presence, so our job for making their website was to expand on this and further solidify brand identity. I worked as both a designer and developer on this team. On the development side, we utilized a tech stack of React, TypeScript, Tailwind, and Vite to code the website. We also used Github for version control, and I personally used Intersection Observer API for scroll-triggered animations. Check out the Design tab to see prototyping that preceded my code.',
    github: 'https://github.com/alexiakouletsis/Goodkarma_About_Page',
    scoutLink: 'https://scout.camd.northeastern.edu/',
  },
  {
    title: 'Grocery Splitter',
    tech: 'Python, Tkinter',
    description: 'Throughout my time studying abroad in Rome, Italy, I had four incredible roommates and a kitchen. While it was incredibly fun grocery shopping and cooking together, the matter of splitting the bill became complicated. Dividing it by five was not even, as some roommates were gluten free, dairy free, or just had varying food preferences. So, using the skills I learned in Python that semester, a classmate and I created an application that makes splitting a grocery bill. Users simply have to enter their receipt, check off what they will use, and the rest of the math automatically follows!',
    github: 'https://github.com/alexiakouletsis/Grocery_Receipt_Splitter',
  },
  {
    title: 'Alexit',
    tech: 'React/Create React App, JavaScript, CSS, Python',
    description: 'While studying abroad in Rome, I found myself frustrated with Quizlet\'s features being tucked behind a paywall. So, out of both financial benefit and spite, I built my own. Alexit is a personal Italian flashcard app with two distinct study modes: Vocab Mode for translation drilling and Grammar Mode for verb conjugation practice across 20+ Italian verbs. Features include wrong-answer retry, a review-incorrect-terms round, editable vocab lists, and direction toggling between English to Italian and Italian to English. A Python script was used to parse and clean my raw vocab notes from class into structured data for the app.',
    github: 'https://github.com/alexiakouletsis/I_Dont_Want_To_Pay_For_Quizlet',
  },
]

function DesignCard({ label, image, path }: { label: string; image: string; path: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={path}
      className="flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image}
        alt={label}
        style={{
          width: 'min(380px, 75vw)',
          height: 'min(380px, 75vw)',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 300ms ease',
        }}
      />
      <p
        className="text-[22px] md:text-[30px]"
        style={{
          fontFamily: 'var(--font-body)',
          color: '#111E33',
          marginTop: '12px',
          textDecoration: hovered ? 'underline' : 'none',
        }}
      >
        {label}
      </p>
    </Link>
  )
}

function CodeCard({ title, tech, description, github, scoutLink }: {
  title: string
  tech: string
  description: string
  github: string
  scoutLink?: string
}) {
  const [githubHovered, setGithubHovered] = useState(false)
  const renderDescription = (text: string, title: string) => {
    if (title === 'Goodkarma' && scoutLink) {
      const parts = text.split('Scout')
      return (
        <>
          {parts[0]}
          <a
            href={scoutLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1D7194', textDecoration: 'underline' }}
          >
            Scout
          </a>
          {parts[1]}
        </>
      )
    }
    return text
  }

  return (
    <div
      style={{
        border: '2px solid #111E33',
        borderRadius: '32px',
        padding: '24px',
        width: '100%',
      }}
    >
      <h2
        className="text-[22px] md:text-[32px]"
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 'bold',
          color: '#111E33',
          marginBottom: '4px',
        }}
      >
        {title}
      </h2>
      <p
        className="text-[11px] md:text-[14px]"
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          color: '#111E33',
          marginBottom: '16px',
        }}
      >
        {tech}
      </p>
      <p
        className="text-[13px] md:text-[16px]"
        style={{
          fontFamily: 'var(--font-body)',
          color: '#111E33',
          lineHeight: '1.6',
          marginBottom: '24px',
        }}
      >
        {renderDescription(description, title)}
      </p>
      <div className="flex justify-end">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setGithubHovered(true)}
          onMouseLeave={() => setGithubHovered(false)}
          style={{
            border: '2px solid #00A79D',
            borderRadius: '999px',
            padding: '8px 24px',
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: '#00A79D',
            textDecoration: 'none',
            display: 'inline-block',
            transform: githubHovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 300ms ease',
          }}
        >
          GITHUB
        </a>
      </div>
    </div>
  )
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center"
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(24px, 5vw, 44px)',
        color: '#111E33',
        background: 'none',
        border: 'none',
        padding: '8px 20px',
        cursor: 'inherit',
        minWidth: 'clamp(120px, 25vw, 180px)',
      }}
    >
      {active && (
        <>
          <img
            src="/assets/images/tab-circle.svg"
            alt=""
            className="hidden md:block absolute inset-0 w-full h-full"
            style={{ objectFit: 'fill', opacity: 1 }}
          />
          <img
            src="/assets/images/tab-circle-mobile.svg"
            alt=""
            className="md:hidden absolute inset-0 w-full h-full"
            style={{ objectFit: 'fill', opacity: 1 }}
          />
        </>
      )}
      {!active && hovered && (
        <img
          src="/assets/images/tab-circle.svg"
          alt=""
          className="hidden md:block absolute inset-0 w-full h-full"
          style={{ objectFit: 'fill', opacity: 0.2 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'design' | 'code'>('design')

  return (
    <main className="w-full max-w-[1440px] mx-auto px-8 md:px-16 py-12">

      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(45px, 7vw, 100px)',
          color: '#111E33',
          lineHeight: '1',
          marginBottom: '80px',
          textAlign: 'center',
        }}
      >
        PROJECTS
      </h1>

      {/* Tabs */}
      <div className="flex items-end justify-center gap-8 md:gap-20 mb-0">
        <TabButton
          label="Design"
          active={activeTab === 'design'}
          onClick={() => setActiveTab('design')}
        />
        <TabButton
          label="Code"
          active={activeTab === 'code'}
          onClick={() => setActiveTab('code')}
        />
      </div>

      {/* Separator line */}
      <img
        src="/assets/images/projects-seperator-line.svg"
        alt=""
        className="hidden md:block w-full"
        style={{ marginTop: '0', marginBottom: '64px' }}
      />
      <img
        src="/assets/images/projects-seperator-line-mobile.svg"
        alt=""
        className="md:hidden w-full"
        style={{ marginTop: '0', marginBottom: '40px' }}
      />

      {/* Design tab content */}
      {activeTab === 'design' && (
        <div
          className="grid grid-cols-1 md:grid-cols-2 justify-items-center"
          style={{
            columnGap: '0px',
            rowGap: '80px',
          }}
        >
          {designProjects.map((project) => (
            <DesignCard
              key={project.path}
              label={project.label}
              image={project.image}
              path={project.path}
            />
          ))}
        </div>
      )}

      {/* Code tab content */}
      {activeTab === 'code' && (
        <div className="flex flex-col gap-10 max-w-[900px] mx-auto">
          {codeProjects.map((project) => (
            <CodeCard
              key={project.title}
              title={project.title}
              tech={project.tech}
              description={project.description}
              github={project.github}
              scoutLink={project.scoutLink}
            />
          ))}
        </div>
      )}

    </main>
  )
}