import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({products}) => {

    // console.log(products)
  return (
    
    <div className='item text-center'>
        <img classname="img-flui" src={products.img} alt='celular'/>
        <p>{products.modelo}</p>
        <span>USD {products.precio}</span>
        <Link to= {`/item/${products.id}`} className="btnDetalles"><button className='btn btn-primary'>Ver Detalles</button></Link>
    </div>
  )
}

export default Item
