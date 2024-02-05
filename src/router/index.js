import AboutUs from '../pages/AboutUs'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import NoMatch from '../pages/NoMatch'
import ProductDetail from '../pages/ProductDetail'
import TestComponents from '../pages/TestComponents'
import PrivateRoutes from './PrivateRoute'
import AuthLayout from '../Layout/AuthLayout'
import MainLayout from '../Layout/MainLayout'
import AccountPage from '../pages/AccountPage'
import EditAccount from '../pages/AccountPage/EditAccount'
const {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} = require('react-router-dom')

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="component" element={<TestComponents />} />
      <Route path="product_detail" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about_us" element={<AboutUs />} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="my_account" element={<AccountPage />}>
          <Route path="edit_account" element={<EditAccount />} />
        </Route>
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Route>
  )
)

export default router
