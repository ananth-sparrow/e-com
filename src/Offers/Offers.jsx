import React from 'react'
import "./Offers.css"
import exclusive_image from "../assets/exclusive_image.png"

function Offers() {
  return (
    <div className='Offers'>
        <div className="Offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only On Best Sellers Products</p>
            <button>Check Now</button>
        </div>
        <div className="Offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers