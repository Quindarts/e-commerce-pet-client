import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../../pages/Home/OurServices'
import HeroSection from '../../pages/Home/HeroSection'
import ProductTab from './ProductTab'
import TopProducts from './TopProducts'
import DailySales from './DailySales'
import OurNews from './OurNews'
import Populated from './Populated'
import Testimonials from './Testimonials'
import Modal from '../../components/Modal'
import useModal from '../../hooks/useModal'
import { useForm } from 'react-hook-form'
import ProductQuickview from '../../components/Product/ProductQuickview'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import { loginUser } from '../../slice/authSlice'
import { authSlice } from '../../slice/authSlice';

const data = {
  id: '1',
  title: 'American Journey Landmark Chicken',
  desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
  category: ['Whole', 'Hearted'],
  weight: [8, 16, 32],
  stock: [1, 0, 1],
  price: [20, 30, 40],
}

function Home() {
  const { showProductModal, handleProductModal } = useModal();
  const refQuantity = useRef(data.quantity || 0)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm()

  const handleChangeQuantity = (quantity) => {
    refQuantity.current = Number(quantity)
    console.log(quantity)
  }

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({
      "userName":"ownerPet123",
      "password":"123456Aa@"
      }));
  }

  return (
    <div>
      <Button type="primary" onClick={handleLogin}>Login</Button>
      <HeroSection />
      <TopProducts/>
      <ProductTab />
      <OurNews />
      <DailySales />
      <Populated />
      <OurServices id="widget__home" />
      <Testimonials />
      <Modal
        showProductModal={showProductModal}
        handleProductModal={handleProductModal}
      >
        <ProductQuickview 
          data={data}
          handleChangeQuantity={handleChangeQuantity}
          value={refQuantity.current}
          errors={errors}
          handleProductModal={handleProductModal}
        />
      </Modal>
      Home
      <Link to="component"> Go to component page</Link>
      <div style={{ width: '232px' }}></div>
    </div>
  )
}

export default Home
