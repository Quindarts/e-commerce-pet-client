import { Link } from 'react-router-dom'
import demo from '../../assets/img/ricky-118-460x373.jpg'
import Button from '../../components/Button'
import { Icon } from '@iconify/react'
import QuantityTextField from '../../components/QuantityTextField'
import { useContext, useEffect, useRef, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { cartService } from '../../services/cartService'
import { useDispatch } from 'react-redux'
import { updateQuantityCartItem } from '../../store/slice/cartSlice'
import { UserContext } from '.'

const CartItem = (props) => {
  const { itemCart } = props;

  const user = useContext(UserContext);

  const dispatch = useDispatch();

  const [quantityItem, setQuantityItem] = useState(itemCart.quantity);

  const [subtotal, setSubtotal] = useState(itemCart.quantity * itemCart.price);

  const refQuantity = useRef(false);

  const debouncedQuantity = useDebounce(quantityItem, 2000);

  const handleQuantityChange = (newQuantity) => {
    refQuantity.current = true;
    setQuantityItem(newQuantity)
    setSubtotal(newQuantity * itemCart.price);
  }

  useEffect(() => {
    if (refQuantity.current === true) {
      const data = {
        userId: user.id,
        productId: itemCart._id,
        quantity: {
          "quantity": quantityItem
        }
      };
      dispatch(updateQuantityCartItem(data))
    }
  }, [debouncedQuantity]);

  return (
    <>
      <tr className="section-cart__item">
        <td className="section-cart__item-thumbnail">
          <Link to={`/product-detail/${itemCart._id}`}>
            <img src={demo} alt={itemCart.name} />
          </Link>
          <Button
            className="section-cart__item-btnClose"
            htmlType="submit"
            type="icon"
            border={false}
          >
            <Icon icon="ant-design:close-outlined" />
          </Button>
        </td>
        <td className="section-cart__item-name">
          <div>
            <Link className="section-cart__item-title">
              {itemCart.name} - {itemCart.dimensions.weight} lbs
            </Link>
            <div className="section-cart__item-brand">{itemCart.brand}</div>
            <div className="section-cart__item-price">{itemCart.price}</div>
          </div>
        </td>
        <td className="section-cart__item-quantity">
          <QuantityTextField
            value={quantityItem}
            onChange={handleQuantityChange}
            size="medium"
            max={itemCart.avaiable}
          />
        </td>
        <td className="section-cart__item-subtotal">
          {subtotal}
        </td>
      </tr>
    </>
  )
}
export default CartItem
