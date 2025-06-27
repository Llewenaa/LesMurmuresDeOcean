import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './composants/NavBar.jsx'
import Footer from './composants/Footer.jsx'
import EspecesMenace from './Pages/EspecesMenace.jsx'
import Quiz from './Pages/Quiz.jsx'
import PageScore from './Pages/PageScore.jsx' // Assure-toi que ce fichier existe bien

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

const main = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<EspecesMenace/>} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/page-score" element={<PageScore />} />
        {/* Tu peux ajouter d'autres routes ici si besoin */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default main;