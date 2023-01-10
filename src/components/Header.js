import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import './Header.css'
import Hi from './Hi';

const Header = () => {
    const navLinks = ['About', 'Features', 'Developer']
  return (
    <header>
        <Logo />
        <NavBar navLinks={navLinks}/>
        <ul className='demo'>
            <li>Demo</li>
        </ul>
    </header>
  )
}

export default Header