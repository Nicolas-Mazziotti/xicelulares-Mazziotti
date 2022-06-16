import React, { useEffect, useState } from 'react'
import "./ItemDetailContainer.css"
import { productosDetail, ProductsData } from '../ProductsData/ProductsData'
import ItemDetail  from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
//firebase
import { query, collection, getDocs, documentId, where } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState ([]) //guardo en objeto para mostrar solo un producto en el detalle
    // console.log(product + "Item")
    // con useParams obtengo los id de mis products
    const {id} = useParams(); 
    // console.log(id)
    
    useEffect(() => {
        const getProducts = async () => {
          const q = query(collection(db, 'products'), where(documentId(), "==", id)); // id= useParams
          const querySnapshot = await getDocs (q);
          const docs = []
          //  console.log('data ', querySnapshot)
          querySnapshot.forEach((doc) => {
            //pusheo la data que me llego y le agrego el id que viene separado
              docs.push({...doc.data(), id: doc.id})
            // console.log(doc.data())
           
          })
          setProduct(docs)
          };
          getProducts()
      }, [id]);


    // useEffect(() =>{
    //     productosDetail(id)
    //     .then((res) =>{
    //         setProduct(res)
    //     })
    //     .catch((error) =>{
    //         console.log(error)
    //     })
    // },[id])

  return (
        <div className='itemDetailContainer'>
            {product.map((prod) => {
                return <ItemDetail product={prod}/>
            })}
             

        </div>
  )
  }


export default ItemDetailContainer