import { Icon } from '@iconify/react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const SelectFilter = () => {
  const [openSelect, setOpenSelect] = useState(false)

  const filterRef = useRef()
  const menuRef = useRef()

  const handleSelect = (e) => {
    setOpenSelect(!openSelect)
    console.log(e.target)
  }

  // window.addEventListener('click', (e) => {
  //   if (e.target !== filterRef.current) {
  //     setOpenSelect(false)
  //   }
  // })

  return (
    <>
      <div className="select-filter" onClick={handleSelect} ref={filterRef}>
        <div>
          <div className="select-filter__wrap">
            <span className="select-filter__title">Default sorting</span>
            <Icon className="select-filter__icon" icon="fa-solid:angle-down" />
          </div>
          {openSelect && (
            <ul className="select-filter__list" ref={menuRef}>
              <li className="select-filter__item select-filter__item--active">
                Default sorting
              </li>
              <li className="select-filter__item">Sort by popularity</li>
              <li className="select-filter__item">Sort by average rating</li>
              <li className="select-filter__item">Sort by latest</li>
              <li className="select-filter__item">
                Sort by price: low to high
              </li>
              <li className="select-filter__item">
                Sort by price: high to low
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
export default SelectFilter
