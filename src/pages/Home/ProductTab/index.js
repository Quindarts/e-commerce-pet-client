import React, { useState } from 'react'
import Tab from '../../../components/Tab'
import SwiperComponent from '../../../components/Swiper'
import { SwiperSlide } from 'swiper/react'
import Badge from '../../../components/Badge'
import ProductCard from '../../../components/ProductCard'
import images from '../../../assets'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
// TAB

const tabData = [
  {
    id: 1,
    tab: 'Dogs',
    path: 'dog',
    title: 'Dogs',
  },
  {
    id: 2,
    tab: 'Cats',
    path: 'cat',
    title: 'Cats',
  },

  {
    id: 3,
    tab: 'Fish',
    path: 'fish',
    title: 'Fish',
  },

  {
    id: 4,
    tab: 'Small Pets',
    path: 'small-pet',
    title: 'Small Pets',
  },
]
const data = {
  id: '1',
  title: 'American Journey Landmark Chicken',
  desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
  category: ['Whole', 'Hearted'],
  weight: [8, 16, 32],
  stock: [1, 0, 1],
  price: [20, 30, 40],
}

let arr = new Array(15).fill(0)

const listDataCategory = [
  {
    id: 1,
    title: 'Fresh & Frozen Food',
  },
  {
    id: 2,
    title: 'Toys',
  },
  {
    id: 3,
    title: 'beds',
  },
  {
    id: 4,
    title: 'clothes',
  },
  {
    id: 5,
    title: 'grooming',
  },
  {
    id: 6,
    title: 'trackers',
  },
]

const ProductTab = () => {
  // Tab
  const [currentTab, setCurrentTab] = useState(1)
  const handleTabChange = (tabId) => {
    setCurrentTab(tabId)
  }
  // console.log(currentTab)
  // Tab
  return (
    <>
      <section style={{ width: '100%' }} id="product__tabs">
        <div className="productTabs">
          <div className="productTabs__container mx-auto">
            <div className="productTabs__wrapper">
              <Tab
                className="productTabs__wrapper--tabs mx-auto"
                data={tabData}
                onChangeTab={handleTabChange}
              />
              <div className="productTabs__list">
                <div className="productTabs__list--item">
                  <div className="productTabs__list--item-wide">
                    <div className="productTabs__list--item-wide-header">
                      <img
                        src={images.cateTabDogs}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="productTabs__list--item-wide-title">
                        Dogs
                      </div>
                      <div className="productTabs__list--item-wide-view">
                        <Link>
                          view all
                          <Icon icon="pajamas:arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="productTabs__list--item-wide-subcate">
                      <ul>
                        {listDataCategory &&
                          listDataCategory.map((item, key) => (
                            <li key={key.id}>
                              <Link>{item.title}</Link>
                            </li>
                          ))}
                      </ul>
                      <div
                        style={{ marginTop: 30 }}
                        className="productTabs__list--item-wide-view"
                      >
                        <Link>
                          view all
                          <Icon icon="pajamas:arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="productTabs__list--item-columns">
                    <SwiperComponent
                      classNamePrev="prevProductTab"
                      classNameNext="nextProductTab"
                      slidesPerView={3}
                      grids={2}
                      type={`product--two-row`}
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                          pagination: {
                            el: 'hidden',
                            clickable: true,
                          },
                        },

                        640: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                          pagination: {
                            el: 'hidden',
                            clickable: true,
                          },
                        },

                        768: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                          pagination: {
                            el: 'hidden',
                            clickable: true,
                          },
                        },
                        992: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                          pagination: {
                            el: '.hidden',
                            clickable: true,
                          },
                        },
                      }}
                    >
                      {arr.map((item) => (
                        <SwiperSlide>
                          <ProductCard data={data} />
                        </SwiperSlide>
                      ))}
                    </SwiperComponent>
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

export default ProductTab
