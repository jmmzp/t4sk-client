import { useState } from 'react'

export default function useAlert() {
  const [alert, setAlert] = useState()

  return { alert, setAlert }
}
