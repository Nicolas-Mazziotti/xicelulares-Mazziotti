import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
//me traigo el cartcontex para usar las funciones
import { CartContext } from '../../Context/CartContext'



export const ItemDetail = ({product}) => {
  //traigo la funcion del CartContext
  const{addToCart, cartItems} = useContext(CartContext)
  // eslint-disable-next-line no-unused-vars
  const[unidades, setUnidades] = useState(0)

  const onAdd = (cantidad) => {
    setUnidades(cantidad)
    addToCart(product, cantidad)
  }
  return (
      
    <div className='detailContainer'>
        <h1>{product.modelo}</h1>
        <div className='imgCountContainer'>
          <img src={product.img} alt="producto xiaomi"/>
          <p>{product.descripcion}</p>
        </div>
          <div>
          <p>{`Precio por unidad: USD ${product.precio}`}</p>
        { cartItems.length > 0 ? 
          <div>
            <Link to = "/cart"> <button className='btn btn-primary m-1'> Ir al Carrito</button></Link>
            <Link to="/"><button className='btn btn-primary'>Seguir Comprando</button></Link>
          </div>  : 
            <Link to="/"><button className='btn btn-primary'>Volver al shop</button></Link>}
        
        <ItemCount  // en ItemDetail le paso por props los products que guardamos en el estado(prop= productos data a consumir= products)
                initial={1}
                stock= {5}
                onAdd={onAdd}
                product={product}             
                />
          </div>
        </div>  
  )
}

export default ItemDetail