import React from 'react'
import Logo from '../../images/logo-bookmark.svg'

const Header = () => {
  return (
    <header>
        <img src= {Logo} alt="logo" />
       <nav>
       <ul>
            <li><a href="#features">FEATURES</a></li>
            <li><a href="#pricing">PRICIG</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
       </nav>

    </header>
  )
}

export default Header