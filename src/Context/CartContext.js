import React, { createContext, useState } from 'react';


//1 Creo el context

export const CartContext = createContext();

//2 Creo el componente provider que luego envolvera a la app
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    //funcion para agregar al carrito
    const addToCart = (item, cantidad) =>{
        if(isInCart(item.id)){
        //Si ya esta en el carrito le sumo la cantidad al producto que ya esta
        sumarCantidad(item,cantidad)
        } else {
            //si no esta en el carrito, lo agrego
            setCartItems([...cartItems, { ...item, cantidad: cantidad}])
        }
    }
    
    //funcion para comprobar si esta o no en el carrito
    //devuelve true or false
    
    const isInCart = (id) => {
        const carrito = cartItems.find((producto) => producto.id === id)
        if(carrito !== undefined){
            return true
        }else{
            return false
        }
    }

    //funcion para sumar cantidad
    const sumarCantidad = (item, cantidad) => {
        setCartItems(
            cartItems.map((prod) => prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad} : prod)
        )
    }

    //funcion para sumar el total
    const totalPrice = () => {
        let total = cartItems.reduce((acc, item) => {
            return acc + item.precio * item.cantidad
        }, 0)
        return total
    }
    //funcion para sumar las unidades en el carrito
    const totalUnidades = () =>{
        const total = cartItems.reduce((acc, item) => acc + item.cantidad, 0)
        return total
    }
    //funcion eliminar 1 item
    const deleteItem = (item) =>{
        console.log(item)
        const newCart =  cartItems.filter((prod) => prod.id !== item);
        console.log("nuevocarrito", newCart)
        setCartItems(newCart)
    }
    //funcion eliminar todos los productos
    const deleteAll = () => setCartItems([])
 
// children = todos los componentes hijos dentro de provider app
//3 Retorno el CartContext con los value(funciones,etc) que serviran para toda la app
    return (
        <CartContext.Provider value= {{cartItems, addToCart, totalPrice, totalUnidades, deleteItem, deleteAll}}>
            {children}
        </CartContext.Provider>
    )
}