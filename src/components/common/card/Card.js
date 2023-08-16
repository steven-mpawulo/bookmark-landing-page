import React from 'react'
import Button from '../button/Button'
import './card.css'

const Card = ({ icon, browserName, browserVersion, position, positionTop }) => {
    return (
        <div  style={{position : `${position}`, top: `${positionTop}`}}className="card">
            <img src={icon} alt="icon" />
            <h2>Add to {browserName}</h2>
            <p>Minimum version {browserVersion}</p>
            <hr />
            <Button buttonText={"Add & Install Extension"} backgroundColor={"hsl(231, 69%, 60%)"} color={"white"} marginLeft={"12px"} marginRight={"12px"} />
        </div>
    )
}

export default Card