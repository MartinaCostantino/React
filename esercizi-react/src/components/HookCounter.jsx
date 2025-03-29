import useCounter from "../useCounter"
export default function HookCounter({initialValue = 0}){
   const {counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)
   return(
    <div className="contatore">
    <p>{counter}</p>
    <button onClick={onIncrement}>Incrementa</button>
    <button onClick={onDecrement}>Decrementa</button>
    <button onClick={onReset}>Reset</button>
    </div>
   )
}
