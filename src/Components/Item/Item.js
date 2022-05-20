import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({products}) => {
    console.log(products)
  return (
    <div className='item'>
        <Link to= {`/detail/${products.id}`}><img src={products.img} alt='celular'/></Link>
        <p>{products.modelo}</p>
        <span>USD {products.precio}</span>
    </div>
  )
}

export default Item
