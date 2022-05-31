import { useState, useContext } from 'react'
import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { setItemInCart, getItemFromStorage, PRODUCT_KEY } from '../Helpers/localStorage'

export const ItemDetail = ({product}) => {

  const { setCartItems } = useContext(CartContext);
  //funcion onclick
  const addToCart = (product) => {
    setItemInCart(PRODUCT_KEY, product);
    const products = getItemFromStorage(PRODUCT_KEY);
    setCartItems(products);
  }
  const [add, setAdd] = useState (false)
  const onAdd = () => {
    setAdd(!add)
  }
  
  return (
      
    <div>
        <h1>{product.modelo}</h1>
        <div className='imgCountContainer'>
        <img src={product.img} alt=""/>
        <p>{product.descripcion}</p>
        </div>
        <button className='btn btn-primary m-2' onClick={() => addToCart(product)}>Add</button>
        <Link to="/cart"><button className='btn btn-primary'> Finalizar Compra</button></Link>
        { add ?  <p> Añadido</p> :
        
        <ItemCount  // en ItemDetail le paso por props los products que guardamos en el estado(prop= productos data a consumir= products)
                initial={1}
                stock= {5}
                onAdd={onAdd}
                
                />
              }
          
        </div>  
  )
}

export default ItemDetail