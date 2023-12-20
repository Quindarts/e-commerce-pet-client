import { Icon } from "@iconify/react";
import { useRef } from "react";
import Button from '../../components/Button';
import demo from "../../assets/img/ricky-118-460x373.jpg";
const CardProduct = (props) => {

  const { data, reset, className, ...rest } = props;

  const { id, title, desc, category, weight, stock, price } = data;

  const refWeight = useRef(0);
  var selectedWeight = refWeight.current;  

  var selectedPrice = price.find((_, i) => i === selectedWeight);

  var selectedStock = stock.find((_, i) => i === selectedWeight);

  const handleClick = (weight) => {
    refWeight.current = weight;
    reset();
  }

  console.log(className);

  const classValue = `product-card${className ? ` ${className}` : ''}`;

  return (
    <div className={classValue}>
      <a className="product-card__image" href="/">
        <img src={demo} alt={title} />
        <div className="product-card__overlay">
        <div className="product-card__overlay-btn-list">
          <Button className="product-card__overlay-btn" type="icon" color="white" >
            <Icon icon="radix-icons:eye-open" />
          </Button>
          <Button className="product-card__overlay-btn" type="icon" color="white" >
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
          <div className="product-card__desc">
            {desc}
          </div>
        </div>
        <div className="product-card__category">
          {category.map((cate, i) => (
            <a key={i} className="product-card__tag" href="/">
              {cate}
            </a>))}
        </div>
      </div>
      <div className="product-card__bottom">
        <div className="product-card__options">
          {weight.map((item, i) => (
            <span 
              key={i} 
              className={i === selectedWeight ? `product-card__weight product-card__weight--active` : `product-card__weight`} 
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
          <Button className={selectedStock < 1 && 'disabled'} htmlType="submit" type="icon">
              <Icon icon="pepicons-pop:cart" />
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
