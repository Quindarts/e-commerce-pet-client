import { useEffect, useState } from 'react'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import Button from '../../components/Button'
import { getNewUrlByParams } from '../../utils/url'
import { PARAMS_FILTER } from '../../utils/constants'

const PriceSlider = (props) => {
  const { params, priceRange, priceRangeParams } = props;

  const [price, setPrice] = useState(priceRangeParams)
  
  const min = price[0]
  const max = price[1]

  const showPriceRange = () => {
    let priceParams = {
      [PARAMS_FILTER.minPrice]: Math.min(...price),
      [PARAMS_FILTER.maxPrice]: Math.max(...price),
    }
    const newUrl = getNewUrlByParams(params, priceParams)
    window.location.href = newUrl;
  }

  return (
    <>
      <div className="sidebar-filter-price__slider">
        <RangeSlider
          min={priceRange[0]}
          max={priceRange[1]}
          step={10}
          defaultValue={price}
          rangeSlideDisabled={true}
          onInput={(e) => {
            setPrice(e)
          }}
        />
        <div className="sidebar-filter-price__slider--label">
          Price: ${min} - ${max}
        </div>
        <Button
          type="primary"
          size="small"
          ghost
          className="w-100 text-center"
          onClick={showPriceRange}
        >
          filter
        </Button>
      </div>
    </>
  )
}
export default PriceSlider
