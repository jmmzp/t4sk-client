import { Button } from '@mui/material'
import { useState } from 'react'
import { ButtonInitialPage } from '../../styles'
import './style.css'

export default function InputLogin() {
  const [form, setForm] = useState({
    email: '',
    senha: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (!form.email) {
      return
    }
    if (!form.senha) {
      return
    }

    console.log(form)
  }

  const handleChangeForm = e => {
    const value = e.target.value

    setForm({ ...form, [e.target.name]: value })
  }

  return (
    <form className="login__form" onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="login__form__input"
        onChange={e => handleChangeForm(e)}
        value={form.email}
      />

      <input
        type="password"
        name="senha"
        placeholder="Senha"
        className="login__form__input"
        onChange={e => handleChangeForm(e)}
        value={form.senha}
      />

      <Button sx={ButtonInitialPage} type="submit">
        Entrar
      </Button>
    </form>
  )
}
