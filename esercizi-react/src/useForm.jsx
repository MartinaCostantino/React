import { useState } from "react"

export default function useForm(){
    const [form, setForm] = useState({})

    function handleChange(event){
        const {name, value} = event.target
        setForm((prev)=>({
            ...prev,
            [name] : value,
        }))
    }
    return {form, handleChange}
}