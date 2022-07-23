import { useState } from 'react'
import InputRegister from '../../components/InputRegister'
import './style.css'

export default function Register() {
  const [alert, setAlert] = useState(null)

  return (
    <section className="container">
      <section className="register__leftside">
        <h1 className="register__logo">
          T<strong>4</strong>SK
        </h1>

        <span className="alert">{alert}</span>

        <InputRegister setAlert={setAlert} />
      </section>
      <section className="register__rightside"></section>
    </section>
  )
}
