import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useState, useEffect } from "react"


function App() {
  const [localTasks, setLocalTasks] = useState(() => {
    const saved = localStorage.getItem("localTasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify(localTasks));
  }, [localTasks]);
  return (
    <>
    <TaskForm localTasks={localTasks} setLocalTasks={setLocalTasks}></TaskForm>
    <TaskList localTasks={localTasks} setLocalTasks={setLocalTasks} ></TaskList>
   
    </>
  )
}

export default App
