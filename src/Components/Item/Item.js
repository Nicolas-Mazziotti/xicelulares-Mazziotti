import React from 'react'

export const Item = ({product}) => {
    console.log(product)
  return (
    <div>
        <p>{product.modelo}</p>
        <span>{product.precio}</span>
    </div>
  )
}

export default Item
