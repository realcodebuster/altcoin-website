import React from 'react'
import Coin from './coin.png'
import './Main.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-text">
        <h1>FAST AND RELIABLE PLATFORM FOR CRYPTOCURRENCY</h1>
        <br />
        <a href="https://taiwoemmmanuel.github.io/altcoin-app/">Trade Now</a>
        </div>
        
        <div className="banner-image">
            <img src={Coin} alt="" className='illustration' />
        </div>
    </div>
  )
}

export default Banner