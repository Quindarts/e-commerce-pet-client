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
import ProductContext from '../../components/Product/ProductContext'

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
];

const data = {
  _id: '1',
  name: 'American Journey Landmark Chicken',
  description: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
  brand: "Whole Hearted",
  price: 20,
  code: 2316548235,
  avaiable: 10,
  dimensions: {
    height: 8,
    weight: 8,
    length: 8,
    width: 8,
  },
}

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
            <ProductContext 
              data = {data}
              type = "page"
            />
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
