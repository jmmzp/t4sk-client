import { Button, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ButtonInitialPage, Logo } from '../../styles'
import SwitchTheme from '../SwitchTheme'
import AlertsLoginRegister from '../AlertsLoginRegister'
import './style.css'

export default function HeaderLoginRegister({ valueButton, navigateTo }) {
  const navigate = useNavigate()

  return (
    <header className="initial-page__header">
      <Logo className="initial-page__logo" />

      <div className="alert__login-register">
        <AlertsLoginRegister />
      </div>

      <div>
        <SwitchTheme className="initial-page__header__button-switch" />

        <Button
          onClick={() => navigate(`/${navigateTo}`)}
          sx={ButtonInitialPage}
          variant="contained"
        >
          {valueButton}
        </Button>
      </div>
    </header>
  )
}
