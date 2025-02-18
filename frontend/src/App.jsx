import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Homepage'
import './App.css'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<Signup/>} />
      <Route path='/' element={<Home />} />
    </Routes>
    

    </>
  )
}

export default App