import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({product}) => {
  const onAdd = (cantidad) => {
    alert (`Productos agregados ${cantidad}`)
  }
  
  return (
      
    <div>
        <h1>{product.modelo}</h1>
        <div className='imgCountContainer'>
        <img src={product.img} alt=""/>
        <p>{product.descripcion}</p>
        </div>
        <ItemCount 
                initial={1}
                stock= {5}
                onAdd={onAdd}
                />
        </div>  
  )
}

export default ItemDetail