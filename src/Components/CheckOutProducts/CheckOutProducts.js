import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import Item from '../Item/Item'
import "./CheckOutProducts.css"

 const CheckOutProducts = () => {
  const {cartItems, totalPrice} = useContext(CartContext)
  console.log(cartItems)
  return (
    <div>
      <h3>Usted ha comprado:</h3>
      {cartItems.map((item) => {
        return (
          <div className='checkoutContainer'>
            
              <div className='checkoutProducts'>
                <span className='checkoutProduct'>{item.cantidad}</span>
                <p className='checkoutProduct' >{item.modelo}</p>
                <img src= {item.img} className='checkoutProduct' width="120px" alt='imagen celular' />
                <span className='checkoutProduct'>{`Precio Unitario: ${item.precio}`}</span>
                
              </div>
          </div>
          
        )
      })}
      <p><strong>Total USD: {totalPrice()}</strong></p>
    </div>
  )
  
}

export default CheckOutProducts
