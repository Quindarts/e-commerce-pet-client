import { Icon } from '@iconify/react'
import Button from '../Button'

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

    const modalFull = full ? " modal__wrap--full" : ""; 

    return (
        <>
            {showProductModal && (
                <div className="modal__layout">
                    <div
                        className="modal__mask"
                        onClick={handleProductModal}
                    >
                        {full && <Button
                            onClick={handleProductModal}
                            className="modal__product-btnClose"
                            htmlType="submit"
                            type="icon"
                            border={false}
                        >
                            <Icon icon="ant-design:close-outlined" />
                        </Button>}
                    </div>
                    <div className={`modal__wrap${modalFull}${className ? ` ${className}` : ''}`} {...rest}>
                        {children}
                        {!full && <Button
                            onClick={handleProductModal}
                            className="modal__product-btnClose"
                            htmlType="submit"
                            type="icon"
                            border={false}
                        >
                            <Icon icon="ant-design:close-outlined" />
                        </Button>}
                    </div>
                </div>
            )}
        </>
    )
}
export default Modal;
