import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../../pages/Home/OurServices'
import HeroSection from '../../pages/Home/HeroSection'
import ProductTab from './ProductTab'

function Home() {
    return (
        <div>
            <HeroSection />
            <ProductTab />
            <OurServices />
            Home
            <Link to="component"> Go to component page</Link>
        </div>
    )
}

export default Home
