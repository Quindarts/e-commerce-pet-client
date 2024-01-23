import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import Svg from '../../Svg/Svg'
import images from '../../../assets'
import MenuItem from '../../MenuItem/MenuItem'
import MenuMobile from '../../MenuItem/MenuMobile'
import { colorNavigationDecor } from '../../../utils/Color'
import Modal from '../../Modal'
import useModal from '../../../hooks/useModal'

const Navigation = ({ color }) => {
  const [isSticky, setSticky] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      const isSticky = offset > 100
      setSticky(isSticky)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const colors = colorNavigationDecor
    .filter((item) => item.color === color)
    .map((item) => item)

  const colorClass = `navigation--top-${colors[0].color} `

  return (
    <>
      <Modal open={isModalOpen} onClose={handleCloseModal}></Modal>
      <div
        className={`navigation navigation--decor ${colorClass} ${
          isSticky ? 'sticky' : ''
        }`}
      >
        <div className="navigation--init">
          <div className="navigation--row">
            <div className="navigation--left">
              <button
                style={{}}
                onClick={() => {
                  setOpenNav(true)
                }}
                className="navigation--menu-btn h-cb"
              >
                <Icon
                  icon="gravity-ui:bars"
                  width="35"
                  height="30"
                  vFlip={true}
                />
              </button>
              <div className="navigation--logo">
                <Link to="/">
                  <img
                    className="img-fluid"
                    loading="lazy"
                    src={images.logo}
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="navigation--center">
              <nav className="navigation--item">
                <ul className="navigation--menu-list">
                  <MenuItem type="navigation" />
                </ul>
              </nav>
            </div>
            <div className="navigation--right">
              <div className="navigation--right-wrap">
                <div className="navigation--search-button">
                  <Link onClick={handleOpenModal}>
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

            <Svg
              className="img-fluid header--decor-bottom"
              width={'669'}
              background={colors[0].background}
              type="bottom"
            />
          </div>
        </div>
      </div>

      <MenuMobile
        open={openNav}
        onclose={() => {
          setOpenNav(false)
        }}
      />
    </>
  )
}

export default Navigation