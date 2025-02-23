import React from 'react'
import "./NewsLetter.css"

function NewsLetter() {
  return (
    <div className='NewsLetter'>
        <h1>Get Exclusive Offer On Your Email </h1>
        <p>Subscribe to our NewsLetter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter