import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './composants/NavBar.jsx'
import Footer from './composants/Footer.jsx'
import EspecesMenace from './Pages/EspecesMenace.jsx'
import PageScore from './Pages/PageScore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<EspecesMenace />} />
        <Route path="/quiz" element={<App />} />
        <Route path="/page-score" element={<PageScore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)