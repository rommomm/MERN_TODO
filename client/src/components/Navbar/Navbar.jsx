import React from 'react'

import './Navbar.scss'
function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper navbar purple ">
      <a href="/" className="brand-logo">MERN TODO</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Sign in</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar