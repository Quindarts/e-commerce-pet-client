import { createContext, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CartDetail from './CartDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartItems } from '../../store/slice/cartSlice'
import CartTotal from './CartTotal'

export const UserContext = createContext()

const Cart = () => {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.auth)
  const user = userState.user.user

  useEffect(() => {
    dispatch(getAllCartItems())
  }, [])

  return (
    <UserContext.Provider value={user}>
      <div className="page-header">
        <Breadcrumb targetFormat="snake"></Breadcrumb>
        <div className="page-header__title">Cart</div>
      </div>

      <div className="section-cart">
        <div className="section-cart__wrap">
          <div className="section-cart__col-1">
            <CartDetail />
          </div>
          <div className="section-cart__col-2">
            <CartTotal />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default Cart
