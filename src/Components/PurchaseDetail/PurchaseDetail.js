import React, {useContext, useState} from 'react'
import { TextField } from '@mui/material'
import { CartContext } from '../../Context/CartContext'
import "./PurchaseDetail.css"
import { collection, addDoc} from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import Alerts from '../Alerts/Alerts'
import CheckOutProducts from '../CheckOutProducts/CheckOutProducts'


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
        console.log(docRef)
        setPurchaseId(docRef.id)
        setBuyer(initialState) //refresco el formulario
    }

  return (
    
    <div className='purchaseContainer'>
        <CheckOutProducts/>
        <h1> Ultimo Paso - Complete el siguiente formulario</h1>
        <form className='formContainer' onSubmit={onSubmit}>
            <div className='textFieldContainer'>
            <TextField
            placeholder='Nombre'
            name='nombre'
            value={buyer.name}
            onChange={handleOnChange}
            className="textField"
            type="text"
            label="Nombre"
            />
            </div>
            <div className='textFieldContainer'>
            <TextField
            name='apellido'
            value={buyer.apellido}
            onChange={handleOnChange}
            className="textField"
            type="text"
            label="Apellido"
            />
            </div>
            <div className='textFieldContainer'>
            <TextField 
            name='email'
            value={buyer.email}
            onChange={handleOnChange}
            className="textField"
            type="email"
            label= "Email"
            />
            </div>
            <div className='textFieldContainer'>
            <TextField
            name='numero'
            value={buyer.numero}
            onChange={handleOnChange}
            className="textField"
            label="Telefono Celular"
            />
            </div>
            <div className='pb-5'>
            <button className="btn btn-secondary">Pagar</button>
            </div>
        </form>
        {purchaseId && <Alerts purchaseId={purchaseId}/>}
    </div>
  )
}

export default PurchaseDetail