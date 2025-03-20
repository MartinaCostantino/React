import './App.css'
import Colors from './Colors'

function App() {
  const colorList = [
    { id: 1, name: "Rosso" },
    { id: 2, name: "Blu" },
    { id: 3, name: "Verde" },
  ]

  return (
    <>
      <Colors colors={colorList}></Colors>

    </>
  )
}

export default App
