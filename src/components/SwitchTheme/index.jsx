import useUserContext from '../../hooks/useUserContext'
import MaterialUISwitch from './MaterialUISwitch'

export default function SwitchTheme() {
  const { themeMode, setThemeMode } = useUserContext()

  const checkedButton = themeMode === 'dark' ? true : false

  const handleToggleTheme = () => {
    return themeMode === 'dark' ? setThemeMode('light') : setThemeMode('dark')
  }

  return (
    <MaterialUISwitch
      sx={{ marginRight: '1.6rem' }}
      checked={checkedButton}
      onClick={() => handleToggleTheme()}
    />
  )
}
