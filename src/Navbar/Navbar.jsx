import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { ShopContext } from '../Context/ShopContext'
import nav_dropdown from '../assets/nav_dropdown.png'

const Navbar = () => {
 
  const [menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext)
  const menuRef=useRef()

  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle("nav-menu-visible")
    e.target.classList.toggle("open");
  } 

  return (
    <div className='navbar'>
    <div className='nav-logo'>
        <img src ={logo} alt=""/>
        <p>STYLE HAVEN ✨</p>
    </div>
    <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
    <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:"none"}} to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:"none"}} to='/mens'>Men's</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:"none"}} to='/womens'>Women's</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:"none"}} to='/kids'>Kid's</Link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
      <Link to='/login'><button>login</button></Link>  
      <Link to ='/cart'><img src={cart_icon} alt=""/></Link>
     <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navbar