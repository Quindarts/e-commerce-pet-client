import { useState } from 'react'
import { apiCreateOrder } from '../services/apiOrder'
import { useSnackbar } from 'notistack'

export const useHandleCreateOrder = () => {
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const handleCreateOrder = async (data) => {
    try {
      setLoading(true)
      const response = await apiCreateOrder(data)
      enqueueSnackbar(response?.message, { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error?.message, {
        variant: 'warning',
      })
    } finally {
      setLoading(false)
    }
  }

  return { handleCreateOrder, loading }
}
