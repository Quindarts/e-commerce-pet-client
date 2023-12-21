import { Icon } from '@iconify/react'
import Button from '../../components/Button'
import demo from '../../assets/img/ricky-118-460x373.jpg'
const CardProduct = (props) => {
    const { data, onClick, ...last } = props

    const { title, desc, category, weight, price, selectedWeight } = data

    return (
        <div className="product-card">
            <a className="product-card__image" href="/">
                <img src={demo} alt={title} />
                <div className="product-card__overlay">
                    <div className="product-card__overlay-btn-list">
                        <Button
                            className="product-card__overlay-btn"
                            type="icon"
                            color="white"
                        >
                            <Icon icon="radix-icons:eye-open" />
                        </Button>
                        <Button
                            className="product-card__overlay-btn"
                            type="icon"
                            color="white"
                        >
                            <Icon icon="tabler:heart" />
                        </Button>
                    </div>
                </div>
            </a>
            <div className="product-card__center">
                <div className="product-card__info">
                    <a className="product-card__title" href="/">
                        {title}
                    </a>
                    <div className="product-card__desc">{desc}</div>
                </div>
                <div className="product-card__category">
                    {category.map((cate) => (
                        <a className="product-card__tag" href="/">
                            {cate}
                        </a>
                    ))}
                </div>
            </div>
            <div className="product-card__bottom">
                <div className="product-card__options">
                    {weight.map((item, i) => (
                        <span
                            className={
                                i === selectedWeight
                                    ? `product-card__weight product-card__weight--active`
                                    : `product-card__weight`
                            }
                            onClick={() => onClick(item)}
                        >
                            {item} lbs
                        </span>
                    ))}
                </div>
                <div className="product-card__stock">OUT OF STOCK</div>
                <div className="product-card__wrap">
                    <div className="product-card__price">${price}.00</div>
                    <div className="product-card__icon">
                        <Button htmlType="submit" type="icon">
                            <Icon icon="pepicons-pop:cart" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardProduct
