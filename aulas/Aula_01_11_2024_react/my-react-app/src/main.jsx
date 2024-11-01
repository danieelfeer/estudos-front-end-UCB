import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Contador from './Contador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App nome = 'Daniel'/>
    <App nome = 'Estranho'/>
    <Contador/>
  </StrictMode>,
)
