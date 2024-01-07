import AuthLayout from '../Layout/AuthLayout'
import MainLayout from '../Layout/MainLayout'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Home from '../pages/Home'
import NoMatch from '../pages/NoMatch'
import TestComponents from '../pages/TestComponents'

const {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} = require('react-router-dom')

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
                path="component"
                // loader={async ({ request }) => {
                //     const res = await fetch(
                //         'https://api-kaito-music.vercel.app/api/music/get-by-id?_id=6438cbb5aa9627ecf4936532',
                //         {
                //             signal: request.signal,
                //         }
                //     )
                //     const music = await res.json()
                //     return music
                // }}
                element={<TestComponents />}
            />

            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
        </Route>
    )
)

export default router
