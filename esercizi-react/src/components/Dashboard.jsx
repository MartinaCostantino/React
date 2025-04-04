import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Dasboard(){
    const navigate = useNavigate()
    function handleLogout(){
     alert("logout")
    navigate("/")
    }
    return(
        <>
        <h2>Dashboard</h2>
        <div>
        <Link to='/dashboard/profilo'>Profilo</Link>
        </div>
        <div>
        <Link to='/dashboard/impostazioni'>Impostazioni</Link>  
        </div>
        <Outlet></Outlet>
        <button onClick={handleLogout}>logOut</button>
        </>
    )
}