import React from 'react'
import Navber from '../components/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
        <Navber/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout