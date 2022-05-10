import React from 'react'
import "./ItemCount.css"
import { useState } from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);
    
    const suma = () =>{
        if(counter < stock){
            setCounter (counter + 1)
        }
    }
    const resta = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }



  return (
    <div className='countContainer'>
        <p> {counter} </p>
        <button className='btnCount btn btn primary' onClick ={resta}> - </button>
        <button className='btnAdd' onClick = {onAdd}> Agregar al Carrito </button>
        <button className='btnCount' onClick={suma}> + </button>
    </div>
  )
}
