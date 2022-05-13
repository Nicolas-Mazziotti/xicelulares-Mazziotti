import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'


export const ItemList = ({productos}) => {
  return (
    <div className='itemContainer'>
        {productos.map((prod) =>{
          console.log(prod)
            return (
                <>
                    <Item key={prod.id} products={prod}/>
                </>
            )
        })}
    </div>
  )
}

export default ItemList
