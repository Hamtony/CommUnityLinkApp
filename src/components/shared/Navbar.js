import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/explore">Explore</a></li>
        <li className="navbar-item"><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  )
}
