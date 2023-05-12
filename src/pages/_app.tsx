import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import ColorModeContext from '../context/ColorModeContext'
import { lightTheme, darkTheme } from '../../styles/themes/themes'
import { RegisterVideo } from '../components/modalRegisterVideo/registerVideo'
import { AuthProvider } from '../context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let local: any = localStorage.getItem('ls_theme')

    setTheme(local)
    if (local === 'light') {
      setTheme("light")
    }
    if (local !== "light") {
      setTheme("dark")
    }
  }, [theme])

  return (
    <ColorModeContext.Provider
      value={[theme, setTheme]}
    >
      <title>AluraTube</title>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <AuthProvider>
          <GlobalStyle />
          <RegisterVideo />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

