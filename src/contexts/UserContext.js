import { createContext } from 'react'
import useThemeMode from '../hooks/useThemeMode'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const { theme, themeMode, setThemeMode } = useThemeMode()

  return (
    <UserContext.Provider value={{ theme, themeMode, setThemeMode }}>
      {children}
    </UserContext.Provider>
  )
}
