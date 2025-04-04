import {  Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Profilo from './components/Profilo'
import './app.css'
import Impostazioni from './components/Impostazioni'

function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path="dashboard" element={<Dashboard />}  >
       <Route path="profilo" element={<Profilo />} /> 
       <Route path="impostazioni" element={<Impostazioni/>} /> 
     </Route>
     <Route path='*' element={<NotFound></NotFound>} />
    </Routes>
    
    </>
  )
}

export default App
