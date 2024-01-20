import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../../components/Shared/OurServices'
import HeroSection from '../../components/Shared/HeroSection'
import TopProducts from './TopProducts'
import Banners from './Banners'

function Home() {
    return (
        <div>
            <HeroSection />
            <TopProducts />
            <OurServices />
            <Banners />
            Home
            <Link to="component"> Go to component page</Link>
        </div>
    )
}

export default Home
