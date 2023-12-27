import { Icon } from '@iconify/react'
import demo from '../../assets/img/ricky-118-460x373.jpg'
import Button from '../Button'
import InputQuantity from '../InputQuantity'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'

const data = {
    id: '1',
    title: 'American Journey Landmark Chicken',
    desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
    category: ['Whole', 'Hearted'],
    weight: [8, 16, 32],
    stock: [1, 0, 1],
    price: [20, 30, 40],
}

const ProductModal = (props) => {
    const {
        showProductModal,
        data,
        handleChangeQuantity,
        value,
        errors,
        handleProductModal,
    } = props

    const { id, title, desc, category, weight, stock, price } = data

    const { register, reset } = useForm()

    const refWeight = useRef(0)
    var selectedWeight = refWeight.current

    var selectedPrice = price.find((_, i) => i === selectedWeight)

    var selectedStock = stock.find((_, i) => i === selectedWeight)

    const handleClick = (weight) => {
        refWeight.current = weight
        reset()
    }

    const handleReset = () => {
        refWeight.current = null
        reset()
    }

    console.log(selectedWeight)

    return (
        <>
            {showProductModal && (
                <div className="modal__layout">
                    <div
                        className="modal__mask"
                        onClick={handleProductModal}
                    ></div>
                    <div className="modal__wrap">
                        <div className="modal__product">
                            <div className="modal__product-image">
                                <img src={demo} alt="" />
                            </div>
                            <div className="modal__product-content">
                                <a href='/' className="modal__product-category">
                                    {category.map((cate, i) => (
                                        <>
                                            {cate + ' '} 
                                        </>
                                    ))}
                                </a>
                                <h1 className="modal__product-title">
                                    {title}
                                </h1>
                                <p className="modal__product-description">
                                    {desc}
                                </p>
                                <div className="modal__product-label">
                                    <span className="modal__product-weight">
                                        Weight
                                    </span>
                                    <span
                                        className="modal__product-reset"
                                        onClick={handleReset}
                                    >
                                        x Clear
                                    </span>
                                </div>
                                <div className="product-card__options">
                                    {weight.map((item, i) => (
                                        <span
                                            key={i}
                                            className={
                                                i === selectedWeight
                                                    ? `product-card__weight product-card__weight--active`
                                                    : `product-card__weight`
                                            }
                                            onClick={() => handleClick(i)}
                                        >
                                            {item} lbs
                                        </span>
                                    ))}
                                </div>
                                {selectedPrice && (
                                    <div className="modal__product-price product-card__price">
                                        ${selectedPrice}.00
                                    </div>
                                )}
                                {selectedStock < 1 && (
                                    <div className="modal__product-stockless">
                                        Out of stock
                                    </div>
                                )}
                                <div style={{ display: 'inline-block' }}>
                                    <div className="modal__product-wrap">
                                        <InputQuantity
                                            id="quantity"
                                            validate={{
                                                required:
                                                    'This field cannot be empty.',
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message:
                                                        'Value must be greater than or equal to 1',
                                                },
                                            }}
                                            register={register}
                                            value={value}
                                            onChangeQuantity={
                                                handleChangeQuantity
                                            }
                                            errors={errors}
                                            data={data && data}
                                            size="large"
                                        />
                                        <Button
                                            style={{ fontSize: '11px' }}
                                            type="primary"
                                            disabled={
                                                selectedStock < 1 ||
                                                selectedWeight === null
                                            }
                                        >
                                            <span>
                                                <Icon icon="pepicons-pop:cart" />
                                            </span>
                                            Add to cart
                                        </Button>
                                        <Button
                                            className="product-card__overlay-btn"
                                            type="icon"
                                            color="white"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                            }}
                                        >
                                            <Icon icon="tabler:heart" />
                                        </Button>
                                    </div>
                                    <Button
                                        style={{ fontSize: '11px' }}
                                        className="w-100 text-center"
                                        type="primary"
                                        ghost
                                        disabled={
                                            selectedStock < 1 ||
                                            selectedWeight === null
                                        }
                                    >
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Button
                            onClick={handleProductModal}
                            className="modal__product-btnClose"
                            htmlType="submit"
                            type="icon"
                        >
                            <Icon icon="ant-design:close-outlined" />
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}
export default ProductModal
