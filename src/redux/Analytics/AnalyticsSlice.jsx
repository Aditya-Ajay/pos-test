import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Async thunk to fetch overview analytics data
export const fetchOverviewAnalytics = createAsyncThunk(
  "analytics/fetchOverviewAnalytics",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/analytics/overview`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data, "overview analytics");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch overview analytics data");
    }
  }
);

// Async thunk to fetch category sales analytics data
export const fetchAnalytics = createAsyncThunk(
  "analytics/fetchAnalytics",
  async ({ period, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/analytics/category-sales?period=${period}&limit=${limit}`, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data, "analytics");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch analytics data");
    }
  }
);

// Async thunk to fetch revenue analytics data
export const fetchRevenueAnalytics = createAsyncThunk(
  "analytics/fetchRevenueAnalytics",
  async (period, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/analytics/revenue?period=${period}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data, "revenue analytics");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch revenue analytics data");
    }
  }
);

// Async thunk to fetch customer analytics data
export const fetchCustomerAnalytics = createAsyncThunk(
  "analytics/fetchCustomerAnalytics",
  async (period, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/analytics/customer-analytics?period=${period}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data, "customer analytics");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch customer analytics data");
    }
  }
);

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    period: "daily", // Default period
    data: [],
    revenueData: [],
    customerData: {}, // Store customer analytics data
    totalRevenue: 0,
    totalProfit: 0,
    periodStart: null,
    periodEnd: null,
    overview: {
      todayRevenue: { value: 0, growthPercentage: 0 },
      todayProfit: { value: 0, growthPercentage: 0 },
      totalSoldProducts: { value: 0, growthPercentage: 0 },
      totalRepairOrders: { value: 0, growthPercentage: 0 },
    },
    statusOverviewAnalytics: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    statusAnalytics: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    statusRevenueAnalytics: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    statusCustomerAnalytics: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'

    error: null,
  },
  reducers: {
    setPeriod: (state, action) => {
      state.period = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Overview Analytics
      .addCase(fetchOverviewAnalytics.pending, (state) => {
        state.statusOverviewAnalytics = "loading";
        state.error = null;
      })
      .addCase(fetchOverviewAnalytics.fulfilled, (state, action) => {
        state.statusOverviewAnalytics = "succeeded";
        state.overview = action.payload;
      })
      .addCase(fetchOverviewAnalytics.rejected, (state, action) => {
        state.statusOverviewAnalytics = "failed";
        state.error = action.payload;
      })

      // Category Sales Analytics
      .addCase(fetchAnalytics.pending, (state) => {
        state.statusAnalytics = "loading";
        state.error = null;
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.statusAnalytics = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.statusAnalytics = "failed";
        state.error = action.payload;
      })

      // Revenue Analytics
      .addCase(fetchRevenueAnalytics.pending, (state) => {
        state.statusRevenueAnalytics = "loading";
        state.error = null;
      })
      .addCase(fetchRevenueAnalytics.fulfilled, (state, action) => {
        state.statusRevenueAnalytics = "succeeded";
        state.revenueData = action.payload.data;
        state.totalRevenue = action.payload.totalRevenue;
        state.totalProfit = action.payload.totalProfit;
        state.periodStart = action.payload.periodStart;
        state.periodEnd = action.payload.periodEnd;
      })
      .addCase(fetchRevenueAnalytics.rejected, (state, action) => {
        state.statusRevenueAnalytics = "failed";
        state.error = action.payload;
      })

      // Customer Analytics
      .addCase(fetchCustomerAnalytics.pending, (state) => {
        state.statusCustomerAnalytics = "loading";
        state.error = null;
      })
      .addCase(fetchCustomerAnalytics.fulfilled, (state, action) => {
        state.statusCustomerAnalytics = "succeeded";
        state.customerData = action.payload.data; // Store customer analytics data
      })
      .addCase(fetchCustomerAnalytics.rejected, (state, action) => {
        state.statusCustomerAnalytics = "failed";
        state.error = action.payload;
      });
  },
});

export const { setPeriod } = analyticsSlice.actions;
export default analyticsSlice.reducer;
