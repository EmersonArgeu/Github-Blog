import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { QueryProvider } from './contexts/QueryContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <QueryProvider>
          <Router />
        </QueryProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
