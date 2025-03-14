import Clock from './components/Clock'
import Counter from './components/Counter'


export default function App(){
    return(
        <>
        <Counter initialValue={20} incrementAmount={2}></Counter>
        <Clock></Clock>
        </>
    )
}
