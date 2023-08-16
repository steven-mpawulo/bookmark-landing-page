import React from 'react'
import Button from '../button/Button'
import './card.css'

const Card = ({ icon, browserName, browserVersion }) => {
    return (
        <div className="card">
            <img src={icon} alt="icon" />
            <p>Add to {browserName}</p>
            <p>Minimum version {browserVersion}</p>
            <hr />
            <Button buttonText={"Add & Install Extension"} backgroundColor={"hsl(231, 69%, 60%)"} color={"white"} marginLeft={"12px"} marginRight={"12px"} />
        </div>
    )
}

export default Card