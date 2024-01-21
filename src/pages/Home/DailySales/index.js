import { SwiperSlide } from "swiper/react"
import SwiperComponent from "../../../components/Swiper"
import ProductCard from '../../../components/ProductCard';

const DailySales = () => {
  const data = {
    id: '1',
    title: 'American Journey Landmark Chicken',
    desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
    category: ['Whole', 'Hearted'],
    weight: [8, 16, 32],
    stock: [1, 0, 1],
    price: [20, 30, 40],
  }
  let arr = new Array(10).fill(0)
  return (
    <>
      <div className="section-top-products">
        <div className="section__header">
          <h2>Daily Sales</h2>
        </div>
        <div className="container--default">
          <SwiperComponent
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              930: {
                slidesPerView: 3,
                spaceBetween: 0,
                pagination: {
                  el: '.hidden',
                  clickable: true,
                },
              },
              1190: {
                slidesPerView: 4,
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
                <ProductCard data={data} sale/>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </>
  )
}
export default DailySales