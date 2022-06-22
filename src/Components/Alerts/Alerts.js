import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

import React from 'react'

const Alerts = () => {
  return (
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
        </Alert>
  )
}

export default Alerts