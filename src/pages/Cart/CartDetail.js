import { Link } from 'react-router-dom'
import demo from '../../assets/img/ricky-118-460x373.jpg'
import InputQuantity from '../../components/InputQuantity'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import Button from '../../components/Button'
import { Icon } from '@iconify/react'

const data = {
    id: '1',
    title: 'American Journey Landmark Chicken',
    desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
    category: ['Whole', 'Hearted'],
    weight: [8, 16, 32],
    stock: [1, 0, 1],
    price: [20, 30, 40],
}

const CartDetail = () => {
    const {
        register,
        formState: { errors },
    } = useForm()

    const data = {
        id: '1',
        title: 'American Journey Landmark Chicken',
        desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
        category: ['Whole', 'Hearted'],
        weight: [8, 16, 32],
        stock: [1, 0, 1],
        price: [20, 30, 40],
    }

    const refQuantity = useRef(data.quantity || 0)

    const handleChangeQuantity = (quantity) => {
        refQuantity.current = Number(quantity)
        console.log(quantity)
    }

    return (
        <>
            <table className="section-cart__detail">
                <thead>
                    <tr>
                        <th className="section-cart__detail-name" colSpan={2}>
                            product
                        </th>
                        <th className="section-cart__detail-quantity">
                            quantity
                        </th>
                        <th className="section-cart__detail-subtotal">
                            subtotal
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="section-cart__item">
                        <td className="section-cart__item-thumbnail">
                            <Link>
                                <img src={demo} alt="cc" />
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
                                    American Journey Landmark Chicken - 8 lbs
                                </Link>
                                <div className="section-cart__item-brand">
                                    Whole Hearted
                                </div>
                                <div className="section-cart__item-price">
                                    $20.00
                                </div>
                            </div>
                        </td>
                        <td className="section-cart__item-quantity">
                            <InputQuantity
                                id="quantity"
                                validate={{
                                    required: 'This field cannot be empty.',
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message:
                                            'Value must be greater than or equal to 1',
                                    },
                                }}
                                register={register}
                                value={refQuantity.current}
                                onChangeQuantity={handleChangeQuantity}
                                errors={errors}
                                data={data && data}
                                size="medium"
                            />
                        </td>
                        <td className="section-cart__item-subtotal">$20.00</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default CartDetail
