import React from 'react'
import Home from './Home'
import About from './About'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
    <div className="logo">MyBrand</div>
    <div className="burger" id="burger">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="nav-links" id="navLinks">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
