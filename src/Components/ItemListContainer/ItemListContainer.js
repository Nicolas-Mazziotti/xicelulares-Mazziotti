import  {React, useState, useEffect} from 'react'
import  ItemCount from '../ItemCount/ItemCount'
import {ProductsData} from '../ProductsData/ProductsData'
import  ItemList  from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    
const [products, setProducts] = useState ([]) // Almaceno la informacion que devuelve la promise en este estado
const onAdd = (cantidad) => {
  alert (`Productos agregados ${cantidad}`)
}

useEffect(() => {
  //paso los productos a promiseProductos
  const promiseProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(ProductsData)
      }, 3000)
  })
  //le paso la resolve a setProductos para modificar
  promiseProductos.then((res) => {
          setProducts(res);
      }).catch((error) => { //en caso de error
          console.log(error)

      })
},[]); // para que se ejecute una vez sino realiza un ejecuteo infinito , se ponen estados o props

  return (
    // en ItemList le paso por props los products que guardamos en el estado(prop= productos data a consumir= products)
    <>
        <h1>{greeting}</h1>
        <ItemList productos= {products} /> 
        <ItemCount 
        initial={1}
        stock= {5}
        onAdd={onAdd}
        />
    </>
  )
}

export default ItemListContainer