import { useState } from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import ColorModeContext from '../context/ColorModeContext'
import { ThemeType } from '../../styles/themes/interfaces'
import { lightTheme, darkTheme } from '../../styles/themes/themes'
import { RegisterVideo } from '../components/modalRegisterVideo/registerVideo'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  return (
    <ColorModeContext.Provider
      value={[theme, setTheme]}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <RegisterVideo />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}