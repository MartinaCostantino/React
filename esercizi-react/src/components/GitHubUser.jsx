import useGithubUser from "../useGithubUser";
import { useState } from "react";
export default function GitHubUser(){
    const [username, setUsername] = useState("");
    const { user, error, loading, getApi } = useGithubUser(username);
    function handleSubmit(event){
      event.preventDefault()
     
    }
    return(
    <>

    <div>
    <h2>GitHub User</h2>
    <form onSubmit={handleSubmit}>
    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
    <button type="submit">Search</button>
    </form>
    </div>  
    <div>
     {loading && <p>Loading...</p>}
     {user && <div>
     <p>{user.name}</p>
     <p>{user.login}</p>
     <img src={user.avatar_url} />
     </div>}
     
     </div> 
    </>
   
    )
}