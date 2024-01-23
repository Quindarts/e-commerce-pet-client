import demo from '../../assets/img/ricky-118-460x373.jpg'
import ProductContext from './ProductContext'

const ProductQuickview = (props) => {
  const { data, handleChangeQuantity, value, errors } = props

  return (
    <>
      <div className="modal__product">
        <div className="modal__product-col--1">
          <div className="modal__product-image">
            <img src={demo} alt="" />
          </div>
        </div>
        <div className="modal__product-col--2">
          <ProductContext 
            data={data}
            handleChangeQuantity={handleChangeQuantity}
            value={value}
            errors={errors}
          />
        </div>
      </div>
    </>
  )
}
export default ProductQuickview;
