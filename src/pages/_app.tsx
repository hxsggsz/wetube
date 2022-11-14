import { useEffect, useState } from 'react'
import '../../styles/global.css'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import ColorModeContext from '../context/ColorModeContext'
import { ThemeType } from '../../styles/themes/interfaces'
import { lightTheme, darkTheme } from '../../styles/themes/themes'
import { RegisterVideo } from '../components/modalRegisterVideo/registerVideo'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let local: any = localStorage.getItem('ls_theme')

    setTheme(local)
    if (local === null) {
      setTheme("light")
    }
    if (local !== "light" && local !== "dark") {
      setTheme("light")
    }
  }, [theme])

  return (
    <ColorModeContext.Provider
      value={[theme, setTheme]}
    >
      <title>AluraTube</title>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <RegisterVideo />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

