import React from 'react'
import LoginPage from './components/auth/LoginPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignUP from './components/auth/SignUp'
import AdminDashboard from './components/AdminDashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signUp' element={<SignUP/>}/>
        <Route path='/adminDashboard' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
