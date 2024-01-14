import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Shared/Footer'

import Navigation from '../../components/Shared/Header/Navigation'
import TopHeader from '../../components/Shared/Header/TopHeader'

function MainLayout() {
    return (
        <Fragment>
            <TopHeader color={'blue'} />
            <Navigation color={'blue'} />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default MainLayout
