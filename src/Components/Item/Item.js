import React from 'react'
import './Item.css'
export const Item = ({products}) => {
    console.log(products)
  return (
    <div className='item'>
        <img src={products.img} alt='celular'/>
        <p>{products.modelo}</p>
        <span>USD {products.precio}</span>
    </div>
  )
}

export default Item
