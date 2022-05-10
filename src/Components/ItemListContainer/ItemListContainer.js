import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
  
  const addToCart = () =>{
    console.log("Se ha agregado al carrito")
}
  return (
    <>
        <h1>{greeting}</h1>
        <ItemCount 
        initial={1}
        stock= "5"
        onAdd={addToCart}
        />
    </>
  )
}

export default ItemListContainer