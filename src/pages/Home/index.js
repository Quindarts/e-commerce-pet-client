import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../../components/Shared/OurServices'
import HeroSection from '../../components/Shared/HeroSection'
import Populated from './Populated'
import Testimonials from './Testimonials'

function Home() {
    return (
        <div>
            <HeroSection />
            <Populated />
            <OurServices id="widget__home" />
            <Testimonials />
            Home
            <Link to="component"> Go to component page</Link>
        </div>
    )
}

export default Home
