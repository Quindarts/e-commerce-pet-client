import { useState } from 'react'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import Button from '../../components/Button'

const PRICE_RANGE = [10, 480]

const PriceSlider = () => {
  const [price, setPrice] = useState(PRICE_RANGE)

  const min = price[0]
  const max = price[1]

  return (
    <>
      <div className="sidebar-filter-price__slider">
        <RangeSlider
          min={PRICE_RANGE[0]}
          max={PRICE_RANGE[1]}
          step={10}
          defaultValue={price}
          rangeSlideDisabled={true}
          onInput={(e) => {
            setPrice(e)
          }}
        />
        <div className='sidebar-filter-price__slider--label'>
          Price: ${min} - ${max}
        </div>
        <Button type="primary" size="small" ghost className="w-100 text-center">
          filter
        </Button>
      </div>
    </>
  )
}
export default PriceSlider
