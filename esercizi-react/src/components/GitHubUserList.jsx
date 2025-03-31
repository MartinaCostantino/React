import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

export default  function GithubUser() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() =>{
        async function getApi() {
    try {
        const response = await fetch(`https://api.github.com/users`)
        const responseJson = await response.json()
        setData(responseJson)
        
    } catch (error) {
        setError(error)
        setData(null)
    }
    }
    getApi()
    }, []) 
    console.log(data)
   return (
    <>
        <h2>Users List</h2>
        <ul>
        {data.map((user)=> (
          <li key={user.id}> <Link to={user.login}>{user.login}</Link></li>))}
        </ul>
       <Outlet></Outlet>
    </>
   )
}