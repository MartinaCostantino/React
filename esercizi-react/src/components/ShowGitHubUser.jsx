import { useParams } from "react-router-dom";
import useGetUser from "./useGetUser";

export default function ShowGitHubUser(){
    const { username } = useParams();
     const { user, error, isLoading, } = useGetUser(username)
    
  
    return(
    <>
    <div>
     {isLoading && <p>Loading...</p>}
     {error && <p>Errore</p>}
     {user && 
     <div>
     <h2>{user.login}</h2>
     <p>{user.name}</p>
     <img src={user.avatar_url} />
     </div>}
     </div> 
    </>
   
    )
}

