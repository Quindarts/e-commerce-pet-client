import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useModal = () => {
  const [showProductModal, setShowProductModal] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowProductModal(false)
    }
  }, [location])
  const handleProductModal = () => {
    setShowProductModal(!showProductModal)
  }

  return { showProductModal, handleProductModal, setShowProductModal }
}
export default useModal
