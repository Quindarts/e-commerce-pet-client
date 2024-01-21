import React, { useState } from 'react'
import { Grid, Navigation, Pagination, Autoplay } from 'swiper/modules'

import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'
import { Icon } from '@iconify/react'

const SwiperComponent = (props) => {
    const {
        children,
        slidesPerView = 3,
        className,
        grids,
        breakpoints = {
            320: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },

            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
                pagination: {
                    el: '.hidden',
                    clickable: true,
                },
            },
        },
        ...rest
    } = props

    const [mouseHover, setMouseHover] = useState(false)

    return (
        <>
            <div
                onMouseMove={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
                className="swiper__wrap"
                {...rest}
            >
                <Swiper
                    slidesPerView={slidesPerView}
                    grid={{
                        rows: grids,
                        fill: 'row',
                    }}
                    navigation={{
                        nextEl: '.swiper__btn--right',
                        prevEl: '.swiper__btn--left',
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                    modules={[Navigation, Pagination, Grid, Autoplay]}
                    breakpoints={breakpoints}
                >
                    {children}
                </Swiper>
                <div className="swiper__btns">
                    <button
                        type="button"
                        role="presentation"
                        className={`swiper__btn swiper__btn--left ${
                            mouseHover === true ? 'hidden' : ''
                        }`}
                    >
                        <Icon
                            width={24}
                            height={24}
                            icon="pajamas:arrow-left"
                        />
                    </button>

                    <button
                        type="button"
                        role="presentation"
                        className={`swiper__btn swiper__btn--right ${
                            mouseHover === true ? 'hidden' : ''
                        }`}
                    >
                        <Icon
                            width={24}
                            height={24}
                            icon="pajamas:arrow-right"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default SwiperComponent
