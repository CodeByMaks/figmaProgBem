import React from 'react'
import '../../../styles/global.css'

const Button = ({className, text}) => {
  return (
    <button className={className}>{text}</button>
  )
}

export default Button