import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{ height: '200vh' }}>
            Home
            <Link to="component"> Go to component page</Link>
        </div>
    )
}

export default Home
