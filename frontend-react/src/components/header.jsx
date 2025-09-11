import React from 'react'
import  Button from './button';


const Header = () => {
  return (
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a className="navbar-brand text-light" href="">Stock Prediction portal</a>
        <div>
            <Button text="Login" className="btn btn-outline-info"/>
            &nbsp;
            <Button text="Register" className="btn btn-info"/>
            
        </div>
    </nav>
  )
}

export default Header