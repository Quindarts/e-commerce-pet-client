import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

const categoryAccount = [
  {
    title: 'dashboard',
    text: '',
    type: 'dashboard',
    path: 'dashboard',
  },
  {
    title: 'orders',
    text: '',
    type: 'orders',
    path: 'orders',
  },
  {
    title: 'download',
    text: '',
    type: 'download',
    path: 'download',
  },
  {
    title: 'address',
    text: '',
    type: 'address',
    path: 'address',
  },
  {
    title: 'account details',
    text: '',
    path: 'edit_account',
    type: 'accountDetails',
  },
  {
    title: 'log out',
    text: '',
    type: 'log_out',
    path: 'log_out',
  },
]

const AccountPage = () => {
  const location = useLocation()
  const path = location.pathname.split('/')
  const title = path[path.length - 1].split('_').join(' ')

  return (
    <div className="account">
      <header className="account__header">
        <Breadcrumb
          className="account__header--breadcrumb"
          targetFormat="snake"
        />
        <h1
          style={{ textTransform: 'capitalize' }}
          className="account__header--title mx-auto"
        >
          {title}
        </h1>
      </header>
      <section className="account__container mx-auto">
        <div className="account__wrapper">
          <div className="account__content">
            <div className="account__content--left">
              <div className="account__content--user">
                <div className="account__content--user-avatar">
                  <img
                    className="img-fluid"
                    src="https://secure.gravatar.com/avatar/b85c767a491da7a9a87164ab6c88af02?s=70&d=mm&r=g"
                    alt=""
                  />
                </div>
                <div className="account__content--user-text">
                  Hello,
                  <div className="account__content--user-name">
                    hoangvu200202
                  </div>
                </div>
              </div>
              <nav>
                <ul className="account__content--navigation">
                  {categoryAccount.map((item) => (
                    <li style={{ lineHeight: 1 }}>
                      <NavLink
                        className={({ isActive }) =>
                          [isActive ? 'active' : ''].join(' ')
                        }
                        to={item.path}
                      >
                        {item.type === 'log_out' && (
                          <Icon
                            style={{
                              marginRight: 6,
                              color: '#F63E04',
                            }}
                            icon="material-symbols:logout-rounded"
                          />
                        )}
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="account__content--right">
              {/* <p>
                From your account dashboard you can view your
                <Link>recent orders</Link>, manage your
                <Link>shipping and billing addresses</Link>, and
                <Link>edit your password and account details</Link>.
              </p> */}
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccountPage
