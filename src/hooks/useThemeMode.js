import { useLocalStorage } from 'react-use'
import { useEffect, useMemo } from 'react'
import { createTheme } from '@mui/material'

export default function useThemeMode() {
  let initialValue = 'light'

  const [themeMode, setThemeMode, removeThemeMode] = useLocalStorage(
    'theme',
    initialValue
  )

  useEffect(() => {
    initialValue = themeMode
  }, [themeMode])

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          initialPagePrimary: {
            fontSize: '3.4rem',
            fontFamily: 'Raleway',
            fontWeight: 200,
            textAlign: 'left',
            width: '70%'
          },
          initialPageSecondary: {
            fontSize: '3.2rem',
            fontFamily: 'Raleway',
            fontWeight: 600,
            textAlign: 'center',
            margin: '1.6rem 0'
          }
        },
        palette: {
          mode: themeMode
        }
      }),
    [themeMode]
  )

  return {
    theme,
    themeMode,
    setThemeMode,
    removeThemeMode
  }
}
