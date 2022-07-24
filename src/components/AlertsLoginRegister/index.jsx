import { Alert } from '@mui/material'
import useLoginContext from '../../hooks/useLoginContext'
import { useEffect, useState } from 'react'
import { AlertsStyle } from '../../styles'

export default function AlertsLoginRegister() {
  const { alert } = useLoginContext()
  const [responseAlert, setResponseAlert] = useState(null)

  useEffect(() => {
    setResponseAlert(
      <Alert sx={AlertsStyle} variant="filled" severity={alert.severity}>
        {alert.message}
      </Alert>
    )

    setTimeout(() => {
      setResponseAlert(null)
    }, 3000)
  }, [alert])

  return responseAlert
}
