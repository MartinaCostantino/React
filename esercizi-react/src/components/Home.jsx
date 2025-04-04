import { Link } from 'react-router-dom'
export default function Home(){
    return (
    <ul className='nav'>
      <li><Link to='/'></Link><h1>HOME🏠</h1></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
    )
}