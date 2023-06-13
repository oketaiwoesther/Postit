import React from 'react'
import NavBar from "../Component/NavBar"
import Footer from '../Component/Footer'

const RootLayout = ({children }) => {
  return (
    <div>
    <NavBar/>
    <div>{children}</div>
    <Footer/>
    </div>
  )
}

export default RootLayout