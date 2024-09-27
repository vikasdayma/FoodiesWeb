import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className,onClick,to,text}) => {
  return (
    
    <button className={`${className}`} onClick={onClick}  > 
    <Link to={to}> 
    {text}
    </Link>
      
    </button>
  )
}

export default Button
