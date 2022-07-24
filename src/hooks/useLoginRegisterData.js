import { useState } from 'react'

export default function useLoginRegisterData() {
  const [alert, setAlert] = useState({
    severity: '',
    message: ''
  })

  return {
    alert,
    setAlert
  }
}
