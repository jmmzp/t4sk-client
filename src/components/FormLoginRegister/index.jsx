import { Button } from '@mui/material'
import { useState } from 'react'
import { ButtonInitialPage } from '../../styles'
import './style.css'

export default function FormLoginRegister({ state, variables }) {
  const [form, setForm] = useState(state)

  const handleSubmit = e => {
    e.preventDefault()

    const inputName = variables.some(variable => {
      return variable === 'Nome'
    })

    if (inputName) {
      if (!form.Nome) {
        return console.log('Digite o seu nome.')
      }
    }

    if (!form.Email) {
      return console.log('Digite o seu email.')
    }
    if (!form.Senha) {
      return console.log('Digite o sua senha.')
    }
  }

  const handleChangeForm = e => {
    const value = e.target.value

    setForm({ ...form, [e.target.name]: value })
  }

  return (
    <form className="login__form" onSubmit={e => handleSubmit(e)}>
      {variables.map(variable => (
        <input
          key={variable}
          type={variable === 'Senha' ? 'password' : 'text'}
          name={variable}
          placeholder={variable}
          className="login__form__input"
          onChange={e => handleChangeForm(e)}
          value={form.variable}
        />
      ))}

      <Button sx={ButtonInitialPage} type="submit">
        Entrar
      </Button>
    </form>
  )
}
