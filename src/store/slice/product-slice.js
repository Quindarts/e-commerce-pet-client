import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productService } from '../../services/productService'

const initialState = {
  products: [],
  loading: false,
  error: null,
  loaded: false,
}

export const fetchProductsByParams = createAsyncThunk(
  'products/fetchByParams',
  async (data, thunkApi) => {
    try {
      return await productService.getProductByParams(data)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByParams.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProductsByParams.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.error = null
        state.loaded = true
      })
      .addCase(fetchProductsByParams.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default productsSlice.reducer
