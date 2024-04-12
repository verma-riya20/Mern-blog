import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/sign-in' element={<Signin/>} ></Route>
      <Route path='/sign-up' element={<SignUp/>} ></Route>
      <Route path='/dashboard' element={<Dashboard/>} ></Route>
      <Route path='/projects' element={<Projects/>} ></Route>
      
      

      </Routes>
      </BrowserRouter>
  )
}

export default App
