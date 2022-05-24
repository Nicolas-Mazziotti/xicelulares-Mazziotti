import { useState } from 'react'
import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = ({product}) => {
  const [add, setAdd] = useState (false)
  const onAdd = () => {
    setAdd(!add)
  }
  
  return (
      
    <div>
        <h1>{product.modelo}</h1>
        <div className='imgCountContainer'>
        <img src={product.img} alt=""/>
        <p>{product.descripcion}</p>
        </div>
        <Link to="/cart"><button className='btn btn-primary'> Finalizar Compra</button></Link>
        { add ?  <p> Añadido</p> :
        
        <ItemCount  // en ItemDetail le paso por props los products que guardamos en el estado(prop= productos data a consumir= products)
                initial={1}
                stock= {5}
                onAdd={onAdd}
                />
              }
          
        </div>  
  )
}

export default ItemDetail