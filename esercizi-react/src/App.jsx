import Clock from './components/Clock'
import Counter from './components/Counter'
import Login from './components/Login'
import Welcome from './components/Welcome'
import "./index.css";


export default function App(){
    return(
        <>
        <Counter initialValue={20} incrementAmount={2}></Counter>
        <Clock></Clock>
        <Welcome></Welcome>
        <Login></Login>
        </>
    )
}
