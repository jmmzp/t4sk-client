import iconLogout from '../../assets/logout.png'
import { FilterIcons, Logo } from '../../styles'
import './style.css'

import SwitchTheme from '../SwitchTheme'
export default function HeaderMain() {
  return (
    <header className="main__header">
      <Logo />

      <div>
        <SwitchTheme />

        <img
          style={FilterIcons()}
          src={iconLogout}
          alt="Icon logout."
          onClick={() => console.log('logout')}
        />
      </div>
    </header>
  )
}
