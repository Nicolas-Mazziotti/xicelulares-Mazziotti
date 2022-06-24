import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import Item from '../Item/Item'
import "./CheckOutProducts.css"

 const CheckOutProducts = () => {
  const {cartItems, totalPrice} = useContext(CartContext)
  console.log(cartItems)
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div>
            <p>Usted ha comprado:</p>
            <span>{item.cantidad}</span>
            <p>{item.modelo}</p>
            <img src= {item.img} className="cartImg" width="120px" alt='imagen celular' />
            <span>{`Precio Unitario: ${item.precio}`}</span>
            <p><strong>Total USD: {totalPrice()}</strong></p>
          </div>
        )
      })}
    </div>
  )
  
}

export default CheckOutProducts
