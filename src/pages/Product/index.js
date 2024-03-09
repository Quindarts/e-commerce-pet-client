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
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, reset } from '../../store/slice/productSlice'
import { useParamsFilter } from '../../hooks/useParams';
import { getNewUrlByParams } from '../../utils/url'

const data = {
  id: '1',
  title: 'American Journey Landmark Chicken',
  desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
  category: ['Whole', 'Hearted'],
  weight: [8, 16, 32],
  stock: [1, 0, 1],
  price: [20, 30, 40],
}

const PRICE_RANGE = [10, 480]

const COLOR_LIST = [
  {
    id: 1,
    name: "green",
    code: "#73BE2F",
  },
  {
    id: 2,
    name: "grey",
    code: "#969696",
  },
  {
    id: 3,
    name: "red",
    code: "#DC464F",
  },
]

const Product = () => {
  const dispatch = useDispatch();

  // const productState = useSelector(state => state.product);

  const params = useParamsFilter();

  const PRICE_RANGE_PARAMS = [parseInt(params.min_price) || PRICE_RANGE[0], parseInt(params.max_price) || PRICE_RANGE[1]];

  const { pageIndex } = useParams()

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    dispatch(getAllProducts());
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
    const filter = e.currentTarget.dataset.filter;
    const value = e.currentTarget.dataset.value;
    const valueParam = { [filter]: value }
    const newUrl = getNewUrlByParams(params, valueParam);
    window.location.href = newUrl;
  }

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
                <div className="sidebar-filter__item sidebar-filter-price">
                  <div className="sidebar-filter__title">Price</div>
                  <div className="sidebar-filter-price__content">
                    <PriceSlider priceRange={PRICE_RANGE} priceRangeParams={PRICE_RANGE_PARAMS} params={params}/>
                  </div>
                </div>
                <div className="sidebar-filter__item sidebar-filter-color">
                  <div className="sidebar-filter__title">Color</div>
                  <div className="sidebar-filter-color__content">
                    <ul>
                      <li className={`sidebar-filter-color__item${"green" === params?.color ? " sidebar-filter-color__item--selected" : ""}`}
                      >
                        <Link
                          className="sidebar-filter__link sidebar-filter-color__link"
                          onClick={handleClickFilter}
                          data-filter="color"
                          data-value="green"
                        >
                          <span
                            className="sidebar-filter-color__icon"
                            style={{ background: '#73BE2F' }}
                          ></span>
                          <span className="sidebar-filter__link--title">
                            Green
                          </span>
                        </Link>
                      </li>
                      <li className={`sidebar-filter-color__item${"grey" === params?.color ? " sidebar-filter-color__item--selected" : ""}`}>
                        <Link
                          className="sidebar-filter__link sidebar-filter-color__link"
                          onClick={handleClickFilter}
                          data-filter="color"
                          data-value="grey"
                        >
                          <span
                            className="sidebar-filter-color__icon"
                            style={{ background: '#969696' }}
                          ></span>
                          <span className="sidebar-filter__link--title">
                            Grey
                          </span>
                        </Link>
                      </li>
                      <li className="sidebar-filter-color__item">
                        <Link
                          className="sidebar-filter__link sidebar-filter-color__link"
                          to={'?color=red'}
                        >
                          <span
                            className="sidebar-filter-color__icon"
                            style={{ background: '#DC464F' }}
                          ></span>
                          <span className="sidebar-filter__link--title">
                            Red
                          </span>
                        </Link>
                      </li>
                      <li className="sidebar-filter-color__item">
                        <Link
                          className="sidebar-filter__link sidebar-filter-color__link"
                          to={'?color=white'}
                        >
                          <span className="sidebar-filter-color__icon"></span>
                          <span className="sidebar-filter__link--title">
                            White
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-filter__item sidebar-filter-brand">
                  <div className="sidebar-filter__title">Brand</div>
                  <div className="sidebar-filter-brand__content">
                    <ul>
                      <li className='sidebar-filter-brand__item sidebar-filter-brand__item--selected'>
                        <Link className="sidebar-filter__link sidebar-filter-size__link" 
                          onClick={handleClickFilter}
                          data-filter="brand"
                          data-value="greenies"
                        >
                          <Checkbox checked={true} color="blue" size="c-form" />
                          <span className="sidebar-filter__link--title">
                            Greenies{' '}
                            <span className="sidebar-filter-brand__link--count">
                              10
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li className='sidebar-filter-brand__item sidebar-filter-brand__item--selected'>
                        <Link className="sidebar-filter__link sidebar-filter-size__link"
                          onClick={handleClickFilter}
                          data-filter="brand"
                          data-value="hills-science-diet"
                        >
                          <Checkbox checked={true} color="blue" size="c-form" />
                          <span className="sidebar-filter__link--title">
                            Hills Science Diet{' '}
                            <span className="sidebar-filter-brand__link--count">
                              9
                            </span>
                          </span>
                        </Link>
                      </li>
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
                  <SelectFilter params={params}/>
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
        <div className="filter-mobile__button" >
          <Button type="primary" ghost size="small" onClick={openFilterMobile}>
            x
          </Button>
        </div>
        <div className="sidebar-filter">
          <div className="sidebar-filter__item sidebar-filter-price">
            <div className="sidebar-filter__title">Price</div>
            <div className="sidebar-filter-price__content">
              <PriceSlider priceRange={PRICE_RANGE} priceRangeParams={PRICE_RANGE_PARAMS} params={params}/>
            </div>
          </div>
          <div className="sidebar-filter__item sidebar-filter-color">
            <div className="sidebar-filter__title">Color</div>
            <div className="sidebar-filter-color__content">
              <ul>
                <li className="sidebar-filter-color__item">
                  <Link
                    className="sidebar-filter__link sidebar-filter-color__link"
                    to={'/'}
                  >
                    <span
                      className="sidebar-filter-color__icon"
                      style={{ background: '#73BE2F' }}
                    ></span>
                    <span className="sidebar-filter__link--title">Green</span>
                  </Link>
                </li>
                <li className="sidebar-filter-color__item">
                  <Link
                    className="sidebar-filter__link sidebar-filter-color__link"
                    to={'/'}
                  >
                    <span
                      className="sidebar-filter-color__icon"
                      style={{ background: '#969696' }}
                    ></span>
                    <span className="sidebar-filter__link--title">Grey</span>
                  </Link>
                </li>
                <li className="sidebar-filter-color__item">
                  <Link
                    className="sidebar-filter__link sidebar-filter-color__link"
                    to={'/'}
                  >
                    <span
                      className="sidebar-filter-color__icon"
                      style={{ background: '#DC464F' }}
                    ></span>
                    <span className="sidebar-filter__link--title">Red</span>
                  </Link>
                </li>
                <li className="sidebar-filter-color__item">
                  <Link
                    className="sidebar-filter__link sidebar-filter-color__link"
                    to={'/'}
                  >
                    <span className="sidebar-filter-color__icon"></span>
                    <span className="sidebar-filter__link--title">White</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-filter__item sidebar-filter-size">
            <div className="sidebar-filter__title">Size</div>
            <div className="sidebar-filter-size__content">
              <ul>
                <li>
                  <Link className="sidebar-filter__link sidebar-filter-size__link">
                    <TextField
                      type="checkbox"
                      name=""
                      placeholder=""
                      value=""
                      onChange=""
                      disabled={false}
                      color="blue"
                      checked={true}
                    />
                    <span className="sidebar-filter__link--title">Big</span>
                  </Link>
                </li>
                <li>
                  <Link className="sidebar-filter__link sidebar-filter-size__link">
                    <TextField
                      type="checkbox"
                      name=""
                      placeholder=""
                      value=""
                      onChange=""
                      disabled={false}
                      color="blue"
                      checked={true}
                    />
                    <span className="sidebar-filter__link--title">Medium</span>
                  </Link>
                </li>
                <li>
                  <Link className="sidebar-filter__link sidebar-filter-size__link">
                    <TextField
                      type="checkbox"
                      name=""
                      placeholder=""
                      value=""
                      onChange=""
                      disabled={false}
                      color="blue"
                      checked={true}
                    />
                    <span className="sidebar-filter__link--title">Small</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-filter__item sidebar-filter-meat">
            <div className="sidebar-filter__title">Meat</div>
            <div className="sidebar-filter-meat__content">
              <ul>
                <li>
                  <Link className="sidebar-filter__link">
                    <Icon icon="healthicons:animal-cow" color="#BFDCF7" />
                    <span className="sidebar-filter__link--title">Beef</span>
                  </Link>
                </li>
                <li>
                  <Link className="sidebar-filter__link">
                    <Icon icon="cbi:chicken" color="#BFDCF7" />
                    <span className="sidebar-filter__link--title">Chicken</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-filter__item sidebar-filter-brand">
            <div className="sidebar-filter__title">Brand</div>
            <div className="sidebar-filter-brand__content">
              <ul>
                <li>
                  <Link className="sidebar-filter__link sidebar-filter-size__link">
                    <TextField
                      type="checkbox"
                      name=""
                      placeholder=""
                      value=""
                      onChange=""
                      disabled={false}
                      color="blue"
                      checked={true}
                    />
                    <span className="sidebar-filter__link--title">
                      Greenies{' '}
                      <span className="sidebar-filter-brand__link--count">
                        10
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="sidebar-filter__link sidebar-filter-size__link">
                    <TextField
                      type="checkbox"
                      name=""
                      placeholder=""
                      value=""
                      onChange=""
                      disabled={false}
                      color="blue"
                      checked={true}
                    />
                    <span className="sidebar-filter__link--title">
                      Hills Science Diet{' '}
                      <span className="sidebar-filter-brand__link--count">
                        9
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
