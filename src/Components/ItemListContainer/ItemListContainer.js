import  {React, useState, useEffect} from 'react'
import  ItemCount from '../ItemCount/ItemCount'
import {ProductsData, traerProductos} from '../ProductsData/ProductsData'
import  ItemList  from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ([]) // Almaceno la informacion que devuelve la promise en este estado
    const [loading, setLoading] = useState (true);

//categorias dinamicas con Params
const  {categoryId}  = useParams();
console.log(categoryId)

useEffect(() => {
  //le paso la resolve a setProductos para modificar
      traerProductos(categoryId) // me traigo la funcion desde ProductsData
        .then((res) => { 
          setProducts(res);
      })
        .catch((error) => { //en caso de error
          console.log(error)
      })
},[categoryId]); // para que se ejecute una vez sino realiza un ejecuteo infinito , se ponen estados o props

  return (
    <>
        <h1>{greeting}</h1>
         <ItemList productos= {products} /> 
    </>
  )
}

export default ItemListContainer