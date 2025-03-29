import { useState, useEffect } from "react"
export default function useGithubUser(username){
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading]= useState(false)

   
        async function getApi() {
        if (!username) return;    
        setLoading(true)
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const responseJson = await response.json()
        setUser(responseJson)
        
        
    } catch (error) {
        setError("eerore nel recupero dell'API")
        setUser(null)
        
    } finally{
        setLoading(false)
    }
    }
 
    useEffect(() => {
        getApi();
    }, [username]);
    
 return { user, error, loading, getApi}
}