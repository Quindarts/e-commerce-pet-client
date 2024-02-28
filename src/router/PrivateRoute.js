import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const user = useSelector((state) => state?.auth?.user?.user)
  return user && user?.role === 'user' ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  )
}
export default PrivateRoutes
