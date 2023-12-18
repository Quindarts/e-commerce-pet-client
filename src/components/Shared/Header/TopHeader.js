import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { Icon } from '@iconify/react'
import Svg from '../../Svg/Svg'
import MenuItem from '../../MenuItem/MenuItem'
import { colorHeaderDecor } from '../../../utils/Color'

const TopHeader = ({ color }) => {
    const colors = colorHeaderDecor
        .filter((item) => item.color === color)
        .map((item) => item)

    const colorClass = `header--top-${colors[0].color}`

    // const menuItems = [
    //     {
    //         id: 1,
    //         type: 'left',
    //         path: '/',
    //         text: 'HOME',
    //         icon: 'mingcute:down-small-line',
    //     },
    //     {
    //         id: 2,
    //         type: 'left',
    //         // path: `${path.ABOUT_US}`,
    //         text: 'SHOP',
    //         icon: 'mingcute:down-small-line',
    //     },
    //     {
    //         id: 3,
    //         type: 'left',
    //         // path: `${path.OUR_AGENTS}`,
    //         text: 'BLOG',
    //         icon: 'mingcute:down-small-line',
    //     },
    //     {
    //         id: 4,
    //         type: 'left',
    //         // path: `${path.PROPERTIES}`,
    //         text: 'PAGES',
    //         icon: 'mingcute:down-small-line',
    //     },
    //     {
    //         id: 5,
    //         type: 'right',
    //         icon: 'charm:mail',
    //         text: 'info@ricky-shop.com',
    //     },
    //     {
    //         id: 6,
    //         type: 'right',
    //         icon: 'lucide:phone',
    //         text: '+123 488 9652',
    //     },
    //     {
    //         id: 7,
    //         type: 'right',
    //         icon: 'grommet-icons:location',
    //         text: '25 West 21th Street, Miami FL, USA',
    //     },
    //     {
    //         id: 8,
    //         type: 'right',
    //         text: 'English',
    //     },
    // ]

    return (
        <>
            <div className={`header ${colorClass} header--decor`}>
                <div className="header--left">
                    <MenuItem type="left" />
                </div>
                <div className="header--center"></div>
                <div className="header--right">
                    <MenuItem type="right" />
                </div>
                <Svg
                    className="img-fluid header--decor-top"
                    width={'669'}
                    background={colors[0].background}
                    type="top"
                />
            </div>
        </>
    )
}

export default TopHeader
