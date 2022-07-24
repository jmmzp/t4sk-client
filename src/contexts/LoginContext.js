import { createContext } from 'react'
import { Outlet } from 'react-router-dom'
import useLoginRegisterData from '../hooks/useLoginRegisterData'

export const LoginContext = createContext({})

export const LoginProvider = () => {
  const { alert, setAlert } = useLoginRegisterData()

  return (
    <LoginContext.Provider value={{ alert, setAlert }}>
      <Outlet />
    </LoginContext.Provider>
  )
}
