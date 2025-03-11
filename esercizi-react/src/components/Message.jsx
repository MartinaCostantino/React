export default function Message({age}){
    return <p>{age > 18 ? age : "You are very young!" }</p>
}