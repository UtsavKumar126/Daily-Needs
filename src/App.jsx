import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/Comman/Navbar'
import DashBoard from './Pages/Dashboard'
import Footer from './Components/Comman/Footer'
import {useDispatch} from "react-redux"
import { getProducts } from './Redux/features/product/productAction'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {Routes,Route} from"react-router-dom"
import Cart from './Pages/Cart'

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[])
  return (
    <>
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </>
  )
}

export default App
