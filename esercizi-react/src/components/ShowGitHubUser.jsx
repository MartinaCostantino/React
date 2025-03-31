import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ShowGitHubUser(){
    const {username} = useParams()
    const [user, setUser] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
     useEffect(() =>{
            async function getUser() {
              setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const responseJson = await response.json()
            setUser(responseJson)
            setLoading(false)
        } catch (error) {
            setError("Errore caricamento profilo")
            setUser(null)
            setLoading(false)
        } 
        }
        getUser()
        }, [username]) 
  
    return(
    <>
    <div>
     {loading && <p>Loading...</p>}
    <h2>{user.login}</h2>
     {user && 
     <div>
     <p>{user.name}</p>
     <img src={user.avatar_url} />
     </div>}
     </div> 
    </>
   
    )
}

