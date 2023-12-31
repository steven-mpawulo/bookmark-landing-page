import React from 'react'
import Logo from '../../images/logo-bookmark.svg'
import Button from '../common/button/Button'
import './header.css'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="logo" />
            <nav>
                <ul >
                    <li><a href="#features">FEATURES</a></li>
                    <li><a href="#pricing">PRICING</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            <Button buttonText={"LOGIN"} backgroundColor={"hsl(0, 94%, 66%)"} color={"white"}/>

        

        </header>
    )
}

export default Header