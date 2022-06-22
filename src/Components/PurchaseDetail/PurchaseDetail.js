import React, {useContext, useState} from 'react'
import { TextField } from '@mui/material'
import { CartContext } from '../../Context/CartContext'
import "./PurchaseDetail.css"
import { collection, addDoc} from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import Alerts from '../Alerts/Alerts'

const initialState = {
    nombre: '',
    email: '',
    numero:''
}

export const PurchaseDetail = () => {
    const {cartItems} = useContext(CartContext)
    console.log(cartItems, "PURCHASE")
    const [values, setValues] = useState (initialState)
    const [purchaseId, setPurchaseId] = useState ("") //estado de la compra

    const handleOnChange = (e) => {
        const {value, name} = e.target;
        //creo un objeto 
        setValues({ ...values, [name]: value}) // name= propiedad de los inputs
    
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "compras"), {
            values,
        });
        console.log("Document written with ID: ", docRef.id);
        setPurchaseId(docRef.id)
        setValues(initialState) //refresco el formulario
    }

  return (
    <div className='purchaseContainer'>
        <h1> Ultimo Paso - Complete el siguiente formulario</h1>
        <form className='formContainer' onSubmit={onSubmit}>
            <TextField
            placeholder='Name'
            name='nombre'
            value={values.name}
            onChange={handleOnChange}
            />
            <TextField 
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={handleOnChange}
            />
            <TextField
            placeholder='Telefono Celular'
            name='numero'
            value={values.numero}
            onChange={handleOnChange}
            />
            <TextField type="submit"/>
        </form>
        {purchaseId && <Alerts purchaseId={purchaseId}/>}
    </div>
  )
}

export default PurchaseDetail