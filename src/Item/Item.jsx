import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

function Item({ id, image, name, new_price, old_price }) {
  return (
    <div className='item'>
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name} />
      </Link>  
      <p>{name}</p>
      <div className='item-prices'>
        <div className='item-prices-new'>${new_price}</div>
        <div className='item-price-old'>${old_price}</div>
      </div>
    </div>
  );
}

export default Item;
