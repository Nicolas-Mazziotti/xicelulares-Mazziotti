import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

 const ItemList = ({productos}) => { // productos = prop que le pase en ItemListContainer para consumir la data
  return (
    <div className='itemContainer container-fluid'>
        {productos.map((prod) => 
        <Item key={prod.id} products={prod}/>            
        )}
    </div>
  )
}

export default ItemList
