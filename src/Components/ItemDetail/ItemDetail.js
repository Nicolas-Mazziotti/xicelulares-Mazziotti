import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
//me traigo el cartcontex para usar las funciones
import { CartContext } from '../../Context/CartContext'
import { LinkSharp } from '@mui/icons-material'


export const ItemDetail = ({product}) => {
  //traigo la funcion del CartContext
  const{addToCart, cartItems} = useContext(CartContext)
  const[unidades, setUnidades] = useState(0)
  console.log(cartItems, "Itemdetail")

  const onAdd = (cantidad) => {
    console.log(cantidad)
    setUnidades(cantidad)
    addToCart(product, cantidad)
    alert("Se han agregado")
    console.log(product, cantidad)
  }
  return (
      
    <div>
        <h1>{product.modelo}</h1>
        <div className='imgCountContainer'>
          <img src={product.img} alt=""/>
          <p>{product.descripcion}</p>
        </div>
          <div>
        { cartItems.length > 0 ? <Link to = "/cart"> <button className='btn btn-primary'> Terminar compra</button></Link> : 
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