import { useForm } from 'react-hook-form'
import Accordin from '../../components/Accordin/Accordin'
import Breadcrumb from '../../components/Breadcrumb'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import Radio from '../../components/Radio'
import RadioGroup from '../../components/RadioGroup'
import { useState } from 'react'
import CartDetail from './CartDetail'

const Cart = () => {
    const { register } = useForm();

    const cost = 0

    const [totalCost, setTotalCost] = useState(cost)

    const handleChange = (e) => {
        const method = e.target.value
        if (method === 'flat-rate') {
            setTotalCost(totalCost + 30)
        } else {
            setTotalCost(cost)
        }
    }

    return (
        <>
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
                        <div className="section-cart__collateral">
                            <div className="section-cart__total">
                                <div className="section-cart__coupon">
                                    <Accordin
                                        className="w-100"
                                        message="Coupon code"
                                    >
                                        <div className="section-cart__coupon-wrap">
                                            <TextField
                                                type="form"
                                                placeholder="Coupon code"
                                                color="blue"
                                                register={register}
                                                id="coupon"
                                            />
                                            <Button
                                                htmlType="submit"
                                                type="primary"
                                                ghost
                                                size="medium"
                                            >
                                                Apply
                                            </Button>
                                        </div>
                                    </Accordin>
                                </div>
                                <div className="section-cart__subtotal">
                                    <div className="flex justify-between items-center">
                                        <span className="section-cart__collateral-title">
                                            Subtotal
                                        </span>
                                        <span className="section-cart__collateral-price">
                                            ${cost}.00
                                        </span>
                                    </div>
                                </div>
                                <div className="section-cart__collateral-hr"></div>
                                <div className="section-cart__shipping">
                                    <span className="section-cart__collateral-title">
                                        Shipping
                                    </span>
                                    <ul className="section-cart__shipping-methods">
                                        <li className="section-cart__shipping-methods-item">
                                            <Radio
                                                id="flat-rate"
                                                name="shipping-method"
                                                value="flat-rate"
                                                onChange={handleChange}
                                            >
                                                <div className="flex justify-between items-center flex-1">
                                                    <label
                                                        className=""
                                                        style={{
                                                            display:
                                                                'inline-block',
                                                            fontSize: '14px',
                                                        }}
                                                        for="flat-rate"
                                                    >
                                                        Flat rate:
                                                    </label>
                                                    <span className="section-cart__collateral-price">
                                                        $30.00
                                                    </span>
                                                </div>
                                            </Radio>
                                        </li>
                                        <li className="section-cart__shipping-methods-item">
                                            <Radio
                                                id="free-shipping"
                                                name="shipping-method"
                                                value="free-shipping"
                                                onChange={handleChange}
                                            >
                                                <div className="flex justify-between items-center flex-1">
                                                    <label
                                                        for="free-shipping"
                                                        className="section-cart__shipping-methods-label"
                                                    >
                                                        Free shipping
                                                    </label>
                                                </div>
                                            </Radio>
                                        </li>
                                    </ul>
                                </div>
                                <div className="section-cart__collateral-hr"></div>
                                <div className="section-cart__subtotal">
                                    <div className="flex justify-between items-center">
                                        <span className="section-cart__collateral-title">
                                            Total
                                        </span>
                                        <span className="section-cart__collateral-price section-cart__collateral-price-total">
                                            ${totalCost}.00
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    htmlType="submit"
                                    type="primary"
                                    className="w-100 text-center"
                                    style={{ marginTop: '20px' }}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
