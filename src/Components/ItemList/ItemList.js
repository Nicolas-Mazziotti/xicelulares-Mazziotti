import React from 'react'
import { Item } from '../Item/Item'


export const ItemList = ({product}) => {
  return (
    <div>
        {product.map((prod) =>{
            console.log(prod)
            return (
                <div>
                    <Item key={prod.id} product={product}/>
                </div>
            )
        })}
    </div>
  )
}

export default ItemList
