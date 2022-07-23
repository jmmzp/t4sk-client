import { useState } from 'react'
import './style.css'

export default function InputLogin({ setAlert }) {
  const [form, setForm] = useState({
    email: '',
    senha: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    setAlert(null)

    if (!form.email) {
      return setAlert('Digite seu email.')
    }
    if (!form.senha) {
      return setAlert('Digite sua senha.')
    }
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

      <button className="login__form__button">ENTRAR</button>
    </form>
  )
}
