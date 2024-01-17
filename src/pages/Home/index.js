import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../../components/Shared/OurServices'
import HeroSection from '../../components/Shared/HeroSection'

function Home() {
    return (
        <div>
            <HeroSection />
            <OurServices />
            Home
            <Link to="component"> Go to component page</Link>
        </div>
    )
}

export default Home
