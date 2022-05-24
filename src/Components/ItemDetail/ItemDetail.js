import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = ({product}) => {
  console.log(product)
  return (
      
    <div>
        <h1>{product.modelo}</h1>
        <div className='imgCountContainer'>
        <img src={product.img} alt=""/>
        <ItemCount/>
        </div>
        <p>{product.descripcion}</p>
        </div>
        
    
  )
}

export default ItemDetail