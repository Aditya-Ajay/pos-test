import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchCustomerByNumber = createAsyncThunk(
  "fetchCustomerByNumber",
  async (mobileNumber, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/customers/phone/${mobileNumber}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(`Error fetching the customer: ${err.message}`);
    }
  }
);

export const updateCustomer = createAsyncThunk(
  "updateCustomer",
  async ({ customerId, customerData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/customers/${customerId}`, customerData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(`Error updating the customer: ${err.message}`);
    }
  }
);

export const newCustomers = createAsyncThunk(
  "newCustomer",
  async ({ customerData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/customers`, customerData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(`Error adding the customer: ${err.message}`);
    }
  }
);

export const fetchTopCustomers = createAsyncThunk(
  "fetchTopCustomers",
  async (count = 10, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/customers/list`, {
        params: { count },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
console.log(response.data,'responsedata')
  
    

      return response.data;
    } catch (err) {
      return rejectWithValue(`Error fetching top customers: ${err.message}`);
    }
  }
);


export const CustomerSlice = createSlice({
  name: "Customer",
  initialState: {
    customer: {},
    topCustomers: [],
    error: false,
    pending: false,
    successful: false,
  },
  reducers: {
    removeCustomer: (state) => {
      state.customer = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerByNumber.pending, (state) => {
        state.error = false;
        state.pending = true;
      })
      .addCase(fetchCustomerByNumber.rejected, (state) => {
        state.error = true;
        state.pending = false;
      })
      .addCase(fetchCustomerByNumber.fulfilled, (state, action) => {
        state.error = false;
        state.pending = false;
        state.customer = action.payload;
        state.successful = true;
      })
      .addCase(updateCustomer.pending, (state) => {
        state.error = false;
        state.pending = true;
      })
      .addCase(updateCustomer.rejected, (state) => {
        state.error = true;
        state.pending = false;
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        state.error = false;
        state.pending = false;
        state.customer = action.payload;
      })
      .addCase(newCustomers.pending, (state) => {
        state.error = false;
        state.pending = true;
      })
      .addCase(newCustomers.rejected, (state) => {
        state.error = true;
        state.pending = false;
      })
      .addCase(newCustomers.fulfilled, (state, action) => {
        state.error = false;
        state.pending = false;
        state.successful = true;
        state.customer = action.payload;
      })
      .addCase(fetchTopCustomers.pending, (state) => {
        state.error = false;
        state.pending = true;
      })
      .addCase(fetchTopCustomers.rejected, (state) => {
        state.error = true;
        state.pending = false;
      })
      .addCase(fetchTopCustomers.fulfilled, (state, action) => {
        state.error = false;
        state.pending = false;
        state.topCustomers = action.payload;
      });
  },
});

export const { removeCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;
