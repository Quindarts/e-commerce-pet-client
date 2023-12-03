import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../components/Shared/Footer'

function MainLayout() {
    return (
        <Fragment>
            MainLayout
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default MainLayout
