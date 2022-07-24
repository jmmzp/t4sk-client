import SwitchTheme from '../SwitchTheme'
import { Logo, ButtonInitialPage } from '../../styles'
import { Button } from '@mui/material'
import './style.css'
import { useNavigate } from 'react-router-dom'
export default function HeaderInitialPage({ valueButton, navigateTo }) {
  const navigate = useNavigate()

  return (
    <header className="initial-page__header">
      <Logo className="initial-page__logo" />

      <div>
        <SwitchTheme />

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
