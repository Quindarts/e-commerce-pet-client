import { useState } from 'react'

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(!isModalOpen)
  }

  // Return the state and functions as an object
  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  }
}

export default useModal
