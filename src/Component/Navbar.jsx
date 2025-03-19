import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <h1 className="logo">MyPortfolio</h1>
      <ul className="nav-links">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/skill">Skill</Link></li>
        <li className="nav-item"><Link to="/project">Project</Link></li>
        <li className="nav-item"><Link to="/About">About</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar

