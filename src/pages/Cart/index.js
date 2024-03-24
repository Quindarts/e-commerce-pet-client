import { createContext, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CartDetail from './CartDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartItems } from '../../store/slice/cartSlice'
import CartTotal from './CartTotal'
import Loading from '../../components/Loading'

export const UserContext = createContext()

const Cart = () => {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.auth)
  const user = userState.user.user
  const cartState = useSelector((state) => state.cart)

  const { cartItems, message, isLoading, cartTotalAmount } = cartState

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
        {!isLoading ? (
          <>
            {cartItems.length > 0 ? (
              <div className="section-cart__wrap">
                <div className="section-cart__col-1">
                  <CartDetail listCart={cartItems} message={message} />
                </div>
                <div className="section-cart__col-2">
                  <CartTotal cartTotalAmount={cartTotalAmount} />
                </div>
              </div>
            ) : (
              <h1>Không có sản phẩm trong giỏ hàng</h1>
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </UserContext.Provider>
  )
}

export default Cart
