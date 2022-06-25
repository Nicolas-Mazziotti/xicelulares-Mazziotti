import React from 'react'
import Header from '../../Components/Header/Header'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'

const Home = () => {
  return (
    <>
    <Header/>
    <ItemListContainer greeting="Todos los productos"/>
    </>
  )
}
export default Home
