import "../css/NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <img src="/src/assets/logoMarie.png" alt="Logo" className="logo" />
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Espèces marines menacées</NavLink>
      <NavLink to="/quiz" className={({ isActive }) => isActive ? 'active' : ''}>Quiz</NavLink>
      <a style={{ pointerEvents: 'none', opacity: 0.5 }}>Agenda d'activités locales</a>
    </nav>
  )
}

 
