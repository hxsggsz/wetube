import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../../styles/global'
import { AuthProvider } from '../context/AuthContext'
import { Menu } from '../components/menu/menu';
import { ThemesProvider } from '../context/ThemeContext'
import { Provider } from 'react-redux'
import { store } from '../redux/store';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <title>WeTube</title>
      <Provider store={store}>
        <ThemesProvider>
          <AuthProvider>
            <GlobalStyle />
            <Menu />
            <Component {...pageProps} />
          </AuthProvider >
        </ThemesProvider>
      </Provider>
    </>
  )
}

