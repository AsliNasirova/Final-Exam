import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'

const MainLay = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLay