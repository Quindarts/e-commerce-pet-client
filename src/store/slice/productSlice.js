import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { productService } from '../../services/productService'

export const getAllProducts = createAsyncThunk(
  'product/get',
  async (thunkAPI) => {
    try {
      return productService.getProducts()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const productState = {
  product: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState: productState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload.list;

        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.error;
        }); 
  },
});
export const { reset } = productSlice.actions
export default productSlice.reducer;
