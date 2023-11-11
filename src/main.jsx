import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { MyContext } from './myContext'

//import { Details } from './pages/Details'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <MyContext.Provider value={{ name: 'asdasd' }}>
        <Routes />
      </MyContext.Provider>

    </ThemeProvider>
  </React.StrictMode>,
)
