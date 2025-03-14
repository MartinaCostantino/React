import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";


function Counter({initialValue = 0, incrementAmount = 1}){
const [counter, setCounter] = useState(initialValue)

useEffect(()=>{
   console.log(`The current value is: ${counter}`)
}, [counter])

function handleCounterIncrement(){
   setCounter(c => c + incrementAmount)
}
function handleCounterDecrement(){
   setCounter(c => c - 1)
}
function handleReset(){
   setCounter(initialValue)
}
return (
 <>   
<button onClick={handleCounterIncrement}>Increment</button>
<button onClick={handleCounterDecrement}>Decrement</button>
<button onClick={handleReset}>Reset</button>
<CounterDisplay count={counter}></CounterDisplay>
</>
)
}

export default Counter