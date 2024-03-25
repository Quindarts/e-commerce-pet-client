import { useSelector } from 'react-redux'
import { cartService } from '../../services/cartService'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const getAllCartItems = createAsyncThunk(
  'cart/getAllProducts',
  async (thunkApi) => {
    try {
      const products = await cartService.getAllProductCart()
      const { cartTotalQuantity, cartTotalAmount } = cartService.countCart(products)
      return {
        cartItems: products,
        cartTotalQuantity: cartTotalQuantity,
        cartTotalAmount: cartTotalAmount,
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const updateQuantityCartItem = createAsyncThunk(
  'cart/updateQuantityById',
  async (data, thunkApi) => {
    try {
      let currentCart = thunkApi.getState().cart.cartItems

      let payloadCart = await cartService.updateProductCartById(
        data.userId,
        data.productId,
        data.quantity
      )

      const updatedCart = currentCart.map((cartItem) => {
        const foundPayloadItem = payloadCart.find(
          (payloadItem) => payloadItem.product_id === cartItem._id
        )
        return { ...cartItem, quantity: foundPayloadItem.quantity }
      })

      const { cartTotalQuantity, cartTotalAmount } = cartService.countCart(updatedCart)

      return {cartItems: updatedCart, cartTotalQuantity: cartTotalQuantity, cartTotalAmount: cartTotalAmount}
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.cartItems = action.payload.cartItems
        state.cartTotalQuantity = action.payload.cartTotalQuantity
        state.cartTotalAmount = action.payload.cartTotalAmount
      })
      .addCase(getAllCartItems.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(updateQuantityCartItem.pending, (state) => {
        state.isSuccess = false
        state.isLoading = true
        state.message = ''
      })
      .addCase(updateQuantityCartItem.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.message = 'Update cart successfully'
        state.cartItems = action.payload.cartItems
        state.cartTotalQuantity = action.payload.cartTotalQuantity
        state.cartTotalAmount = action.payload.cartTotalAmount
      })
      .addCase(updateQuantityCartItem.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.error
      })
  },
})
export default cartSlice.reducer