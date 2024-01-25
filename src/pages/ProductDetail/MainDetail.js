import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import SwiperComponent from '../../components/Swiper'
import images from '../../assets'
import { Swiper, SwiperSlide } from 'swiper/react'

import Badge from '../../components/Badge'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import QuantityTextField from '../../components/QuantityTextField'
import Button from '../../components/Button'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css'
import { Navigation, Thumbs } from 'swiper/modules'
import Tab from '../../components/Tab'

const tabData = [
  {
    id: 1,
    tab: 'Description',
  },
  {
    id: 2,
    tab: 'Additional information',
  },

  {
    id: 3,
    tab: 'Reviews (0)',
  },
]
const detailDataHasWeight = [
  {
    id: 1,
    images: [
      {
        imgUrl: images.cateTabDogs,
      },
      {
        imgUrl: images.widget1,
      },
    ],
    category: 'Food',
    tags: 'cat',
    brand: 'Sophresh',
    title: 'Precious Cat Ultra Unscented Clumping Clay',
    sku: '8945631324',
    description:
      'Precious Cat Ultra  is a unique formulation that combines the heavy non-tracking granules.',
    dimensions: [
      {
        weight: '8 lbs',
        price: 20.0,
      },
      {
        weight: '16 lbs',
        price: 30.0,
      },
      {
        weight: '32 lbs',
        price: 40.0,
      },
    ],
  },
]

const MainDetail = () => {
  const [activeThumb, setActiveThumb] = useState()
  return (
    <div className="detail">
      <header className="detail__header">
        <Breadcrumb
          className="detail__header--breadcrumb"
          targetFormat="snake"
        />
      </header>
      <section className="detail__container mx-auto">
        <div className="detail__container--wrapper">
          <div
            style={{ position: 'relative' }}
            className="detail__container--wrapper-item left"
          >
            <div className="badge__list">
              <Badge badges={'new'} message="new"></Badge>
            </div>
            <SwiperComponent
              thumbs={{ swiper: activeThumb }}
              classNamePrev="prevDetail"
              classNameNext="nextDetail"
              type="detail"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  pagination: {
                    el: '.hidden',
                    clickable: true,
                  },
                },

                640: {
                  slidesPerView: 1,
                  pagination: {
                    el: '.hidden',
                    clickable: true,
                  },
                },
                pagination: {
                  el: '.hidden',
                  clickable: true,
                },
                992: {
                  slidesPerView: 1,
                },
                1179: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  pagination: {
                    el: '.hidden',
                    clickable: true,
                  },
                },
              }}
            >
              {detailDataHasWeight.map((item) => (
                <div className="detail__product">
                  {item.images.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img
                        src={item.imgUrl}
                        alt=""
                        className="img-fluid detail__product-images"
                      />
                    </SwiperSlide>
                  ))}
                </div>
              ))}
            </SwiperComponent>
            <Swiper
              onSwiper={setActiveThumb}
              loop={true}
              slidesPerView={2}
              spaceBetween={5}
              modules={[Thumbs, Navigation]}
              className="swiper__images-slider-thumbs"
            >
              {detailDataHasWeight.map((item) => (
                <div className="">
                  {item.images.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="swiper__images-slider-thumbs-wrapper">
                        <img src={item.imgUrl} alt="" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              ))}
            </Swiper>
            <div>
              {detailDataHasWeight.map((item) => (
                <div className="detail__meta">
                  <span className="detail__meta--link">
                    SKU: <span>{item.sku}</span>
                  </span>
                  <span className="detail__meta--link">
                    Category: <Link>{item.category}</Link>
                  </span>
                  <span className="detail__meta--link">
                    Tags: <Link>{item.tags}</Link>
                  </span>
                  <span className="detail__meta--link">
                    Brand: <Link>{item.brand}</Link>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="detail__container--wrapper-item right">
            {detailDataHasWeight.map((item) => (
              <>
                <div className="detail__share">
                  <div className="detail__share--inner">
                    <Link>{item.brand}</Link>
                  </div>
                  <div className="detail__share--btn">
                    <Icon icon="fe:share" />
                  </div>
                </div>
                <h1 className="detail__title">{item.title}</h1>
                <span className="detail__sku">
                  SKU: <span>{item.sku}</span>
                </span>
                <div className="detail__description">
                  <p>{item.description}</p>
                </div>
                <form>
                  <div>
                    <table className="detail__variations">
                      <tbody style={{ width: '100%', display: 'block' }}>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <th className="detail__variations--label">
                            <label>Weight</label>
                          </th>
                          <td style={{ width: '100%', display: 'block' }}>
                            <ul className="detail__variations--value ">
                              <li>
                                <span className="active">8 lbs</span>
                              </li>
                              <li>
                                <span>16 lbs</span>
                              </li>
                              <li>
                                <span>32 lbs</span>
                              </li>
                            </ul>
                            <Link className="detail__variations--value-clear">
                              <Icon
                                width={12}
                                height={12}
                                icon="pajamas:close-xs"
                              />
                              Clear
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ marginTop: 35 }}>
                      <div>
                        <span className="detail__variations--price">
                          $15.00
                        </span>
                        <p className="detail__variations--availability">
                          Out of stock
                        </p>
                      </div>
                      <div className="detail__atc">
                        <div className="detail__atc--wrapper">
                          <div className="detail__atc--row-1">
                            <QuantityTextField />
                            <Button htmlType="link" type="primary" url="/">
                              <span>
                                <Icon icon="pepicons-pop:cart" hFlip={true} />
                              </span>
                              <div className="detail__atc--btn">
                                ADD TO CART
                              </div>
                            </Button>
                            <Button size="large" htmlType="submit" type="icon">
                              <Icon icon="fa-regular:heart" />
                            </Button>
                          </div>
                          <div className="detail__atc--row-2">
                            <Button
                              htmlType="link"
                              type="primary"
                              url="/"
                              color="white"
                              style={{ width: '100%', textAlign: 'center' }}
                            >
                              Buy Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="detail__features">
                  <div className="detail__features--item">
                    <Icon width={20} height={20} icon="eva:car-outline" />
                    <span>
                      Free delivery for first order and every next over $100
                    </span>
                  </div>
                </div>
                <div className="detail__custom">
                  <ul>
                    <li>
                      <Icon icon="bi:check" /> 100% Money Back Warranty
                    </li>
                    <li>
                      <Icon icon="bi:check" /> All Items Top Best Quality
                    </li>
                    <li>
                      <Icon icon="bi:check" />
                      Free and Fast Delivery
                    </li>
                    <li>
                      <Icon icon="bi:check" /> 24/7 Support
                    </li>
                  </ul>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="detail__tab">
          <Tab className="detail__tab--wrapper" data={tabData}></Tab>
        </div>
      </section>
    </div>
  )
}

export default MainDetail
