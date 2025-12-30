import { NavLink } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container nav">
        <span className="logo">MiWeb</span>

        <div className="links">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/about">Nosotros</NavLink>
          <NavLink to="/services">Servicios</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </div>
      </nav>
    </header>
  )
}
