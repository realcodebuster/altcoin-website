import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import './Header.css'

const Header = () => {
    const navLinks = ['About', 'Features', 'Developer']
  return (
    <header>
        <Logo />
        <NavBar navLinks={navLinks}/>
        <ul className='demo'>
            <li>
              <a href="https://taiwoemmmanuel.github.io/altcoin-app/">Demo</a>
            </li>
        </ul>
    </header>
  )
}

export default Header