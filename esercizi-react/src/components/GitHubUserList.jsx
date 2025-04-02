import { Link, Outlet } from "react-router-dom"
import useGetApi from "./useGetApi"


export default  function GithubUserList() {
    const { users, error, isLoading, onRefresh} = useGetApi()
    console.log(users)
   
   return (
    <>
        <h2>Users List</h2>
        <ul>
        {isLoading && <p>Loading..</p>}
        {error && <p>Errore</p>}
        {users && users.map((user)=> (
          <li key={user.id}> <Link to={user.login}>{user.login}</Link></li>))}
        </ul>
        <button onClick={onRefresh}>Ricarica</button>
       <Outlet></Outlet>
    </>
   )
}