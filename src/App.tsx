import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Research from './pages/Research'
import ArtGallery from './pages/ArtGallery'
import Etc from './pages/Etc'
import Project1 from './pages/design/Project1'
import Project2 from './pages/design/Project2'
import Project3 from './pages/design/Project3'
import Project4 from './pages/design/Project4'
import Project5 from './pages/design/Project5'
import Project6 from './pages/design/Project6'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="/projects/design/1" element={<Project1 />} />
          <Route path="/projects/design/2" element={<Project2 />} />
          <Route path="/projects/design/3" element={<Project3 />} />
          <Route path="/projects/design/4" element={<Project4 />} />
          <Route path="/projects/design/5" element={<Project5 />} />
          <Route path="/projects/design/6" element={<Project6 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App