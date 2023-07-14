import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Features from '../../components/features/Features'
import Home from '../../components/home/Home'
import './Landingpagecss.css'
export default function Landing_page() {
    return (
        <div className='land'>
            <Navbar/>
            <Home/>
            <Features/>
        </div>
    )
}
