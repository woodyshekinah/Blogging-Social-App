import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import {BrowserRouter} from 'react-router-dom' //Allows us to use any component that is comming from the react router dom library

//Created the styles object with the global function to change the body background and color
//First value is for the light mode while the last value is for the dark mode
const styles = {
  global:(props) => ({
  body:{
    bg:mode("gray.100", "#000")(props),
    color:mode("gray.800", "whiteAlpha.900")(props)
  }
 })
}

// Added color mode config
const config = {
  initialColorMode: 'dark', //Changed the default color mode from light theme to dark theme using chakra
  useSystemColorMode: false,
}

//extended the theme
const theme = extendTheme({ config, styles })


ReactDOM.createRoot(document.getElementById('root')).render(
  //The Browser Router allows us to use any component that is coming from the react router dom library
  <React.StrictMode> 
    <BrowserRouter>
    <ChakraProvider theme={theme}> 
        <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
) 
