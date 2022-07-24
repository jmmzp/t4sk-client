import { CssBaseline, ThemeProvider } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import { LoginProvider } from './contexts/LoginContext'
import useUserContext from './hooks/useUserContext'
import Login from './pages/Login'
import Main from './pages/Main'
import Register from './pages/Register'
import Tables from './pages/Tables'

export default function AppRoutes() {
  const { theme } = useUserContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<LoginProvider />}>
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Main />} />
          <Route path="/tabelas/:tableId" element={<Tables />} />
        </Route>

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  )
}
