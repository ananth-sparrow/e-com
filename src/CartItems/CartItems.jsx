import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

function CartItems() {
    const {getTotalCartAmount, all_product, cartItems, removeFromcart } = useContext(ShopContext);

  return (
    <div className='CartItems'>
           <div className="cartitem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           </div>
           <hr />
    {all_product.map((e) => {
    if (cartItems && cartItems[e.id] > 0) 
        { 
        return (
            <div key={e.id}>
                <div className='cartitem-format cartitem-format-main'>
                    <img src={e.image} alt="" className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromcart(e.id)} alt="" />
                </div>
                <hr />
            </div>
        );
    }
    return null;
})}

<div className="cartitem-down">
    <div className='cartitem-total'>
        <h1>cart Totals</h1>
        <div>
            <div className='cartitem-total-item'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitem-total-item'>
                <p>Shipping fee</p>
                <p>free</p>
            </div>
            <hr />
            <div className='cartitem-total-item'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
        </div>
        <button>Proceed To Checkout</button>
    </div>
    <div className="cartitems-promocode">
        <p>If You Have a Promo Code,Enter It Here </p>
        <div className="cartitem-promobox">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
        </div>
    </div>
</div>
           
    </div>
  )
}

export default CartItems
