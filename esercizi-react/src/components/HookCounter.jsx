import useCounter from "../useCounter"
export default function HookCounter({initialValue = 0}){
   const {counter, increment, decrement, reset } = useCounter(initialValue)
   return(
    <div className="contatore">
    <p>{counter}</p>
    <button onClick={increment}>Incrementa</button>
    <button onClick={decrement}>Decrementa</button>
    <button onClick={reset}>Reset</button>
    </div>
   )
}
