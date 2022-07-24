import { Navigate } from 'react-router-dom'

export default function PrivateRoutes({ children }) {
  const isLogged = false

  if (!isLogged) {
    return <Navigate to="/login" />
  }

  return children
}
