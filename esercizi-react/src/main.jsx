import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { SWRConfig } from 'swr'

const fetcher = (url) => fetch(url).then((response) => response.json())
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SWRConfig  value={{fetcher}}>
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
    </SWRConfig>
  </StrictMode>,
)
