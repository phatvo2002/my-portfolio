import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    //  arrow function
    return (
        <div className="container-md">
            <Header />
            <div>
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
}
export default Layout

