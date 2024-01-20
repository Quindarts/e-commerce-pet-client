import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../../pages/Home/OurServices'
import HeroSection from '../../pages/Home/HeroSection'
import ProductTab from './ProductTab'
import Banners from './Banners'
import TopProducts from './TopProducts'

function Home() {
    return (
        <div>
            <HeroSection />
            <TopProducts />
            <ProductTab />
            <OurServices />
            <Banners />
            Home
            <Link to="component"> Go to component page</Link>
        </div>
    )
}

export default Home
