import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Semaforo from './components/Semaforo'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Semaforo></Semaforo>
  </StrictMode>,
)
