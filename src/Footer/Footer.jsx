import React from 'react'
import "./Footer.css"
import footer_logo from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pintester_icon from "../assets/pintester_icon.png"
import Whatsapp_icon from "../assets/whatsapp_icon.png"
function Footer() {
  return (
    <div className='Footer'>
        <div className="Footer-logo">
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='Footer_links'>
            <li>Company</li>
            <li>Products</li>
            <li>Officies</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='Footer-social-icon'>
            <div className='Footer-icon-container'>
                <img src={instagram_icon} alt="" />
            </div>
            <div className='Footer-icon-container'>
                <img src={pintester_icon} alt="" />
            </div>
            <div className='Footer-icon-container'>
                <img src={Whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer