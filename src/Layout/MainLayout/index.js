import { Outlet } from 'react-router-dom'
import Footer from '../../components/Shared/Footer'

import Navigation from '../../components/Shared/Header/Navigation'
import TopHeader from '../../components/Shared/Header/TopHeader'

function MainLayout() {
    return (
        <main style={{ maxWidth: '100vw', position:"relative"}}>
            <TopHeader color={'blue'} />
            <Navigation color={'blue'} />
            <Outlet />
            <Footer />
        </main>
    )
}

export default MainLayout
