import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import Tables from './pages/Tables'
import PageNotFound from './pages/PageNotFound'
import { ThemeProvider, CssBaseline } from '@mui/material'
import useUserContext from './hooks/useUserContext'
import PrivateRoutes from './components/PrivateRoutes'

export default function AppRoutes() {
  const { theme } = useUserContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/register" element={<Register />} />

        <Route
          exact
          path="/"
          element={
            <PrivateRoutes>
              <Main />
            </PrivateRoutes>
          }
        />
        <Route
          path="/tabelas/:tableId"
          element={
            <PrivateRoutes>
              <Tables />
            </PrivateRoutes>
          }
        />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  )
}
