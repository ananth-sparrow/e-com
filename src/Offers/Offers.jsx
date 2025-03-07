import React from 'react'
import "./Offers.css"
import exclusive_image from "../assets/exclusive_image.png"

function Offers() {
  return (
    <div className='Offers'>
        <div className="Offers-left">
  
            <h1>Elegant Styles</h1>
            <h1>Just for You</h1>
            <p>Discover the Latest Trends & Exclusive Deals</p>
            <button>Shop Now</button>
        </div>
        <div className="Offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers