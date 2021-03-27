import React from 'react'

import { Provider } from 'react-redux'
import store from '../global-states/store'
import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles'
import { theme } from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
