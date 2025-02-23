import React from 'react'
import "./DescriptionBox.css"

function DescriptionBox() {
  return (
    <div className='DescriptionBox'>
        <div className="DescriptionBox-navigator">
            <div className="DescriptionBox-nav-box">Description</div>
            <div className="DescriptionBox-nav-box fade">Reviews(120)</div>
        </div>
        <div className="Descriptionbox-description">
            <p>Welcome to Sweet Indulgence, where every dessert is a delightful experience waiting to happen.
             Our dessert shop is a paradise for those who cherish the sweeter things in life. From the moment you step in, 
             you'll be greeted by the irresistible aroma of freshly baked pastries and confections that will transport you
             to a world of pure bliss. Our menu features a tantalizing array of treats, including decadent cakes, delicate 
             macarons, rich brownies, and refreshing gelatos, all crafted with the finest ingredients and a dash of love. 
            Whether you're celebrating a special occasion or simply craving a sweet escape, Sweet Indulgence has something 
            to satisfy every palate. Our friendly and knowledgeable staff are always ready to help you find the perfect dessert 
            to suit your taste. Come and explore our cozy and charming shop, where every bite is a celebration of flavor and craftsmanship.
            Indulge in the sweetness of life at Sweet Indulgence and discover why we're the ultimate destination for dessert lovers.
            Visit us today and let your taste buds embark on an unforgettable journey.</p>
        </div>
    </div>
  )
}

export default DescriptionBox