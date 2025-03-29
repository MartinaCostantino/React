import { useState } from "react"
import FilteredList from "./components/FilteredList"
import HookCounter from "./components/HookCounter"
import useForm from "./useForm"

function App() {
   const {form, handleChange} = useForm({username:"", age: ""})
   const [users, setUsers] = useState([])
   const [error, setError] = useState("")
  
   function handleSubmit(event){
      event.preventDefault()
      const age = parseInt(form.age);

      if ( age < 18) {
      setError("Età non valida! L'età minima è 18.");
      return; 
    }else{
        const newUser = { id: users.length + 1, username: form.username, age: parseInt(form.age) }
        setUsers([...users, newUser]);+
        setError("")
    } 
    
   }

  

 return (
  <>
  <h2>Counter</h2>
  <HookCounter></HookCounter>
  <h2>Lista users</h2>
  {error && <p>{error}</p>}
  <FilteredList users={users}></FilteredList>
  <form onSubmit={handleSubmit}>
    <label htmlFor="name" >Username</label>
    <input type="text" name="username" onChange={handleChange} value={form.username || ""} />
    <label htmlFor="age">Age</label>
    <input type="number" name="age" onChange={handleChange} value={form.age || ""}/>
    <button type="submit">invia</button>
  </form>
  
  </>
  )
}

export default App
