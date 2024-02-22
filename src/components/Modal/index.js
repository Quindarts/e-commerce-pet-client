import { Icon } from '@iconify/react'
import Button from '../Button'
import { useEffect } from 'react'

//prop = full => full width modal

const Modal = (props) => {
  const {
    children,
    showProductModal,
    handleProductModal,
    className,
    full,
    ...rest
  } = props

  const modalFull = full ? ' modal__wrap--full' : ''

  const html = document.querySelector('html')
  useEffect(() => {
    if (showProductModal) {
      html.setAttribute('style', 'overflow: hidden')
    } else {
      html.removeAttribute('style', 'overflow: hidden')
    }
    return () => {
      html.removeAttribute('style', 'overflow: hidden')
    }
  }, [showProductModal, html])

  return (
    <>
      {showProductModal && (
        <div className="modal">
          <div className="modal__layout">
            <div className="modal__mask" onClick={handleProductModal}>
              {full && (
                <Button
                  onClick={handleProductModal}
                  className="modal__product-btnClose"
                  htmlType="submit"
                  type="icon"
                  border={false}
                >
                  <Icon icon="ant-design:close-outlined" />
                </Button>
              )}
            </div>
            <div
              style={{ height: '100%' }}
              className={`modal__wrap${modalFull}${
                className ? ` ${className}` : ''
              }`}
              {...rest}
            >
              {children}
              {!full && (
                <Button
                  onClick={handleProductModal}
                  className="modal__product-btnClose"
                  htmlType="submit"
                  type="icon"
                  border={false}
                >
                  <Icon icon="ant-design:close-outlined" />
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Modal
