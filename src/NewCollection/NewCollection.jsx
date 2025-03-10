import React from 'react'
import "./NewCollection.css"
import new_collections from '../assets/new_collections'
import Item from '../Item/Item'

function NewCollection() {
  return (
    <div className='NewCollection'>
        <h1>Fresh Arrivals</h1>
        <hr />
        <div className='Collection'>
            {new_collections.map((item,i)=>{
              return <Item key ={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection