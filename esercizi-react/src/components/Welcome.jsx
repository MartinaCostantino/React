import Age from "./Age";
import Message from "./Message";

export default function Welcome({name, age}){
    return (
        <>
         <p>Welcome, {name}!</p>
         {age > 18 && <Age age={age}></Age>}
         {age && <Age age={age}></Age>}
         {age > 18 && age < 65 && <Age age={age}></Age>}
         {age > 18 && name === "John" && <Age age={age}></Age>}
         {age > 18 && <Age age={age}></Age>}
         <Message age= {age}></Message>
        </>
    )
}