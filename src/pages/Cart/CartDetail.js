import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import { useSnackbar } from 'notistack'

const CartDetail = () => {
  const cartState = useSelector((state) => state.cart)

  const listCart = cartState.cartItems

  console.log(cartState)

  const { enqueueSnackbar } = useSnackbar()

  if (cartState.message) {
    enqueueSnackbar(cartState.message, {
      variant: 'success',
    })
  }

  return (
    <>
      {!cartState.isLoading ? (
        <table className="section-cart__detail">
          <thead>
            <tr>
              <th className="section-cart__detail-name" colSpan={2}>
                product
              </th>
              <th className="section-cart__detail-quantity">quantity</th>
              <th className="section-cart__detail-subtotal">subtotal</th>
            </tr>
          </thead>
          <tbody>
            {listCart?.map((item, index) => (
              <CartItem itemCart={item} key={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </>
  )
}
export default CartDetail
