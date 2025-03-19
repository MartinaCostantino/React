import { useEffect, useRef } from "react"

export default function FocusableInput(){
    const inputRef = useRef(null)

    useEffect(()=> {
        if(inputRef.current){
            inputRef.current.focus()
        } 
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        console.log(username)
        
      }
    return(
        <>
          <form onSubmit={handleSubmit}>
          <label>Scrivi il tuo nome qui!</label>
          <input ref={inputRef} type="text" name="username"/>
          <button type="submit" >Login</button>
          </form>
        </>
    )
}