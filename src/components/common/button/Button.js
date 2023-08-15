import React from 'react'

const Button = ({color, width, buttonText}) => {
  return (
    <button style= {{color : color, width : width}}>{buttonText}</button>
  )
}

export default Button