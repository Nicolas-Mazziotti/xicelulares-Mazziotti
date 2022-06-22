import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

import React from 'react'

const Alerts = ({purchaseId}) => {
  return (
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Compra realizada Exitosamente — <strong>Su ID de transacción es: {purchaseId}</strong>
        </Alert>
  )
}

export default Alerts