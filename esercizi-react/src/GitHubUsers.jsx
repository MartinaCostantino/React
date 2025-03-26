import GithubUser from "./GithubUser"
import { useState } from "react"

export default function GithubUsers(){
    const [userName, setUserName] = useState("")
    const [usersList, setUsersList] = useState([])

    function handleSubmit(event){
        event.preventDefault()
       if(userName !== ""){
        setUsersList([userName, ...usersList])
        setUserName("")
       }
    }
    return(
        <>
        {usersList.map((user) => (
         <GithubUser key={user} username={user}></GithubUser>
        ))}
 
     
            
        <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
        <button type="submit"> Cerca </button>
        </form>
        </>    
    )
}