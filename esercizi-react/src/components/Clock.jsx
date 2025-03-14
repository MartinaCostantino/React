import { useEffect, useState } from "react"

export default function Clock(){
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervallo = setInterval(()=> {
            setDate(new Date())
        }, 1000 )
         return() =>{
            clearInterval(intervallo)
         }
    }, [])
    return (
        <h2>Current time is: {date.toLocaleTimeString()}</h2>
    )
}