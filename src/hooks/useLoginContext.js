import { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'

export default function useUserContext() {
  return useContext(LoginContext)
}
