import React, { useEffect, useState } from 'react'
import "./ItemDetailContainer.css"
import { ProductsData } from '../ProductsData/ProductsData'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [items, setItems] = useState ([])
    console.log(items)

    useEffect(() =>{
        const newItem = new Promise ((resolve, reject) => {
            setTimeout(()=>{
                resolve(ProductsData)
            },1000)
            
        })
        newItem.then((res) =>{
            setItems(res)
        }).catch ((error) =>{
            console.log("Error")

        })
    })

  return (
        <div className='itemDetailContainer'>
            <h1> Desafio Detalle del Producto</h1>
            {items.map((item) =>{
                return <ItemDetail key={item.id} products={item}/>
            })}
        </div>
  )
}

export default ItemDetailContainer