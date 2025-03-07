import React from 'react'
import "./hero.css"
// import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_image from "../assets/hero_image.png"
function Hero() {
  return (
    <div className='hero'>
    <div className='hero-left'>
        <h2>Fresh Fashion Picks</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>Trending</p>
                {/* <img src={hand_icon} alt="" /> */}
            </div>
            <p>Styles You’ll Love</p>
        </div>
        <div className='hero-latest-btn'>
            <div className='lc'> Explore Now</div>
            <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero