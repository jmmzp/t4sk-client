import InputLogin from '../../components/InputLogin'
import { useState } from 'react'
import './style.css'

export default function Login() {
  const [alert, setAlert] = useState(null)

  return (
    <div className="container">
      <div className="login__leftside"></div>
      <div className="login__rightside">
        <h1 className="login__logo">
          T<strong>4</strong>SK
        </h1>

        <span className="alert"> {alert} </span>
        <InputLogin setAlert={setAlert} />
      </div>
    </div>
  )
}
