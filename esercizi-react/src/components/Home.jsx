import { Link } from 'react-router-dom'
export default function Home(){
    return (
        <ul>
      <li><Link to='/'>Home</Link><h1>HOME🏠</h1></li>
      <li><Link to='/users'>Users</Link></li>
    </ul>
    )
}