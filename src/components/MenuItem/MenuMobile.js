import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { dataMenu, dataMenuC2, dataMenuC3 } from '../../utils/MenuItem'
import { Link } from 'react-router-dom'

const MenuMobile = ({ type, widthStyle, onclose, open }) => {
    const [typeStyle, setTypeStyle] = useState('left')
    const [step, setStep] = useState(0)
    const [widthEl, setWidthEl] = useState(
        typeof window !== 'undefined' && window.innerWidth / 1
    )
    const [tagMenu, setTagMenu] = useState('')
    const [tagMenuC2, setTagMenuC2] = useState('')
    useEffect(() => {
        if (type) {
            setTypeStyle(type)
        }
        if (widthStyle) {
            setWidthEl(widthStyle)
        }
    }, [type, widthStyle])
    const resetState = () => {
        setTagMenuC2('')
        setTagMenu('')
        setStep(0)
    }
    return (
        <>
            {Boolean(open) && (
                <div
                    style={{
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#0000000d',
                        zIndex: 9999,
                    }}
                ></div>
            )}

            <div
                className="menuui"
                style={{
                    transform: `translateX(${Boolean(open) ? '0%' : '-100%'})`,
                    // visibility: `${Boolean(open) ? 'hidden' : 'visibility'}`,
                    width: widthEl,
                    [typeStyle]: 0,
                }}
            >
                <div className="menuui_header">
                    <div className="menuui_header_close">
                        {Boolean(tagMenu) && (
                            <span
                                className="menuui_header_close_text"
                                onClick={() => {
                                    if (step === 1) {
                                        setTagMenu('')
                                        setStep(0)
                                    } else if (step === 2) {
                                        setStep(1)

                                        setTagMenuC2('')
                                    }
                                }}
                            >
                                <Icon
                                    width="20"
                                    height="20"
                                    icon="ion:chevron-back-outline"
                                    vFlip={true}
                                    color="white"
                                />
                                BACK
                            </span>
                        )}
                        <span
                            onClick={() => {
                                onclose(false)
                                resetState()
                            }}
                            className="menuui_header_close_icon"
                        >
                            <Icon
                                width="30"
                                height="30"
                                icon="mingcute:close-fill"
                            />
                        </span>
                    </div>
                </div>
                <div
                    className="menuui_content"
                    style={{
                        width: widthEl * 2,
                        transform: `translateX(${
                            Boolean(tagMenu) ? '-50%' : '0%'
                        })`,
                    }}
                >
                    <div
                        className="menuui_content_item"
                        style={{ width: widthEl }}
                    >
                        <ul className="menuui_content_item_ul">
                            {dataMenu &&
                                dataMenu.navigation.map((item, index) => {
                                    if (item && item.isHtml) {
                                        return <>{item.html}</>
                                    } else {
                                        return (
                                            <li
                                                className="menuui_content_item_ul_lin"
                                                key={index}
                                            >
                                                <span
                                                    onClick={() => {
                                                        setTagMenu(item.tag)
                                                        if (Boolean(item.tag)) {
                                                            setStep(step + 1)
                                                        }
                                                    }}
                                                    className="menuui_content_item_ul_lin_span"
                                                >
                                                    <span className="menuui_content_item_ul_lin_span_s">
                                                        <Icon
                                                            width="30"
                                                            height="30"
                                                            icon={
                                                                item &&
                                                                item.icon
                                                            }
                                                            style={{
                                                                marginRight: 10,
                                                            }}
                                                        />
                                                        {item.name}
                                                    </span>

                                                    <Icon
                                                        width="30"
                                                        height="30"
                                                        icon={
                                                            item && item.iconNav
                                                        }
                                                    />
                                                </span>
                                            </li>
                                        )
                                    }
                                })}
                        </ul>
                    </div>
                    <div
                        className="menuui_content_item-wrap"
                        style={{
                            width: widthEl,
                            transform: `translateX(${
                                Boolean(tagMenuC2) ? '-100%' : '0'
                            })`,
                        }}
                    >
                        {Boolean(tagMenu) && (
                            <>
                                <div
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        width: Boolean(tagMenuC2)
                                            ? widthEl * 2
                                            : widthEl,
                                    }}
                                >
                                    <ul
                                        className="menuui_content_item-wrap_ul"
                                        style={{
                                            width: Boolean(tagMenuC2)
                                                ? widthEl
                                                : widthEl,
                                        }}
                                    >
                                        <div className="title_tag">
                                            {dataMenuC2[tagMenu].title}
                                        </div>
                                        {dataMenuC2 &&
                                            dataMenuC2[tagMenu]?.list?.map(
                                                (item, index) => {
                                                    return (
                                                        <li
                                                            className="menuui_content_item-wrap_ul_lin"
                                                            key={index}
                                                        >
                                                            <span
                                                                onClick={() => {
                                                                    if (
                                                                        item &&
                                                                        item.path
                                                                    ) {
                                                                    } else {
                                                                        setTagMenuC2(
                                                                            item.tag
                                                                        )
                                                                        setStep(
                                                                            step +
                                                                                1
                                                                        )
                                                                    }
                                                                }}
                                                                className="menuui_content_item-wrap_ul_lin_span"
                                                            >
                                                                {/* <img
                                                                    className="menuui_content_item-wrap_ul_lin_span_icon"
                                                                    src={
                                                                        item.icon
                                                                    }
                                                                    alt=""
                                                                /> */}
                                                                <span className="menuui_content_item-wrap_ul_lin_span_s">
                                                                    {item.name}
                                                                </span>
                                                                <img
                                                                    className="menuui_content_item-wrap_ul_lin_span_iconNav"
                                                                    alt=""
                                                                />
                                                                <Icon
                                                                    width="30"
                                                                    height="30"
                                                                    icon={
                                                                        item &&
                                                                        item.iconNav
                                                                    }
                                                                />
                                                            </span>
                                                        </li>
                                                    )
                                                }
                                            )}
                                    </ul>
                                    {Boolean(tagMenuC2) && (
                                        <ul
                                            className="menuC2"
                                            style={{
                                                width: Boolean(tagMenuC2)
                                                    ? widthEl
                                                    : widthEl,
                                            }}
                                        >
                                            {Boolean(tagMenuC2) &&
                                                dataMenuC3[
                                                    tagMenuC2
                                                ]?.list?.map((item, index) => {
                                                    return (
                                                        <li
                                                            className="menuui_content_item-wrap_ul_lin"
                                                            key={index}
                                                        >
                                                            <span
                                                                onClick={() => {
                                                                    if (
                                                                        item &&
                                                                        item.path
                                                                    ) {
                                                                    } else {
                                                                        // setTagMenuC2(
                                                                        //     item.tag
                                                                        // )
                                                                        // setStep(
                                                                        //     step +
                                                                        //         1
                                                                        // )
                                                                    }
                                                                }}
                                                                className="menuui_content_item-wrap_ul_lin_span"
                                                            >
                                                                <img
                                                                    className="menuui_content_item-wrap_ul_lin_span_icon"
                                                                    src={
                                                                        item.icon
                                                                    }
                                                                    alt=""
                                                                />
                                                                <span className="menuui_content_item-wrap_ul_lin_span_s">
                                                                    {item.name}
                                                                </span>
                                                                <img
                                                                    className="menuui_content_item-wrap_ul_lin_span_iconNav"
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </li>
                                                    )
                                                })}
                                        </ul>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="menuui_footer">
                    <div
                        style={{ display: 'block' }}
                        className="navigation--right"
                    >
                        <div className="navigation--right-wrap">
                            <div className="navigation--search-button">
                                <Link>
                                    <Icon icon="iconamoon:search-bold" />
                                </Link>
                            </div>
                            <div className="navigation--auth-button">
                                <Link>
                                    <Icon icon="ph:user-bold" />
                                </Link>
                            </div>
                            <div className="navigation--wishlist-button">
                                <Link>
                                    <Icon icon="iconamoon:heart-bold" />
                                    <span className="count-info">
                                        <span>99</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="navigation--cart-button">
                                <Link>
                                    <Icon icon="pepicons-pop:cart" />
                                    <span className="count-info">
                                        <span>1</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuMobile
