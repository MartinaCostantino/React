export default function TaskItem({ task, onComplete, onRemove }){
    return <>
        <div className={task.completamento ? "taskCompletata" : "task"} key={task.id}>
        <h3>{task.nome}</h3>
        <label>Stato</label>
        <input type="checkbox" name="completamento" checked={task.completamento} onChange={() => onComplete(task.id)}/>
        <button onClick={() => onRemove(task.id)}>Elimina Task</button>
        </div>
      </>
}