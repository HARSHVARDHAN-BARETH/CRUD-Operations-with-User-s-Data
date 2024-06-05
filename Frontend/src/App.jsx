import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User></User>}></Route>
        <Route path='/create' element={<CreateUser></CreateUser>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}>    </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
