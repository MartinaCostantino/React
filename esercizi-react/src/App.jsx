import './App.css'
import AlertClock from './components/AlertClock'

function App() {
  function HandeButtonClick(){
   alert("Sone le ore: " + new Date().toLocaleTimeString())
}
  return (
    <>
    <AlertClock onClick={HandeButtonClick}></AlertClock>
    </>
  )
}

export default App
