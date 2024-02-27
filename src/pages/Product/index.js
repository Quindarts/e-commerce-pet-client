import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import Button from '../../components/Button'
import ProductCard from '../../components/ProductCard'
import Checkbox from '../../components/CheckBox'
import TextField from '../../components/TextField'
import { Icon } from '@iconify/react'

const data = {
  id: '1',
  title: 'American Journey Landmark Chicken',
  desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
  category: ['Whole', 'Hearted'],
  weight: [8, 16, 32],
  stock: [1, 0, 1],
  price: [20, 30, 40],
}

const Product = () => {
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
                    <Button
                      type="primary"
                      size="small"
                      ghost
                      className="w-100 text-center"
                    >
                      filter
                    </Button>
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
                          <span className="sidebar-filter-color__icon"></span>
                          <span className="sidebar-filter__link--title">
                            Green
                          </span>
                        </Link>
                      </li>
                      <li className="sidebar-filter-color__item">
                        <Link
                          className="sidebar-filter__link sidebar-filter-color__link"
                          to={'/'}
                        >
                          <span className="sidebar-filter-color__icon"></span>
                          <span className="sidebar-filter__link--title">
                            Grey
                          </span>
                        </Link>
                      </li>
                      <li className="sidebar-filter-color__item">
                        <Link
                          className="sidebar-filter__link sidebar-filter-color__link"
                          to={'/'}
                        >
                          <span className="sidebar-filter-color__icon"></span>
                          <span className="sidebar-filter__link--title">
                            Red
                          </span>
                        </Link>
                      </li>
                      <li className="sidebar-filter-color__item">
                        <Link
                          className="sidebar-filter__link sidebar-filter-color__link"
                          to={'/'}
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
                          <span className="sidebar-filter__link--title">
                            Big
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
                            Medium
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
                            Small
                          </span>
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
                          <span className="sidebar-filter__link--title">
                            Beef
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link className="sidebar-filter__link">
                          <Icon icon="cbi:chicken" color="#BFDCF7" />
                          <span className="sidebar-filter__link--title">
                            Chicken
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
            <div className="section-shop__main">
              <div className="shop-main-order">
                <div className="shop-main-order__count">
                  Showing 1-20 of 65 results
                </div>
                <div>Default sorting</div>
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
    </>
  )
}

export default Product
