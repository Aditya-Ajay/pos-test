import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL


export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/inventory/${productId}` , {
        headers :{
          Authorization : `Bearer ${localStorage.getItem("token")}`
    
        }
      });
      
      console.log(localStorage.getItem("token"))
      return response?.data;
    } catch (err) {
      console.log("5" + 3)
      console.log(localStorage.getItem("token"))
      return rejectWithValue(`Error fetching the product: ${err.message}`);
    }
  }
);

export const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    products: [],
    error: false,
    pending: false,
  },
  reducers : {
    removeProduct : (state , action)=>{
      console.log(action.payload)
        state.products = state.products.filter((product)=>product?._id !== action.payload)
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
        console.log("PAYLOAD RECEIVED" , action.payload)
        state.error = false;
        state.pending = false;
        if (action.payload) {
          const exists = state.products.some(product => product._id === action.payload._id);
          console.log("PRODUCT ID : " , action.payload.id)
          console.log(exists)
           if (exists) {
          alert("Product already exists")
           }else{
            state.products.push(action.payload);
           }
          
        }
      });
  },
});

export const {removeProduct} = ProductSlice.actions

export default ProductSlice.reducer;
