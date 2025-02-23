import React from 'react'
import "./Css/loginsignup-login.Css"

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="LoginSignup-container">
        <h1>Sign Up</h1>
        <div className="SignUp-fields">
          <input type="text" placeholder='Enter your Name' required/>
          <input type="email" placeholder='Enter Email address'  required/>
          <input type="password" placeholder='Password' required/>
        </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account <span> Login here</span></p>
          <div className='loginsignup-agree'>
            <input type="checkbox" name='' id='' />
            <p>By continue , i aggreento the terms of use & privacy policy.</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup