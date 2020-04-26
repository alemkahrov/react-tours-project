import React from 'react'
import './header.scss'
import logo from '../../logo.svg'

export default function Header() {
 return (
  <header className="header">
   <div className="header-inner">
    <a href="" className="site-logo">
     <img src={logo} alt="logo" />
    </a>
    <nav className="nav">
     <ul className="nav-list">
      <li><a href="" className="nav-link">home</a></li>
      <li><a href="" className="nav-link">about</a></li>
      <li><a href="" className="nav-link active">tours</a></li>
     </ul>
    </nav>
   </div>
  </header>
 )
}
