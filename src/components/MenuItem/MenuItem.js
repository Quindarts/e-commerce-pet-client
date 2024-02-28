import React from 'react'
import { Icon } from '@iconify/react'
import { Link, NavLink } from 'react-router-dom'
import { menuItems } from '../../utils/MenuItem'
import Button from '../Button'

const renderMenuItem = (item, index) => {
  const isRightType = item.type === 'right'
  const isNavigationType = item.type === 'navigation'
  const hasSubMenu = item.submenu && item.submenu.length > 0
  const hasLargeSubmenu = item.text === 'DOGS'

  return (
    <li
      key={index}
      className={`header--menu-item ${isRightType ? 'header--item' : ''} ${
        isNavigationType ? 'navigation--menu-item' : ''
      }`}
    >
      {isRightType && <Icon icon={item.icon} />}
      {isNavigationType ? (
        <NavLink className="navigation--link" to={item.path}>
          {item.icon && <Icon className="icon" icon={item.icon} />}
          {item.text}
        </NavLink>
      ) : (
        <NavLink to={item.path}>
          {item.text}
          {!isRightType && <Icon icon={item.icon} className="icon-down" />}
          {item.text === 'English' && (
            <>
              <Icon className="icon-down" icon="mingcute:down-small-line" />
            </>
          )}
        </NavLink>
      )}

      {/* Large Menu type === Dogs */}
      {hasLargeSubmenu ? (
        <div
          style={{ left: '-279px' }}
          className={`${item.text === 'DOGS' ? 'large--menu' : ''}`}
        >
          <div className="large--container">
            <div className="large--left">
              <div className="large--title">Dogs</div>
              <ul className="menu--submenu-large">
                {item.submenu.map((subItem, index) => (
                  <li key={index} className="submenu--item">
                    <Link to={subItem.path} className="submenu--item-link">
                      {subItem.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="large--center">
              <div>
                <div className="product--grid-list">
                  {item.products.map((product, index) => (
                    <div className="product--grid-item" key={index}>
                      <div className="product--grid-thumb">
                        <Link className="thumb-link">
                          <img
                            loading="lazy"
                            src="/logo192.png"
                            alt="img products"
                          />
                        </Link>
                      </div>
                      <div className="product--grid-title">
                        <div>
                          <Link className="product--grid-title-link">
                            {product.text}
                          </Link>
                        </div>
                        <div>
                          <Link className="product--grid-title-price">
                            ${product.price}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="large--right">
              <div className="widget--wrap">
                <div className="widget--heading">
                  <h2>
                    Amazing <br />
                    Pet Toys
                  </h2>
                </div>
                <div className="widget--heading-title">
                  <h2>Funny Toys</h2>
                </div>
                <Link>
                  <Button
                    htmlType="link"
                    type="primary"
                    url="/"
                    color="white"
                    className="btn--link"
                  >
                    SHOP NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        hasSubMenu && (
          <ul
            className={`${
              item.text === 'English' ? 'language' : 'menu--submenu'
            }`}
          >
            {item.submenu.map((subItem, index) => {
              const hasInnerSubMenu =
                subItem.subMenu && subItem.subMenu.length > 0

              return (
                <li key={index} className="submenu--item">
                  <Link to={subItem.path} className="submenu--item-link">
                    {subItem.text}
                    {hasInnerSubMenu && (
                      <Icon
                        icon="mingcute:down-small-line"
                        className="submenu-icon"
                      />
                    )}
                  </Link>

                  {hasInnerSubMenu && (
                    <ul
                      className={`menu--submenu-inner menu--submenu--last menu--submenu`}
                    >
                      {subItem.subMenu.map((innerSubItem, index) => (
                        <li key={index} className={`menu--item`}>
                          <Link
                            to={innerSubItem.path}
                            className="menu--item-link"
                          >
                            {innerSubItem.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        )
      )}
    </li>
  )
}

const MenuItem = (props) => {
  const { type } = props

  return (
    <div className={`header--list`}>
      <nav className="header--item">
        <ul className={`header--menu-list`}>
          {menuItems
            .filter((item) => item.type === type)
            .map((item, index) => renderMenuItem(item, index))}
        </ul>
      </nav>
    </div>
  )
}

export default MenuItem
