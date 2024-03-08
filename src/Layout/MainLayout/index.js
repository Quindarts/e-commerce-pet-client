import { Outlet } from 'react-router-dom'
import Footer from '../../components/Shared/Footer'

import Navbar from '../../components/Shared/Navbar'

import MainBar from '../../components/Shared/Navbar/HeaderBar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCategoryTree } from '../../store/categorySlice'
function MainLayout() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoryTree())
  }, [dispatch])

  return (
    <main
      style={{
        maxWidth: '100vw',
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <MainBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default MainLayout
