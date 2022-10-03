
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {Router} from '../Router'
import { GlobalStyles } from './styles/global'
import { palette } from './styles/theme/defaultTheme.styles'

function App() {

  return (
    <BrowserRouter>
    <ThemeProvider theme={palette}>
      <GlobalStyles/>
      <Router/>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
