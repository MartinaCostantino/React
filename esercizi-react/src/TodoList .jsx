import { useState } from "react";

export default function TodoList (){
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

  function  handleEvent(){
    setTodos([...todos, inputValue])
    setInputValue("")
    
    
  }
  function handleReset(){
    setTodos([])
  }
  function handleRemove(index){
    const modTodos = [...todos]
    modTodos.splice(index,1)
    setTodos(modTodos)
  }
    return (
      <>
      <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo}
            <button onClick={(() =>{handleRemove(index)})}>Remove</button>
            </li>
        ))}
      </ul>
      <input className="inputLista" type="text" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>
      <button className="btnInviaLista" onClick={handleEvent}>invia</button>
      <button className="reset" name="reset" onClick={handleReset}>Reset</button>
      
      
      </>
    );
  };