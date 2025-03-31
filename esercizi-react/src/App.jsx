import { Link, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import ShowGitHubUser from './components/ShowGitHubUser'
import NotFound from './components/NotFound'
import GithubUserList from './components/GitHubUserList'

function App() {
  return (
    <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='counter'>Counter</Link></li>
      <li><Link to='/users/'>Users</Link></li>
    </ul>
    
    <Routes>
    <Route path='/' element={<Welcome name={"Martina"}></Welcome>}/>
     <Route path='counter' element={<Counter></Counter>} />
     <Route path="users" element={<GithubUserList/>}>
          { <Route element={<p>Seleziona uno user</p>} /> }
          { <Route path=":username" element={<ShowGitHubUser />} /> }
        </Route>
     <Route path='*' element={<NotFound></NotFound>} />
    </Routes>
    
    </>
  )
}

export default App
