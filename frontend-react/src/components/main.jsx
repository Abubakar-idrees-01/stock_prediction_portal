import React, { useContext } from 'react'
import Button from "./button"
import { AuthContext } from "../AuthProvider";

const Main = () => {
  const { isLoggedIn, username } = useContext(AuthContext);

  return (
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'>
          Welcome to our Stock Prediction portal, your intelligent companion in the world of stock market forecasting. Our platform combines real-time market data, advanced machine learning models, and intuitive visualization tools to help traders, investors, and analysts stay ahead of the curve.
        </p>

        {isLoggedIn ? (
          <h3 className='text-success'>Welcome, {username} 🎉</h3>
        ) : (
          <Button text="Login" url="/login" className="btn btn-outline-info" />
        )}
      </div>
    </div>
  )
}

export default Main
