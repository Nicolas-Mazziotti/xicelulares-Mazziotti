import  {React, useState, useEffect} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import ProductsData from '../ProductsData/ProductsData'
import { ItemList } from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState ([])

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
}, []);

  return (
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