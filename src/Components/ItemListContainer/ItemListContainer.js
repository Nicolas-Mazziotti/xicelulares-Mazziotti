
import React from 'react'

const ItemListContainer = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer