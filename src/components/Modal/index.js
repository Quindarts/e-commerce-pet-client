import { Icon } from '@iconify/react'
import React from 'react'

const Modal = (props) => {
  const { onClose, open, type, children, ...rest } = props

  return (
    <>
      <div {...rest} className={`modal ${open ? 'open' : ''}`}>
        <div className={`modal__overlay`} onClick={onClose}></div>
        <div className={`modal__content`}>
          <button className="modal__button--close h-cb" onClick={onClose}>
            <Icon icon="mingcute:close-fill" />
          </button>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
