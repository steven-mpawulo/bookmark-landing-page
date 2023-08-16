import React from 'react'
import Button from '../common/button/Button'
import './footer.css'
import Logo from '../../images/logo-bookmark.svg'
import FacebookIcon from '../../images/icon-facebook.svg'
import TwitterIcon from '../../images/icon-twitter.svg'

const Footer = ({numberOfPeople}) => {
  return (
    <footer>
        <div className="footer-first-section">
            <p>{numberOfPeople}+ ALREADY JOINED</p>
            <h2>Stay upto date with what <span>we're doing</span></h2>
            <div className="footer-inner-container">
                <input type="email" placeholder='you@domain.com'/>
                <Button buttonText={"Contact Us"} backgroundColor={"hsl(0, 94%, 66%)"} color={"white"} marginLeft={"20px"} />
            </div>
        </div>
        <div className="footer-second-section">
            <img src={Logo} alt="logo" />
            <ul>
                <li><a href="#FEATURES">FEATURES</a></li>
                <li><a href="#PRICING">PRICING</a></li>
                <li><a href="#CONTACT">CONTACT</a></li>
            </ul>
            <img src={FacebookIcon} alt="facebook-icon" />
            <img src={TwitterIcon} alt="twitter-icon" />
        </div>
    </footer>
  )
}

export default Footer