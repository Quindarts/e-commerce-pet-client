import AuthLayout from '../layout/AuthLayout'
import MainLayout from '../layout/MainLayout'
import AboutUs from '../pages/AboutUs'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import MyProfile from '../pages/MyProfile'
import NoMatch from '../pages/NoMatch'
import ProductDetail from '../pages/ProductDetail'
import TestComponents from '../pages/TestComponents'
import PrivateRoutes from './PrivateRoute'

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
        element={<TestComponents />}
      />
      <Route path="product_detail" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about_us" element={<AboutUs />} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path='my-account' element={<MyProfile />}></Route>
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Route>
  )
)

export default router
