import React, { useState } from 'react'
import { createContext } from 'react'
import all_product from "../assets/all_product"

export const ShopContext = createContext(null)
const getdefaultcart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
        
    }
    return cart
}

const ShopContextProvider =(props)=>{
    const [cartItems,setCartItems]=useState(getdefaultcart());
    
    
    const addtocart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        console.log(cartItems);
    }

    const removeFromcart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
  
    const contextvalue ={all_product,cartItems,addtocart,removeFromcart};
   
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
