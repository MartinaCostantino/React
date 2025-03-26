import { useEffect, useState } from "react"

export default  function GithubUser({username}) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() =>{
        async function getApi() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const responseJson = await response.json()
        setData(responseJson)
        
    } catch (error) {
        setError(error)
        setData(null)
    }
    }
    getApi()
    }, [username]) 
    console.log(data)
   return (
    <>
        {data && <div>
        <p>{data.name}</p>
        <p>{data.login}</p>
        <img src={data.avatar_url}  />
        </div> }
    </>
   )
}