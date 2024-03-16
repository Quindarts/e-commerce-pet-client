import { Link, useParams, useSearchParams } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import Button from '../../components/Button'
import ProductCard from '../../components/ProductCard'
import Checkbox from '../../components/CheckBox'
import TextField from '../../components/TextField'
import { Icon } from '@iconify/react'
import SelectFilter from './SelectFilter'
import PriceSlider from './PriceSlider'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, reset } from '../../store/slice/productSlice'
import { useParamsFilter } from '../../hooks/useParams'
import { getNewUrlByParams } from '../../utils/url'
import { PARAMS_FILTER } from '../../utils/constants'

const data = {
  id: '1',
  name: 'American Journey Landmark Chicken',
  description: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
  category: {name: "Food"},
  brand: "Whole Hearted",
  dimensions: {weight: 8},
  available: 200,
  price: 20,
}

const PRICE_RANGE = [10, 480]

const COLOR_LIST = [
  {
    id: 1,
    colorName: 'Green',
    colorValue: 'green',
    hex: '#73BE2F',
  },
  {
    id: 2,
    colorName: 'Grey',
    colorValue: 'grey',
    hex: '#969696',
  },
  {
    id: 3,
    colorName: 'Red',
    colorValue: 'red',
    hex: '#DC464F',
  },
  {
    id: 4,
    colorName: 'White',
    colorValue: 'white',
    hex: '#FFFFFF',
  },
]

const BRAND_LIST = [
  {
    id: 1,
    brandName: 'Greenies',
    brandValue: 'greenies',
  },
  {
    id: 2,
    brandName: 'Hills Science Diet',
    brandValue: 'hills',
  },
  {
    id: 1,
    brandName: 'Nutro',
    brandValue: 'nutro',
  },
  {
    id: 1,
    brandName: 'Royal Canin',
    brandValue: 'royal',
  },
  {
    id: 1,
    brandName: 'Sophresh',
    brandValue: 'sophresh',
  },
  {
    id: 1,
    brandName: 'Taste of the Wild',
    brandValue: 'taste',
  },
  {
    id: 1,
    brandName: 'Whole Hearted',
    brandValue: 'wholehearted',
  },
]

const Product = () => {
  const dispatch = useDispatch()

  const productState = useSelector(state => state.product);

  const params = useParamsFilter()

  const PRICE_RANGE_PARAMS = [
    parseInt(params.min_price) || PRICE_RANGE[0],
    parseInt(params.max_price) || PRICE_RANGE[1],
  ]

  const { pageIndex } = useParams()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    dispatch(getAllProducts())
  }

  const openFilterMobile = () => {
    const filterMobile = document.querySelector(
      '.section-shop__sidebar--mobile'
    )
    console.log(filterMobile.style.display)
    if (filterMobile.style.display === 'block') {
      filterMobile.style.display = 'none'
    } else {
      filterMobile.style.display = 'block'
    }
  }

  const handleClickFilter = (e) => {
    const filter = e.currentTarget.dataset.filter
    const value = e.currentTarget.dataset.value
    const valueParam = { [filter]: value }
    const newUrl = getNewUrlByParams(params, valueParam)
    window.location.href = newUrl
  }

  console.log(productState.product);

  return (
    <>
      <div className="page-header">
        <Breadcrumb targetFormat="snake"></Breadcrumb>
        <div className="page-header__title">Shop</div>
      </div>
      <section className="section-shop">
        <div className="section-shop__container container--default">
          <div className="section-shop__content">
            <div className="section-shop__sidebar">
              <div className="sidebar-filter">
                <div className="sidebar-filter__item sidebar-filter-active">
                  <div className="sidebar-filter__title">Active filters</div>
                  <div className="sidebar-filter-active__content">
                    <ul>
                      <li className="sidebar-filter-active__item">
                        <Icon
                          className="sidebar-filter-active__button"
                          icon="iconoir:cancel"
                        />
                        <span className="sidebar-filter-active__title">Grey</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-filter__item sidebar-filter-price">
                  <div className="sidebar-filter__title">Price</div>
                  <div className="sidebar-filter-price__content">
                    <PriceSlider
                      priceRange={PRICE_RANGE}
                      priceRangeParams={PRICE_RANGE_PARAMS}
                      params={params}
                    />
                  </div>
                </div>
                <div className="sidebar-filter__item sidebar-filter-color">
                  <div className="sidebar-filter__title">Color</div>
                  <div className="sidebar-filter-color__content">
                    <ul>
                      {COLOR_LIST.map((item) => (
                        <>
                          <li
                            id={item.id}
                            className={`sidebar-filter-color__item${
                              item.colorValue === params?.color
                                ? ' sidebar-filter-color__item--selected'
                                : ''
                            }`}
                          >
                            <Link
                              className="sidebar-filter__link sidebar-filter-color__link"
                              onClick={handleClickFilter}
                              data-filter={PARAMS_FILTER.color}
                              data-value={item.colorValue}
                            >
                              <span
                                className="sidebar-filter-color__icon"
                                style={{ background: item.hex }}
                              ></span>
                              <span className="sidebar-filter__link--title">
                                {item.colorName}
                              </span>
                            </Link>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-filter__item sidebar-filter-brand">
                  <div className="sidebar-filter__title">Brand</div>
                  <div className="sidebar-filter-brand__content">
                    <ul>
                      {BRAND_LIST.map((item) => (
                        <>
                          <li
                            className={`sidebar-filter-brand__item${
                              params?.brand === item.brandValue
                                ? ' sidebar-filter-brand__item--selected'
                                : ''
                            }`}
                          >
                            <Link
                              className="sidebar-filter__link sidebar-filter-size__link"
                              onClick={handleClickFilter}
                              data-filter={PARAMS_FILTER.brand}
                              data-value={item.brandValue}
                            >
                              <Checkbox
                                checked={
                                  params?.brand === item.brandValue
                                    ? true
                                    : false
                                }
                                color="blue"
                                size="c-form"
                              />
                              <span className="sidebar-filter__link--title">
                                {item.brandName}{' '}
                                <span className="sidebar-filter-brand__link--count">
                                  10
                                </span>
                              </span>
                            </Link>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-shop__main">
              <div className="shop-main-order">
                <div className="shop-main-order__count">
                  Showing 1-20 of 65 results
                </div>
                <div className="shop-main-option">
                  <SelectFilter params={params} />
                  <div className="sidebar-filter-mobile">
                    <Button
                      type="primary"
                      size="small"
                      ghost
                      onClick={openFilterMobile}
                    >
                      <Icon icon="fa-solid:angle-left" />
                      filter
                    </Button>
                  </div>
                </div>
              </div>
              <div className="shop-main-list">
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                  <div className="col">
                    <ProductCard data={data} />
                  </div>
                  <div className="col">
                    <ProductCard data={data} />
                  </div>
                  <div className="col">
                    <ProductCard data={data} />
                  </div>
                  <div className="col">
                    <ProductCard data={data} />
                  </div>
                  <div className="col">
                    <ProductCard data={data} />
                  </div>
                  <div className="col">
                    <ProductCard data={data} />
                  </div>
                  <div className="col">
                    <ProductCard data={data} />
                  </div>
                  <div className="col">
                    <ProductCard data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-shop__sidebar--mobile">
        <div className="filter-mobile__button">
          <Button type="primary" ghost size="small" onClick={openFilterMobile}>
            x
          </Button>
        </div>
      </div>
    </>
  )
}

export default Product
