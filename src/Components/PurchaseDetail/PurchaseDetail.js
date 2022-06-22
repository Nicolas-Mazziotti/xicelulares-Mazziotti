import React, {useState} from 'react'
import { TextField } from '@mui/material'
import "./PurchaseDetail.css"

const initialState = {
    nombre: '',
    direccion: '',
    numero:''
}

export const PurchaseDetail = () => {
    const [values, setValues] = useState (initialState)

    const handleOnChange = (e) => {
        const {value, name} = e.target;
        //creo un objeto 
        setValues({ ...values, [name]: value}) // name= propiedad de los inputs
    
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(values)
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
            placeholder='Direccion'
            name='direccion'
            value={values.direccion}
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
    </div>
  )
}

export default PurchaseDetail