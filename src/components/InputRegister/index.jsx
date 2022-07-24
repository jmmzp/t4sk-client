import { useState } from 'react'
import './style.css'
import { Button } from '@mui/material'
import { ButtonInitialPage } from '../../styles'

export default function InputRegister({ setAlert }) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (!form.nome) {
      return setAlert('Digite um nome.')
    }
    if (!form.email) {
      return setAlert('Digite um email.')
    }
    if (!form.senha) {
      return setAlert('Digite uma senha.')
    }
  }

  const handleChangeForm = e => {
    const value = e.target.value

    setForm({ ...form, [e.target.name]: value })
  }

  return (
    <form className="register__form" onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        className="register__form__input"
        onChange={e => handleChangeForm(e)}
        value={form.nome}
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        className="register__form__input"
        onChange={e => handleChangeForm(e)}
        value={form.email}
      />

      <input
        type="password"
        name="senha"
        placeholder="Senha"
        className="register__form__input"
        onChange={e => handleChangeForm(e)}
        value={form.senha}
      />

      <Button sx={ButtonInitialPage} type="submit">
        REGISTRAR
      </Button>
    </form>
  )
}
