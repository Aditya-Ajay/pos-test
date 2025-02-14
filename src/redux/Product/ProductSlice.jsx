import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${productId}`);
      console.log('testing ')
      console.log(response.data)
      return response?.data;
    } catch (err) {
      return rejectWithValue(`Error fetching the product: ${err.message}`);
    }
  }
);

export const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    products: [], // Changed from `product: null` to `products: []` to store multiple
    error: false,
    pending: false,
  },
  reducers : {
    removeProduct : (state , action)=>{
        state.products = state.products.filter((product)=>product?.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.error = false;
        state.pending = true;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.error = true;
        state.pending = false;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.error = false;
        state.pending = false;
        if (action.payload) {
          // Ensure unique products by checking if the ID already exists
          const exists = state.products.some(product => product.id === action.payload.id);
          if (!exists) {
            state.products.push(action.payload);
          }
        }
      });
  },
});

export const {removeProduct} = ProductSlice.actions

export default ProductSlice.reducer;
