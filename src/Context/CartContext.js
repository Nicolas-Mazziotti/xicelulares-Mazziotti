import React, { createContext, useState } from 'react';
import { getItemFromStorage, PRODUCT_KEY } from '../Components/Helpers/localStorage';

//1 Creo el context

export const CartContext = createContext();

//2 Creo el componente provider que luego envolvera a la app
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(getItemFromStorage(PRODUCT_KEY));

// children = todos los componentes hijos dentro de provider app
//3 Retorno el CartContext con los value(funciones,etc) que serviran para toda la app
    return (
        <CartContext.Provider value= {{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}