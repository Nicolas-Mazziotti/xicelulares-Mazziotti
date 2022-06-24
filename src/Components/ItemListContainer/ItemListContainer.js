import  {React, useState, useEffect} from 'react'
import  ItemCount from '../ItemCount/ItemCount'
import  ItemList  from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
//firebase
import { query, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ([]) // Almaceno la informacion que devuelve la promise en este estado
    const [loading, setLoading] = useState (true);

//categorias dinamicas con Params
const  {categoryId}  = useParams();
// console.log(categoryId)

//Firebase config

useEffect(() => {
  const getProducts = async () => {
    const q = query(collection(db, 'products'));
    const querySnapshot = await getDocs (q);
    const docs = []
    //  console.log('data ', querySnapshot)
    querySnapshot.forEach((doc) => {
      
      //pusheo la data que me llego y le agrego el id que viene separado
        docs.push({...doc.data(), id: doc.id})
      // console.log(doc.data())
      // console.log(docs)
      if(categoryId === undefined){
        setProducts(docs)
      }else{
        setProducts(docs.filter((prod) => prod.category === categoryId))
      }  
    })
  };
    
    getProducts()
}, [categoryId]);


  return (
    <>
        <h1 className='mt-4'>{greeting}</h1>
         <ItemList productos= {products} /> 
    </>
  )
}

export default ItemListContainer