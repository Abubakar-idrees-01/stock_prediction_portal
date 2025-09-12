import React from 'react'
import Button from "./button"
const main = () => {
  return (
    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light' >Stock prdiction portal</h1>
            <p className='text-light lead'>Welcome to our Stock perdiction portal, your intelligent companion in the world of stock market forecasting. Our platform combines real-time market data, advanced machine learning models, and intuitive visualization tools to help traders, investors, and analysts stay ahead of the curve.</p>
            <Button text="Login" url="/login" className="btn btn-outline-info"/>

        </div>
        
    </div>
    </>
  )
}

export default main