import { useState } from "react"


export default function TaskForm({ localTasks, setLocalTasks }){
    const [ task, setTask ] = useState({
        id: 0,
        nome: "",
        completamento: false,
    })
   

    function handleChange(event){
        const { name, value, type, checked } = event.target
     setTask({
        ...task,
        [name]: type === "checkbox" ? checked : value,
     })
    }
    function handleSubmit(event) {
        event.preventDefault()
        const nuovoTask = {
            ...task,
            id: Date.now(), 
        }
        setLocalTasks(localTasks => [...localTasks, nuovoTask])

        setTask({
            id: 0,
            nome: "",
            completamento: false,
          })
       
    }
    return (
        <>
        <form className="formCrea"  onSubmit={handleSubmit}>
            <label  >Titolo task</label>
            <input type="text" name="nome" placeholder="titolo della task" value={task.nome } onChange={handleChange}/>
            <label>Completata</label>
            <input type="checkbox" name="completamento" checked={task.completamento} onChange={handleChange}/>
            <button type="submit">Invia</button>
        </form>
       
        </>
    )
}