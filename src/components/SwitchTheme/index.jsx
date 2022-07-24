import dark from '../../assets/dark-mode.png'
import light from '../../assets/light-mode.png'
import useUserContext from '../../hooks/useUserContext'
import { FilterIcons } from '../../styles'

export default function SwitchTheme() {
  const { themeMode, setThemeMode } = useUserContext()

  const icon = themeMode === 'dark' ? dark : light

  const handleToggleTheme = () => {
    return themeMode === 'dark' ? setThemeMode('light') : setThemeMode('dark')
  }

  return (
    <img
      className="btn-theme"
      style={FilterIcons()}
      src={icon}
      alt="Icon de tema do site."
      onClick={() => handleToggleTheme()}
    />
  )
}
