import { Outlet } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <ToastContainer />
        
    </>
  )
}

export default MainLayout