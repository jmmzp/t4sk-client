import iconLogout from '../../assets/logout.png'
import './style.css'

export default function HeaderMain() {
  return (
    <header className="main__header">
      <h1 className="logo">
        T<strong>4</strong>SK
      </h1>

      <img
        src={iconLogout}
        alt="Icon logout."
        onClick={() => console.log('logout')}
      />
    </header>
  )
}
