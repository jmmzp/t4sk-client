import useUserContext from './hooks/useUserContext'
import logoDark from './assets/t4sk-logo-dark.png'
import logoLight from './assets/t4sk-logo-light.png'

export const dividerStyle = {
  width: '100%',
  height: '1px'
}

export const Logo = () => {
  const { themeMode } = useUserContext()

  if (themeMode === 'dark') {
    return (
      <img
        src={logoLight}
        className="logo initial-page "
        alt="Logo da t4sk cor clara."
      />
    )
  }

  return (
    <img
      src={logoDark}
      className="logo initial-page"
      alt="Logo da t4sk cor escura."
    />
  )
}

export const ButtonInitialPage = () => {
  const { themeMode } = useUserContext()

  const colorInverseTheme = themeMode === 'dark' ? '#ffffff' : '#121212'
  const colorTheme = themeMode === 'dark' ? '#121212' : '#ffffff'

  return {
    padding: '0.7rem 1.2rem',
    fontSize: '1.6rem',
    fontFamily: 'Raleway',
    fontWeight: 800,
    color: colorInverseTheme,
    backgroundColor: colorTheme,
    border: `1px solid ${colorInverseTheme}`,
    borderRadius: 0,
    '&:hover': {
      color: colorTheme,
      backgroundColor: colorInverseTheme,
      border: `1px solid ${colorTheme}`
    }
  }
}

export const FilterIcons = () => {
  const { themeMode } = useUserContext()

  const invert = themeMode === 'dark' ? '100' : '0'

  return {
    filter: `invert(${invert})`
  }
}
