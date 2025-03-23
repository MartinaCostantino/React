import Color from "./color";
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
      <input type="text" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>
      <button onClick={handleEvent}>invia</button>
      <button name="reset" onClick={handleReset}>Reset</button>
      
      
      </>
    );
  };