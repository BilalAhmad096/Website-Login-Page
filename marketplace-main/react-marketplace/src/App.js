import React from 'react'
import MainRouter from './MainRouter'
import {Routes} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
// import { hot } from 'react-hot-loader'

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
  // <Routes>
      <ThemeProvider theme={theme}>
        <MainRouter/>
      </ThemeProvider>
  // </Routes>
)}

// export default hot(module)(App)
export default App
