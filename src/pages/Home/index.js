import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            Home
            <Link to="component"> Go to component page</Link>
        </div>
    )
}

export default Home
