import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL


export const fetchCustomerByNumber = createAsyncThunk('fetchCustomerByNumber' , async(mobileNumber , {rejectWithValue})=>{
    try{
        const response = await axios.get(`${BASE_URL}/customers/phone/${mobileNumber}` , {
            headers:{
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        const customer = response.data
        return customer

    }catch(err){
        return rejectWithValue(`Error fetching the customer: ${err.message}`)
    }
}
)

export const updateCustomer = createAsyncThunk(
    "updateCustomer",
    async ({ customerId, customerData }, { rejectWithValue }) => {
      try {
        const response = await axios.put(
          `${BASE_URL}/customers/${customerId}`,
          customerData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const updatedCustomer = response.data;
        return updatedCustomer;
      } catch (err) {
        return rejectWithValue(`Error updating the customer: ${err.message}`);
      }
    }
  );
  


export const CustomerSlice = createSlice({
    name : "Customer",
    initialState : {
    customer : {},
        error : false,
        pending : false
    },
    reducers : {
        removeCustomer : (state)=>{
            state.customer = {}
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchCustomerByNumber.pending , (state)=>{
            state.error = false
            state.pending = true
        })
        .addCase(fetchCustomerByNumber.rejected , (state)=>{
            state.error = true
            state.pending = false
        })
        .addCase(fetchCustomerByNumber.fulfilled , (state , action)=>{
            state.error = false
            state.pending = false
            state.customer = action.payload
        })
        .addCase(updateCustomer.pending, (state) => {
          state.error = false;
          state.pending = true;
        })
        .addCase(updateCustomer.rejected, (state, action) => {
          state.error = true;
          state.pending = false;
          console.log(action.payload); 
        })
        .addCase(updateCustomer.fulfilled, (state, action) => {
          state.error = false;
          state.pending = false;
          state.customer = action.payload;
        });
    }
  
})


export const {removeCustomer} = CustomerSlice.actions
export default CustomerSlice.reducer