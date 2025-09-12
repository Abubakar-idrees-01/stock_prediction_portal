import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Button = (props) => {
  return (
    <>
    <Link  className={`btn ${props.className}`} to={props.url}>{props.text}</Link>
    </>
  )
}

export default Button