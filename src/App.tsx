import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Research from './pages/Research'
import ArtGallery from './pages/ArtGallery'
import Etc from './pages/Etc'
import Goodkarma from './pages/design/Goodkarma'
import PawPal from './pages/design/PawPal'
import Boston826 from './pages/design/Boston826'
import BraveNewWorld from './pages/design/BraveNewWorld'
import RomeBrochure from './pages/design/RomeBrochure'
import Semester01 from './pages/design/Semester01'

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="/projects/design/Goodkarma" element={<Goodkarma />} />
          <Route path="/projects/design/PawPal" element={<PawPal />} />
          <Route path="/projects/design/Boston826" element={<Boston826 />} />
          <Route path="/projects/design/BraveNewWorld" element={<BraveNewWorld />} />
          <Route path="/projects/design/RomeBrochure" element={<RomeBrochure />} />
          <Route path="/projects/design/Semester01" element={<Semester01 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App