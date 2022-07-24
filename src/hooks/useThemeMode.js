import { useLocalStorage } from 'react-use'
import { useMemo } from 'react'
import { createTheme } from '@mui/material'

export default function useThemeMode() {
  const [themeMode, setThemeMode, removeThemeMode] = useLocalStorage(
    'theme',
    'dark'
  )

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
