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

    const PurchaseDetail = () => {
    const {cartItems, totalPrice} = useContext(CartContext)
    const [buyer, setBuyer] = useState (initialState)
    const [purchaseId, setPurchaseId] = useState ("") //estado de la compra
    console.log(cartItems, "carrito")


    const cartProducts = cartItems.map((prod) => ({
        id: prod.id,
        modelo: prod.modelo,
        precio: prod.precio,
        cantidad: prod.cantidad
    }))

    const dateNow = Date.now();
    const date = new Date(dateNow)
    
    const precioTotal = totalPrice() 
    // ...cartProducts, precioTotal, hoy
    const handleOnChange = (e) => {
        const {value, name} = e.target;
        //creo un objeto 
        setBuyer({ ...buyer, [name]: value }) // name= propiedad de los inputs
        console.log(buyer)
        console.log(cartProducts)
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "compras"), {
            buyer,
            cartProducts,
            date,
            precioTotal,
        });
        console.log("Document written with ID: ", docRef.id);
        setPurchaseId(docRef.id)
        setBuyer(initialState) //refresco el formulario
    }

  return (
    <div className='purchaseContainer'>
        <h1> Ultimo Paso - Complete el siguiente formulario</h1>
        <form className='formContainer' onSubmit={onSubmit}>
            <TextField
            placeholder='Name'
            name='nombre'
            value={buyer.name}
            onChange={handleOnChange}
            />
            <TextField 
            placeholder='Email'
            name='email'
            value={buyer.email}
            onChange={handleOnChange}
            />
            <TextField
            placeholder='Telefono Celular'
            name='numero'
            value={buyer.numero}
            onChange={handleOnChange}
            />
            <TextField type="submit"/>
        </form>
        {purchaseId && <Alerts purchaseId={purchaseId}/>}
    </div>
  )
}

export default PurchaseDetail