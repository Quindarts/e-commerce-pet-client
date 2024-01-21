import React, { useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'

import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Icon } from '@iconify/react'

const SwiperComponent = (props) => {
    const {
        children,
        slidesPerView = 3,
        classNameNext,
        classNamePrev,
        breakpoints = {
            320: {
                slidesPerView: 1,
                pagination: {
                    el: '.none',
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

    if (!classNamePrev || !classNameNext) {
        return <></>
    }
    const activeShowIcon = mouseHover === true
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
                    navigation={{
                        nextEl: '.' + classNamePrev,
                        prevEl: '.' + classNameNext,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                    modules={[Navigation, Pagination]}
                    breakpoints={breakpoints}
                >
                    {children}
                </Swiper>
                <div className="swiper__btns">
                    <button
                        type="button"
                        role="presentation"
                        style={{
                            opacity: activeShowIcon ? 1 : 0,
                            visibility: activeShowIcon ? 'visible' : 'hidden',
                        }}
                        className={`${classNamePrev} swiper__btn swiper__btn--left`}
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
                        style={{
                            opacity: activeShowIcon ? 1 : 0,
                            visibility: activeShowIcon ? 'visible' : 'hidden',
                        }}
                        className={`${classNameNext} swiper__btn swiper__btn--right`}
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
