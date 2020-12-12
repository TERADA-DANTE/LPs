import './App.css'
import { ThemeProvider } from 'styled-components'
import { HomePage } from './pages/'
import theme from './themes/default'
function App() {
  return <ThemeProvider theme={theme}>hi</ThemeProvider>
}

export default App
