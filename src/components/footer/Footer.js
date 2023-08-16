import React from 'react'
import Button from '../common/button/Button'
import './footer.css'

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
        <div className="footer-second-section"></div>
    </footer>
  )
}

export default Footer