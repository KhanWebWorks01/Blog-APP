import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AddBlog from './pages/AddBlog'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

const App = () => {
    return(
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/addblog' element={<AddBlog/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        </>
    )
}

export default App