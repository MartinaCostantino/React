import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'
import { LanguageContext } from './Language'



function App() {
const [language, setLanguage] = useState("en");
function handleLanguage(event){
 setLanguage(event.target.value)
}

  return (
    <>
    <select name="language" id="language" onChange={handleLanguage}>
    <option value="en">English</option>
    <option value="it">Italiano</option>
    </select>
    <LanguageContext.Provider value={language}>
      <HelloWorld></HelloWorld>
    </LanguageContext.Provider>
    </>
  )
}

export default App
