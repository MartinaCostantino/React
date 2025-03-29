import useForm from "../useForm"

export default function Form(){
    const {form, handleChange} = useForm({username:"", pass: ""})
    function handleSubmit(event){
        event.preventDefault()
        console.log(form)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} />
            <input type="password" name="pass" onChange={handleChange} />
            <button type="submit">Invia</button>
            
        </form>
    )
}