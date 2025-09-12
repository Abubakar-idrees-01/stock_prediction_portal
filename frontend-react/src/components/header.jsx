import React from 'react'
import  Button from './button';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>
        <div>
            <Button text="Login" url="/login" className="btn btn-outline-info"/>
            &nbsp;
            <Button text="Register"  url="/register"  className="btn btn-info"/>
            
        </div>
    </nav>
  )
}

export default Header