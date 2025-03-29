import { useMemo, } from "react"

export default function FilteredList({users}){
   const filteredUser = useMemo(() => {
    return users.filter((user)=>user.age >= 18)
   }, [users])
   return (
    <ul>
        {filteredUser.map(user =>(
            <li key={user.id}> name: {user.username} age: {user.age} id: {user.id}</li>
        ))}

    </ul>
   
   )
}