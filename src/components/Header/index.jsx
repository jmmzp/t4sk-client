import iconLogout from '../../assets/logout.png'
import './style.css'
import { Logo } from '../../styles'

export default function Header() {
  return (
    <header className="main__header">
      <Logo />

      <img
        src={iconLogout}
        alt="Icon logout."
        onClick={() => console.log('logout')}
      />
    </header>
  )
}
