import React, { useEffect, useState } from 'react'
import "./ItemDetailContainer.css"
import { productosDetail, ProductsData } from '../ProductsData/ProductsData'
import ItemDetail  from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    //  con useParams obtengo los id de mis products
    const {id} = useParams(); 
    console.log(id)

    const [product, setProduct] = useState ({}) //guardo en objeto para mostrar solo un producto en el detalle
    console.log(product + "Item")

    useEffect(() =>{
        productosDetail(id)
        .then((res) =>{
            setProduct(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[id])

  return (
        <div className='itemDetailContainer'>
            <h1> Desafio Detalle del Producto</h1>
             <ItemDetail product={product}/>

        </div>
  )
  }


export default ItemDetailContainer