import React from 'react'
import "./ItemCount.css"
import { useState } from 'react';



export const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial);
    
    const addProducto = (num) => {
        setCantidad(cantidad + num)   
    }
    return (
        <div className='countContainer'>
            <div className='countCantidad'>
                <button className='btn btn-primary' onClick= {() => addProducto(-1) }
                        disabled= {cantidad === initial ? true : null}>
                            -
                </button>
                <p className='btnCantidad'>{cantidad}</p>
                <button className='btn btn-primary' onClick= {() => addProducto(+1) }
                        disabled= {cantidad === stock ? true : null}>
                            +
                </button>
            </div>
            {/* <button className='btn btn-primary' onClick={() => onAdd(cantidad)}
                    disabled= {stock === 0 ? true : null }>
                        Agregar al Carrito
            </button> */}
        </div>
      )
    }

export default ItemCount