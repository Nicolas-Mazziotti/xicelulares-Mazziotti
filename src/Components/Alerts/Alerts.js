import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import React from 'react'
import "./Alert.css"

const Alerts = ({purchaseId}) => {
  return (
      <div className='alertContainer'>
        <Alert severity="success" className='alertTexto'>
            <AlertTitle>Aprobado</AlertTitle>
            Compra realizada Exitosamente — <strong>Su ID de transacción es: {purchaseId}</strong>
        </Alert>
      </div>
  )
}

export default Alerts