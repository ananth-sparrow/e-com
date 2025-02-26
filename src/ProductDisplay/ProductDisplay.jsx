import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../Context/ShopContext';

function ProductDisplay(props) {
    const {product} =props;
    const {addtocart}=useContext(ShopContext)
  return (
    <div className='ProductDisplay'>
        <div className="ProductDisplay-left">
        <div className="ProductDisplay-img-list">
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        </div>
        <div className="ProductDisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(200)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className="productdispay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className='productdispay-right-description'>
            A timeless wardrobe staple, this crisp white Oxford shirt is made from a breathable cotton blend, ensuring both comfort and durability
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
        <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category:</span> Women,T-Shirt,Crop top</p>
        <p className='productdisplay-right-category'><span>Tags:</span> Modern,Latest</p>
     </div>

    </div>
  )
}

export default ProductDisplay
