import React from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../../components/Shared/OurServices'

function Home() {
    return (
        <div style={{ height: '200vh' }}>
            Home
            <Link to="component"> Go to component page</Link>
            <OurServices />
        </div>
    )
}

export default Home
