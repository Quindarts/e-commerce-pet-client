import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../../pages/Home/OurServices'
import HeroSection from '../../pages/Home/HeroSection'
import ProductTab from './ProductTab'
import TopProducts from './TopProducts'
import DailySales from './DailySales'


function Home() {
    return (
        <div>
            <HeroSection />
            <TopProducts />
            <ProductTab />
            <DailySales/>
            <OurServices />
            Home
            <Link to="component"> Go to component page</Link>
            <div style={{width:"232px"}}>
            </div>
        </div>
    )
}

export default Home
