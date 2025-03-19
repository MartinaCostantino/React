import { useState } from "react"
import { useRef } from "react"

export default function UncontrolledLogin(){
  const formRef = useRef(null)


  function handleSubmit(event){
    event.preventDefault()
    const form = event.target
      const data = {
          username: form.username.value,
          password: form.password.value,
          remember: form.remember.checked,
       }
     console.log(data)  
  }
   
  function loginWithFormData(event){
    event.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    console.log("Username:", formData.get("username"));
    console.log("Password:", formData.get("password"));
    console.log("Remember me:", formData.get("remember") === "on");

  }
    
    return (
        <> 
           <form ref={formRef} onSubmit={handleSubmit}>
           <input type="text" name="username" />
           <input type="password" name="password"  />
           <input type="checkbox" name="remember" />
           <button type="submit" >LOGIN</button>
           <button type="button" onClick={loginWithFormData}>Login with FormData</button>
           </form>
        </>
    )
}