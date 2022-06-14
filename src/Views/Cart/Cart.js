import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { getItemFromStorage, clearElementInCart, PRODUCT_KEY } from "../../Components/Helpers/localStorage";
import { Link } from "react-router-dom";
import './Cart.css'


const Cart = () => {

  const { cartItems, setCartItems } = useContext(CartContext);
  console.log('cartItems: ', cartItems);

  const clearElementInCard = (item) => {
    clearElementInCart(PRODUCT_KEY, item);
    const products = getItemFromStorage(PRODUCT_KEY);
    setCartItems(products)
  }
  
  const resultadoTotal = () => {
    let total = cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.precio * cartItem.quantity
    }, 0)
    return total
  }
console.log(resultadoTotal())
  

  return (
    
      <div>
        { cartItems.length > 0 ? (
      <>
      <div className="cartContainer">
      <h3>Carrito</h3>
      <table className="table" >
      <thead>
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
              <table className="table">
  
                <tbody>
                  <tr>
                  <td> <img src= {cartItem.img} className="cartImg" width="120px" alt='imagen celular' /></td>
                    <td>{cartItem.modelo}</td>
                    <td>{`USD ${cartItem.precio}`}</td>
                    <td>{cartItem.quantity}</td>
                    <td><button className="btn btn-primary" onClick={() => clearElementInCard(cartItem)}>Eliminar</button></td>
                  </tr>
                </tbody> 
              </table>      
            </div>                   
          )
       })} 
      </div>
      <p> <strong>Total USD :</strong>  {resultadoTotal()}</p>
        <button onClick={() => setCartItems([])} className="btn btn-primary m-2">Eliminar Todo</button>
        <button className="btn btn-primary">Finalizar</button>
        </>
        ) : (
            <div className="m-5">
                <p> Carrito vacio</p>
                <Link to="/" className="btn btn-primary"> Volver al shop</Link>
            </div>
            )}
        
      </div>
    
    
  )
  
}
export default Cart
