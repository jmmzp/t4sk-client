import SwitchTheme from '../SwitchTheme'
import { Logo, ButtonInitialPage } from '../../styles'
import { Button } from '@mui/material'
import './style.css'
export default function HeaderInitialPage() {
  return (
    <header className="initial-page__header">
      <Logo className="initial-page__logo" />

      <div>
        <SwitchTheme />

        <Button sx={ButtonInitialPage} variant="contained">
          REGISTRE-SE
        </Button>
      </div>
    </header>
  )
}
