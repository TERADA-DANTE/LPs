import './App.css'
import { ThemeProvider } from 'styled-components'
import HomePage from 'components/pages/HomePage/index'
import theme from './themes/default'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
