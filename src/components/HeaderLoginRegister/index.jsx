import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ButtonInitialPage, Logo } from '../../styles'
import SwitchTheme from '../SwitchTheme'
import './style.css'

export default function HeaderLoginRegister({ valueButton, navigateTo }) {
  const navigate = useNavigate()

  return (
    <header className="initial-page__header">
      <Logo className="initial-page__logo" />

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
