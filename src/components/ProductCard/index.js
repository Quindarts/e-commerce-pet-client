import { Icon } from '@iconify/react'
import { useRef } from 'react'
import Button from '../../components/Button'
import demo from '../../assets/img/ricky-118-460x373.jpg'
import { useForm } from 'react-hook-form'
import Badge from '../Badge'
import ProductProgress from '../ProductProgress'
const CardProduct = (props) => {
  const { sale, data, className, handleProductModal, children, ...rest } = props

  const { id, title, desc, category, weight, stock, price } = data

  const { reset } = useForm()

  const refWeight = useRef(0)
  var selectedWeight = refWeight.current

  var selectedPrice = price.find((_, i) => i === selectedWeight)

  var selectedStock = stock.find((_, i) => i === selectedWeight)

  const handleClick = (weight) => {
    refWeight.current = weight
    reset()
  }

  const handleShowModal = (e) => {
    e.preventDefault()
    handleProductModal()
  }

  const classValue = `product-card${className ? ` ${className}` : ''}`

  console.log(sale);

  return (
    <div {...rest} className={classValue}>
      <a className="product-card__image" href="/">
        <img src={demo} alt={title} />
        <div className="product-card__overlay">
          <div className="product-card__overlay-btn-list">
            <Button
              className="product-card__overlay-btn"
              type="icon"
              onClick={handleShowModal}
            >
              <Icon icon="radix-icons:eye-open" />
            </Button>
            <Button className="product-card__overlay-btn" type="icon">
              <Icon icon="tabler:heart" />
            </Button>
          </div>
        </div>
      </a>
      <div className="product-card__center">
        <div className="product-card__info">
          {sale && <ProductProgress />}
          <a className="product-card__title" href="/">
            {title}
          </a>
          <div className="product-card__desc">{desc}</div>
        </div>
        <div className="product-card__category">
          {category.map((cate, i) => (
            <a key={i} className="product-card__tag" href="/">
              {cate}
            </a>
          ))}
        </div>
      </div>
      <div className="product-card__bottom">
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
        {selectedStock < 1 && (
          <div className="product-card__available">OUT OF STOCK</div>
        )}
        <div className="product-card__wrap">
          <div className="product-card__price">${selectedPrice}.00</div>
          <div className="product-card__icon">
            <Button
              className={selectedStock < 1 && 'disabled'}
              htmlType="submit"
              type="icon"
            >
              <Icon icon="pepicons-pop:cart" />
            </Button>
          </div>
        </div>
      </div>
      <div className="badge__list">
        <Badge badges={'featured'} message="top"></Badge>
        <Badge badges={'new'} message="new"></Badge>
        <Badge badges={'sale'} message="-11%"></Badge>
        <Badge badges={'outofstock'} message="out of stock"></Badge>
      </div>
    </div>
  )
}
export default CardProduct
