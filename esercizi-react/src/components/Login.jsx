import { useState } from "react"
 
 export default function Login({onLogin}){
     const [data, setData] = useState({
         username: '',
         password: '',
         session: false,
      })
     
     
     function handleChange(event){
         const name = event.target.name
         const value = event.target.value
         const checked = event.target.checked 
         const type = event.target.type
         setData((prev)=> {
           return{
             ...prev,
             [name]: type === "checkbox" ? checked : value,
           }
         })
         
     } 
     
     function handleReset(){
         setData({
         username: '',
         password: '',
         session: false,
         })
     }
 
     function handleLogin(event) {
       event.preventDefault();
       onLogin({ 
           username: data.username, 
           password: data.password, 
           remember: data.session 
       });
     } 
     
 
 
     return (
         <> 
            <form onSubmit={handleLogin}>
            <input type="text" value={data.username} name="username" onChange={handleChange} />
            <input type="password" value={data.password} name="password" onChange={handleChange} />
            <input type="checkbox"  name="session" checked={data.session} onChange={handleChange} />
            <button type="submit" disabled={!data.username || !data.password} style={{ backgroundColor: data.password.length < 8 ? "red" : "green" }}
             className="btn-login">LOGIN</button>
            <button onClick={handleReset}>Reset</button>
            </form>
         </>
     )
 }