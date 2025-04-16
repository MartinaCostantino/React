import TaskItem from "./taskItem"

export default function TaskList({ localTasks, setLocalTasks }){
     function completamento(id){
     const indice = localTasks.findIndex((task) => task.id === id)
     const modTasks = [...localTasks]
     modTasks[indice] = {
        ...modTasks[indice],
        completamento: !modTasks[indice].completamento
      }
      setLocalTasks(()=>modTasks)
     }

     function handleRemove(id){
     const nuovaLista = localTasks.filter((task) => task.id !== id)
     setLocalTasks(()=> nuovaLista)
     }
     
    return(
        <>
        {localTasks.length === 0 ? (<div className="noTask">Nessun task presente</div> ):( localTasks.map((task)=>
             <TaskItem 
             onRemove={handleRemove}
             onComplete={completamento}
             task={task}
             key={task.id}
             ></TaskItem> ) )}
        </>
    )
}