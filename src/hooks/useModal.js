import { useState } from 'react'

const useModal = () => {
  const [showProductModal, setShowProductModal] = useState(false)

  const handleProductModal = () => {
    setShowProductModal(!showProductModal)
  }

  return { showProductModal, handleProductModal }
}
export default useModal
