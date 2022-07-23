import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import Tables from './pages/Tables'
import PageNotFound from './pages/PageNotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />

      <Route exact path="/register" element={<Register />} />

      <Route exact path="/" element={<Main />} />

      <Route path="/tabelas/:tableId" element={<Tables />} />

      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}
