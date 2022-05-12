import React, {useState, useEffect} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import ProductsData from '../ProductsData/ProductsData'
import { ItemList } from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState ([])
  
  const addToCart = () =>{
    console.log("Se ha agregado al carrito")
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

}, []);

  return (
    <>
        <h1>{greeting}</h1>
        <ItemCount 
        initial={1}
        stock= "5"
        onAdd={addToCart}
        />
        <ItemList product= {products} />
    </>
  )
}

export default ItemListContainer