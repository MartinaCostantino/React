import {  Route, Routes } from 'react-router-dom'
import ShowGitHubUser from './components/ShowGitHubUser'
import NotFound from './components/NotFound'
import GithubUserList from './components/GitHubUserList'
import Home from './components/Home'

function App() {
  return (
    <>
    
    
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path="users" element={<GithubUserList/>}>
      <Route path=":username" element={<ShowGitHubUser />} /> 
      </Route>
     <Route path='*' element={<NotFound></NotFound>} />
    </Routes>
    
    </>
  )
}

export default App
