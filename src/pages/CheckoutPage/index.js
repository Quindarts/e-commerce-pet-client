import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Accordion from '../../components/Accordin/Accordin'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import Radio from '../../components/Radio'
import { useSelector } from 'react-redux'
import { useHandleCreateOrder } from '../../hooks/useCreateOrder'
import Loading from '../../components/Loading'
const CheckoutPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()
  const { handleCreateOrder, loading } = useHandleCreateOrder()
  const user_id = useSelector((state) => state?.auth?.user?.user?.id)

  const onSubmit = ({ coupon, ...shipping_detail }) => {
    const data = { shipping_detail, user_id: user_id }
    handleCreateOrder(data)
    reset()
  }

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  return (
    <div className="checkout">
      <header className="account__header">
        <Breadcrumb
          className="account__header--breadcrumb"
          targetFormat="snake"
        />
        <h1
          style={{ textTransform: 'capitalize' }}
          className="account__header--title mx-auto"
        >
          Checkout
        </h1>
      </header>
      <section className="checkout__container">
        <div className="checkout__content">
          <div className="checkout__wrap">
            <div className="checkout__col-left">
              <div className="checkout__sub-header">Billing details</div>
              <form className="checkout__billing-fields">
                <TextField
                  className="checkout__billing-fields-name form-row"
                  label="Full name *"
                  type="form"
                  disabled={false}
                  color="blue"
                  id="fullName"
                  name="fullName"
                  register={register}
                  validate={{
                    required: 'This field can not empty.',
                  }}
                  errors={errors}
                />
                <TextField
                  className="checkout__billing-fields-email form-row"
                  label="Email address *"
                  type="form"
                  disabled={false}
                  color="blue"
                  id="email"
                  name="email"
                  register={register}
                  validate={{
                    required: 'This field can not empty.',
                  }}
                  errors={errors}
                />
                <TextField
                  className="form-row"
                  label="Your phone number *"
                  type="form"
                  disabled={false}
                  color="blue"
                  id="phone"
                  name="phone"
                  register={register}
                  validate={{
                    required: 'This field can not empty.',
                    pattern: {
                      value: /(0[3|5|7|8|9])+([0-9]{8})\b/,
                      message: 'Phone number is valid',
                    },
                  }}
                  errors={errors}
                />
                <TextField
                  className="form-row"
                  label="Your address *"
                  type="form"
                  disabled={false}
                  color="blue"
                  id="address"
                  name="address"
                  register={register}
                  validate={{
                    required: 'This field can not empty.',
                  }}
                  errors={errors}
                />
              </form>
            </div>
            <div className="checkout__col-right">
              <div className="checkout__collaterals">
                <Accordion message="Coupon code">
                  <form
                    className="cart__coupon-content"
                    style={{ width: '100%' }}
                  >
                    <TextField
                      type="form"
                      placeholder="Coupon code"
                      disabled={false}
                      color="blue"
                      id="coupon"
                      name="coupon"
                      register={register}
                      validate={{
                        pattern: {
                          value: /[^\\$] [A-Z0-9]{2,}/,
                          message: 'Coupon is valid',
                        },
                      }}
                      errors={errors}
                    />
                    <Button
                      htmlType="submit"
                      type="primary"
                      size="medium"
                      ghost
                    >
                      Apply
                    </Button>
                  </form>
                </Accordion>
                <div className="checkout__sub-header">Your order</div>
                <div className="checkout__order">
                  <div className="checkout__order-table">
                    <div>
                      <div className="checkout__order-space"></div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="checkout__order-name">
                          Adult Seafood Stew Entree in Sauce Canned Cat Food - 8
                          lbs × 2
                        </span>
                        <div className="checkout__order-price">$50.00</div>
                      </div>
                      <div className="checkout__order-space"></div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <h4 className="checkout__order-subtotal-header">
                          Subtotal
                        </h4>
                        <div
                          className="checkout__order-price"
                          style={{ color: '#F63E04' }}
                        >
                          $50.00
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="checkout__order-space2"></div>
                      </div>
                      <div>
                        <div>
                          <div className="checkout__sub-header">Shipping</div>
                          <ul>
                            <li className="checkout__order-shipping-method">
                              <Radio
                                id="flat-rate"
                                name="shipping-method"
                                value="flat-rate"
                              >
                                <div className="flex justify-between items-center flex-1">
                                  <label
                                    className=""
                                    style={{
                                      display: 'inline-block',
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
                              $80.00
                            </span>
                          </div>
                        </div>
                        <div className="section-cart__collateral-hr"></div>
                      </div>
                    </div>
                  </div>
                  <div className="checkout__payment">
                    <div className="checkout__sub-header">Payment Method</div>
                    <div className="checkout__order-shipping-method">
                      <Radio
                        id="cash-on-delivery"
                        name="payment-method"
                        value="cash-on-delivery"
                      >
                        <div className="flex justify-between items-center flex-1">
                          <label
                            for="cash-on-delivery"
                            className="section-cart__shipping-methods-label"
                          >
                            Cash on delivery
                          </label>
                        </div>
                      </Radio>
                    </div>
                    <div className="checkout__order-shipping-method">
                      <Radio
                        id="direct-bank-transfer"
                        name="payment-method"
                        value="direct-bank-transfer"
                      >
                        <div className="flex justify-between items-center flex-1">
                          <label
                            for="direct-bank-transfer"
                            className="section-cart__shipping-methods-label"
                          >
                            Direct bank transfer
                          </label>
                        </div>
                      </Radio>
                    </div>
                  </div>
                  <Button
                    htmlType="submit"
                    type="primary"
                    className="w-100 text-center"
                    style={{ marginTop: '20px' }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Place order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CheckoutPage
