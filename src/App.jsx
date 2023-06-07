import React from 'react'
import {Route,Routes} from "react-router-dom"
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFoundPage from './pages/NotFoundPage'
import Dashboard from './pages/Dashboard'
import Guard from './pages/Guard'
import Create from './pages/Create'
import UpdateContact from './pages/UpdateContact'
import Detailcard from './pages/Detailcard'


const App = () => {
  return (
   <Routes>
      <Route path='/' element={<Guard><Dashboard/></Guard>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<UpdateContact/>} />
      <Route path='/detail/:id' element={<Detailcard/>} />
      <Route path='*' element={<NotFoundPage/>} />
   </Routes>
  )
}

export default App