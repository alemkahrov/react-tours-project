import React from 'react'
import './header.scss'
import logo from '../../logo.svg'

function Header() {
 return (
  <header className="header">
   <div className="nav-container">
    <div className="header-inner">
     <a className="logo-box" href="#"><img src={logo} alt="brand logo" /></a>
     <nav className="nav">
      <ul className="nav-list">
       <li><a href="#" className="nav-link">Home</a></li>
       <li><a href="#" className="nav-link">About</a></li>
       <li><a href="#" className="nav-link active">Tours</a></li>
      </ul>
     </nav>
    </div>
   </div>
  </header>
 )
}

export default Header
