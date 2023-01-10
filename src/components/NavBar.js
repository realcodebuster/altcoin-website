import React from 'react'
import './Header.css'

const NavBar = ({ navLinks }) => {
  return (
    <nav>
        <ul>
            {navLinks.map((link) => {
                return <li key={link}>{link}</li>
            })}

        </ul>
    </nav>
  )
}

export default NavBar