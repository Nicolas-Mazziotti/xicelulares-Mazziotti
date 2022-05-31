import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { getItemFromStorage, clearElementInCart, PRODUCT_KEY, clearAll } from "../../Components/Helpers/localStorage";
import './Cart.css'

const Cart = () => {

  const { cartItems, setCartItems } = useContext(CartContext);
  console.log('cartItems: ', cartItems);

  const clearElementInCard = (item) => {
    clearElementInCart(PRODUCT_KEY, item);
    const products = getItemFromStorage(PRODUCT_KEY);
    setCartItems(products)
  }

  return (
    <div >
      
      <div className="cartContainer">
      <h3>Carrito</h3>
      <table class="table" >
      <thead >
    <tr >
    <th scope="col">Estilo</th>
      <th scope="col">Modelo</th>
      <th scope="col" className='ps-3'>Precio</th>
      <th scope="col" className='pe-5'>Cantidad</th>
    </tr>
  </thead>
        </table>
        {cartItems.map((cartItem, index) => {
          return(
            <div key={index}>
              <table class="table">
  
  <tbody>
    <tr>
    <td> <img src= {cartItem.img} className="cartImg" alt='imagen celular' /></td>
      <td>{cartItem.modelo}</td>
      <td>{`USD ${cartItem.precio}`}</td>
      <td>{cartItem.quantity}</td>
      <td><button onClick={() => clearElementInCard(cartItem)}>Eliminar</button></td>
    </tr>

  </tbody>
</table>           
            </div>           
          )
       })}
      </div>
      <button onClick={() => setCartItems([])} className="btn btn-primary">Eliminar Todo</button>
      <button className="btn btn-primary">Finalizar</button>     
    </div>
  )
}

export default Cart
