import React, { useState } from 'react'
import './Navbar.css'
import { menu } from '../../utilits/constants'

function Navbar() {
  const [activeLink, setActiveLink] = useState('')
  return (
    <nav>
      <a href="" className="log0">My Portfolio</a>
      <ul>
        {
          menu.map((element, value) => <li className={activeLink === element ? 'activeMenu' : ''} 
          key={value} onClick={() => setActiveLink(element)}>{element}</li>)
        }
      </ul>
    </nav>
  )
}

export default Navbar