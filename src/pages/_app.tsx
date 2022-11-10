import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { ThemeType } from '../../styles/themes/interfaces'
import { lightTheme, darkTheme } from '../../styles/themes/themes'
import ColorModeContext from '../context/ColorModeContext'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ColorModeContext.Provider
      value={[theme, setTheme]}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}