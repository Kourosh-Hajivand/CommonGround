import React from 'react'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
type Props ={
    children:React.ReactNode
}
const Layout = ({children}:Props) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout