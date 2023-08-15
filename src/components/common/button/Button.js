import React from 'react'
import './button.css'

const Button = ({backgroundColor,buttonText, color}) => {
  return (
    <button style= {{backgroundColor : backgroundColor, color: color, border: `2px solid ${backgroundColor}`}}>{buttonText}</button>
  )
}

export default Button