import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = ({products}) => {
  return (
      
    <div>
        <h1>{products.modelo}</h1>
        <div className='imgCountContainer'>
        <img src={products.img}/>
        <ItemCount/>
        </div>
        <p>{products.descripcion}</p>
        </div>
        
    
  )
}

export default ItemDetail