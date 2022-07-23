import { useState } from 'react'
import InputRegister from '../../components/InputRegister'
import './style.css'

export default function Register() {
  const [alert, setAlert] = useState(null)

  return (
    <div className="container">
      <div className="register__leftside">
        <h1 className="register__logo">
          T<strong>4</strong>SK
        </h1>

        <span className="alert">{alert}</span>

        <InputRegister setAlert={setAlert} />
      </div>
      <div className="register__rightside"></div>
    </div>
  )
}
