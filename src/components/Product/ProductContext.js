import { Icon } from '@iconify/react'
import Button from '../Button'
import InputQuantity from '../InputQuantity'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'

const ProductContext = (props) => {
  const { data, handleChangeQuantity, value, errors, type = "modal" } = props;
  const { id, title, desc, category, weight, stock, price } = data;

  const { register, reset } = useForm();
  const refWeight = useRef(0);

  var selectedWeight = refWeight.current;

  var selectedPrice = price.find((_, i) => i === selectedWeight)

  var selectedStock = stock.find((_, i) => i === selectedWeight)

  const handleReset = () => {
    refWeight.current = null
    reset()
  }

  const handleClick = (weight) => {
    refWeight.current = weight
    reset()
  }

  return (
    <>
      <div className="context-product">
        <a
          href="/"
          className="context-product__category"
        >
          {category.map((cate, i) => (
            <>{cate + ' '}</>
          ))}
        </a>
        <h1 className={`context-product__title context-product__title--${type}`}>{title}</h1>
        <p className="context-product__description">
          {desc}
        </p>
        <div className="context-product__label">
          <span className="context-product__weight">
            Weight
          </span>
          <span
            className="context-product__reset"
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
          <div className="context-product__price product-card__price">
            ${selectedPrice}.00
          </div>
        )}
        {selectedStock < 1 && (
          <div className="context-product__stockless">
            Out of stock
          </div>
        )}
        <div style={{ display: 'inline-block' }}>
          <div className="context-product__wrap">
            <InputQuantity
              id="quantity"
              validate={{
                required: 'This field cannot be empty.',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Value must be greater than or equal to 1',
                },
              }}
              register={register}
              value={value}
              onChangeQuantity={handleChangeQuantity}
              errors={errors}
              data={data && data}
              size="large"
            />
            <Button
              style={{ fontSize: '11px' }}
              type="primary"
              disabled={selectedStock < 1 || selectedWeight === null}
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
            disabled={selectedStock < 1 || selectedWeight === null}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </>
  )
}
export default ProductContext
