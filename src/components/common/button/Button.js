import React from 'react'
import './button.css'

const Button = ({ backgroundColor, buttonText, color, marginRight }) => {
  return (
    <button style={{ backgroundColor: backgroundColor, color: color, border: `2px solid ${backgroundColor}`, marginRight: `${marginRight}` }}>{buttonText}</button>
  )
}

export default Button