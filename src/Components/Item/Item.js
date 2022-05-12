import React from 'react'

export const Item = ({product}) => {
    console.log(product)
  return (
    <div>
        <p>{product.modelo}</p>
    </div>
  )
}

export default Item
